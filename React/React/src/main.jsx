import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
// let obj = React.createElement("h1",{id:"first"}, "Created using React createElement")
// ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello</h1>) //!Creating the root element by selecting it using getElementById()

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)