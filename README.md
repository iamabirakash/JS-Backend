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