import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res) => {
    // res.status(200).json({
    //     message: "ok"
    // })

    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName, email, username, password } = req.body //details from body, form, json
    // console.log("email: ", email);

    // if(fullName===""){
    //     throw new ApiError(400, "Fullname is required")
    // }

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
        //The whole expression returns true if at least one of the fullName, email, username, or password variables is either null, undefined, or contains only whitespace characters. Otherwise, it returns false.
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
        //$or:-> It allows you to specify multiple conditions, and if any of those conditions are true, the document will match the query. This operator is useful when you need to retrieve documents that satisfy at least one of several criteria.
    })

    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path; //multer gives the ability of req.files...
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0) {
        coverImageLocalPath = req.files?.coverImage[0].path
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select( //mongoDB adds _id by itself
        "-password -refreshToken" //jo jo nhi chahiye

        //The purpose of this code is to fetch a user document from the database by its _id, but exclude the password and refreshToken fields from the result. This is typically done to ensure that sensitive information is not exposed when the user data is sent to the client or processed further.

        // .select("-password -refreshToken"):
        // The select method is used to specify which fields should be included or excluded from the query result.
        // The string "-password -refreshToken" indicates that the password and refreshToken fields should be excluded from the result. The - sign before the field names indicates exclusion.
        // This is useful for security and privacy reasons, as you might not want to expose sensitive information like passwords and refresh tokens.
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

export {registerUser}