## Remember to: 

### `npm i`

To install node_modules

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Assignment: 
# Google task clone ☑️

You are in charge of building the API for a to-do list app that resembles Google Task. 

You are going to need 2 main tables, **tasks** and **planners.**

```jsx
//TASK STRUCTURE: 
	id: PK, UUID
	content: string, REQUIRED
	done: boolean, REQUIRED

//PLANNER STRUCTURE
	id: PK, UUID
	name: string, REQUIRED

//IMPORTANT! I have not included the FKs that will get created with the relation
```

## API info:

- Each task is assigned to a planner. (Create a table relation based on this)
- Remember to add error handling in your API.
- The API should be deployed on heroku

## Endpoints:

### GET /task

returns ONLY tasks who are not marked as done yet 

### POST /task

creates a new task and returns it

### PUT /task/:id

edits the selected task and returns an updated list of tasks (not marked as done)

### DELETE /task/:id

deleted the selected task

### GET /planner

returns ALL planners and the respective tasks 

### POST /planner

creates a new planner and returns it

### PUT /planner/:id

edits the selected planner and returns an updated list of planners

### DELETE /planner/:id

deleted the selected planner and all tasks bound to it

When you are done with the API, fork this repo (frontend) and connect the two projects. 

## Frontend info:

You should not need to change the styling/logic of components, but here's a quick rundown, as you might need some of this info to make sure everything works smoothly. 

Most of your fetching should be in App.js to ensure a “single source of truth”. 

You job will be mostly connecting and making sure the right tasks are showing in the right place.

Components: 

- Dropdown:
    - Props:
        - fetchSelPlanners: function, passes the selected planner to App.js, takes two params, the tasks for the selected planner and the id of the selected id.
        - planners: array of planners
    - Role: display the planners in a dropdown, show the selected planner
- Option:
    - Props: plannerName: string
    - Role: display the planner name. When clicked, it will set the planner as selected in Dropdown.jsx
- Modal:
    - Note: You **will** need to do some fetching in here
    - Props:
        - isOpen: boolean
        - close: function, closes the modal
        - type: string, renders either the add task modal or the add planner modal
        - planners: array of planners
    - Role: add tasks and planners
- SingleTask
    - Props:
        - content: string, the actual to-do
        - id: the task id from the db
        - setDone: function, takes the id as param and **should call the api to set the task to done (this is something you should take care of).**
        

# Extra:

If you are done with all of the above, the frontend if connected, working, and the API deployed, the tasks you add are showing up updated etc... feel free to add all the extras (try to keep them BE focused) you want. Some examples might be: 

- Task history
- Search bar for the tasks
- Color customization of the planners (e.g. "Work" planner's task show up in pink)
- Pagination / Limit / Order
