## Exercises from the course Full Stack Development (fullstackopen.com)

## 3.12
Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.

Create a mongo.js file in the project directory, that can be used for adding entries to the phonebook, and for listing all of the existing entries in the phonebook.

The application should work as follows. You use the program by passing three command-line arguments (the first is the password), e.g.:
```
node mongo.js yourpassword Anna 040-1234556
```
As a result, the application will print:
```
added Anna number 040-1234556 to phonebook
```
The new entry to the phonebook will be saved to the database. Notice that if the name contains whitespace characters, it must be enclosed in quotes:
```
node mongo.js yourpassword "Arto Vihavainen" 040-1234556
```
If the password is the only parameter given to the program, meaning that it is invoked like this:
```
node mongo.js yourpassword
```
Then the program should display all of the entries in the phonebook:
```
phonebook:
Anna 040-1234556
Arto Vihavainen 045-1232456
Ada Lovelace 040-1231236
```
## 3.13
Change the fetching of all phonebook entries so that the data is fetched from the database.

Verify that the frontend works after the changes have been made.

## 3.14
Change the backend so that new numbers are saved to the database. Verify that your frontend still works after the changes.

At this point, you can choose to simply allow users to create all phonebook entries. At this stage, the phonebook can have multiple entries for a person with the same name.

## 3.15
Change the backend so that deleting phonebook entries is reflected in the database.

Verify that the frontend still works after making the changes.

## 3.16
Move the error handling of the application to a new error handler middleware.

## 3.18
Also update the handling of the api/persons/:id and info routes to use the database, and verify that they work directly with the browser, Postman, or VS Code REST client.

## 3.19
Add validation to your application, that will make sure that you can only add one number for a person in the phonebook. Our current frontend won't allow users to try and create duplicates, but we can attempt to create them directly with Postman or the VS Code REST client.

If an HTTP POST request tries to add a name that is already in the phonebook, the server must respond with an appropriate status code and error message.

## 3.20
Expand the validation so that the name stored in the database has to be at least three characters long, and the phone number must have at least 8 digits.

Expand the frontend so that it displays some form of error message when a validation error occurs.

## 3.21
Generate a new "full stack" version of the application by creating a new production build of the frontend, and copy it to the backend repository. Verify that everything works locally by using the entire application from the address https://localhost:3001.

Push the latest version to Heroku and verify that everything works there as well.

## 3.22
Add ESlint to your application.
