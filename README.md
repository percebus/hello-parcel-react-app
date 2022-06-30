# `hello-parcel-react-app`

My First Parcel React App

See the [Parcel React recepie](https://parceljs.org/recipes/react/)

## Setup

### First time

```bash
$> npm run setup
```

### Dependencies

```bash
$> npm install
```

## Development

### Build: `dist/`

```bash
$> npm run dist
```

### R&D

#### serve

```bash
$> npm start
```

Will host it in http://localhost:1234

#### browser

```bash
$> npm run browser
```

Opens a new tab on http://localhost:1234

## Tips

### Avoid class components 

Fast Refresh only works with function components (and Hooks). 

### Export only React components 

If a file exports a mix of React components and other types of values, its state will be reset whenever it changes. To preserve state, only export React components and move other exports to a different file if possible.

### Avoid unnamed default exports

Declaring components using a default exported arrow function will cause state to be reset when it is changed. Use a named function, or assign the arrow function to a variable instead.

### Keep entry components in their own files

Entry components should be in a separate file from the one that calls ReactDOM.render or they will be remounted on every change.
