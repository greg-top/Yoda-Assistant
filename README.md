# YODA ASSISTANT - React App

## About

Daily Assistant, which uses up all the basic aspects of React.

## How it works:

1.) The user can add a note in one of the three views:

- morning
- afternoon
- evening

The user can switch between the sections using the navigation shown in the header.

2.) The form on the right side of the window is responsible for adding notes.

The form has the following fields:

```
- title
- description
- isImportant
- type of note

```

3.) When the user fills out the form and clicks the add button, the note will go to the appropriate view.

## Stack:

```
- React (create-react-app, react-dom, react-router, react-router-dom, function components, class components, Context API)
- CSS modules
- SCSS
- Netlify-cli (deployment)
```

## Installation of the required packages

- initialize project:

```
npx create-react-app yoda-assistant
```

- Installation of react-router and react-router-dom

```
npm install react-router react-router-dom --save
```

- Installation of Sass

```
npm install node-sass --save
```

- CSS modules - already included in the create-react-app package

## Work Plan

1.) Build views for the application with a react-router

```
- Root
- MorningView
- AfternoonView
- EveningView
```

<br>
2.) Create components for handling application

```
- Header
  - HeaderNavigation
- Button
- Title
- List
  - ListItem
- Form
```

3.) Style the components
4.) Create a context using the React context API and write the application logic

---

## Live demo

https://awesome-pasteur-fce72d.netlify.app/

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
