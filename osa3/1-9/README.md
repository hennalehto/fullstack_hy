## Exercises from the course Full Stack Development (fullstackopen.com)

## 3.1
Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

## 3.2
Implement a page at the address http://localhost:3001/info that looks roughly like this:

![alt text](https://fullstackopen.com/static/a563a2056c3207a42cfe2d0a7d081c5a/14be6/23e.png)

The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

## 3.3
Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5

If an entry for the given id is not found, the server has to respond with the appropriate status code.

## 3.4
Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

## 3.5
Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate id's is small.

## 3.6
Implement error handling for creating new entries. The request is not allowed to succeed, if:

-The name or number is missing
-The name already exists in the phonebook

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error.

## 3.9
Make the backend work with the frontend from the previous part. Do not implement the functionality for making changes to the phone numbers yet, that will be implemented in exercise 3.17.
