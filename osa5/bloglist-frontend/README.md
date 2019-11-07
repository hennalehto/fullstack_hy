## Exercises from the course Full Stack Development (fullstackopen.com)

## 5.1
Clone the application from Github with the command:
```
git clone https://github.com/fullstackopen-2019/bloglist-frontend
```
Implement login functionality to the frontend. The token returned with a successfull login is saved to the applications state user.

If a user is not logged in, only the loginform is visible.

If user is logged in, the name of the user and a list of blogs is shown.

User details of the logged in user do not have to be saved to the local storage yet.

## 5.2
Make the login 'permanent' by using the local storage. Implement also a way to log out.

Ensure the browser does not remember the details of the user after logging out.

## 5.3
Expand your application to allow a logged in user to add new blogs.

## 5.5
Change the form for creating blog posts so that it is only displayed when appropriate.

It expands when button new note is clicked

## 5.11
Define PropTypes for one of the components of your application.

## 5.12
Add ESlint to the project. Define the configuration according to your liking. Fix all of the linter errors.

## 5.13
Add the following component temporarily to your application:
```
import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog
```
Write a test that verifies that the component renders the title, author and amount of likes for the blog post.

## 5.14
Write a test that verifies that if the like button of a component is pressed twice, the event handler function passed in the component's props is called twice.

## 5.18
Simplify the login form of your application with the useField custom hook we defined earlier.
