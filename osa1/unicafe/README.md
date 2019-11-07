### Exercises from the course Full Stack Development (fullstackopen.com)

## 1.6
Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total amount of collected feedback for each category. Your final application could look like this:

![alt text](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/14be6/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

## 1.7
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

## 1.8
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

## 1.9
Change your application to display statistics only once feedback has been gathered.

## 1.10
Let's continue refactoring the application. Extract the following two components:

- Button for defining the buttons used for submitting feedback
- Statistic for displaying a single statistic, e.g. the average score.

## 1.11
Display the statistics in an HTML table.
