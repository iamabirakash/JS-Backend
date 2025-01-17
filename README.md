* ### Note

1. Access Tokens are Short Lived, whereas Refresh Tokens are longed lived.

2. User is a Mongoose Object, user is defined by us

# npm packages to be installed 
```
npm i mongoose
```
```
npm i express
```
```
npm i cors
```
CORS (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.

```
npm i cookie-parser
```
```
npm i dotenv
```
```
npm i mongoose-aggregate-paginate-v2
```
The mongoose-aggregate-paginate-v2 package is a useful plugin for Mongoose that adds pagination functionality to Mongoose aggregation queries. It simplifies the process of paginating large datasets that are retrieved using Mongoose's aggregation framework, which is typically more complex than simple queries due to the powerful data processing capabilities it provides.

```
npm i bcrypt
```
1. Password Hashing:

Bcrypt hashes passwords to ensure that even if the database is compromised, the actual passwords remain secure.
Hashing converts a plain-text password into a fixed-size string of characters, which is computationally infeasible to reverse.

2. Salting:

Bcrypt automatically generates a salt for each password.
A salt is a random value added to the password before hashing, ensuring that identical passwords result in different hashes. This prevents attackers from using precomputed hash tables (rainbow tables) to crack passwords.

```
npm i jsonwebtoken
```
1. Authentication:

JWTs are used to securely transmit information between the client and the server. After a user logs in, the server generates a JWT, which is then sent to the client. The client includes this token in the Authorization header of subsequent requests to access protected routes or resources.

2. Authorization:

JWTs can carry information about user permissions and roles, enabling the server to grant or deny access to resources based on the claims contained within the token.

```
npm i cloudinary
```
Cloudinary is a cloud-based service that provides an end-to-end image and video management solution.

```
npm i multer
```
Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js and Express applications.