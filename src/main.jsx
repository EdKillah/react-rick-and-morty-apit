import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

/*
const router = createBrowserRouter([
  {
    path: "/character/1",
    element: <div>Hello world!</div>,
  },
]);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//<Route exact path="/" element={<App />} />
//<Route exact path="/" element={<App />} />
//<Route exact path="/character/1" element={<div>Hello world!</div>} />