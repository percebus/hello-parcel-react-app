# My First React Parcel App

## Tips

### Avoid class components 

Fast Refresh only works with function components (and Hooks). 

### Export only React components 

If a file exports a mix of React components and other types of values, its state will be reset whenever it changes. To preserve state, only export React components and move other exports to a different file if possible.

### Avoid unnamed default exports

Declaring components using a default exported arrow function will cause state to be reset when it is changed. Use a named function, or assign the arrow function to a variable instead.

### Keep entry components in their own files

Entry components should be in a separate file from the one that calls ReactDOM.render or they will be remounted on every change.
