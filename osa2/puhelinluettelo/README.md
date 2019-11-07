## Exercises from the course Full Stack Development (fullstackopen.com)

## 2.6
Let's create a simple phonebook. In this part we will only be adding names to the phonebook.
## 2.7
Prevent the user from being able to add names that already exist in the phonebook.
## 2.8
Expand your application by allowing users to add phone numbers to the phone book.
## 2.10
If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the App root component.
## 2.11
Store the initial state of the application in the file db.json, which should be placed in the root of the project.
```
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```
## 2.15
Currently the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.
## 2.16
Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.
## 2.17
Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the window.confirm method.

The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource's URL. If we are deleting e.g. a person who has the id 2, we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2. No data is sent with the request.

