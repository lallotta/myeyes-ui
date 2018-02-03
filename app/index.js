import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'

// clean up default browser margins before React is rendered to the DOM
document.body.style.margin = 0;
document.body.style.backgroundColor = "#333333";

render(<App />, document.getElementById('render-target'));