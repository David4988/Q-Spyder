import React, { StrictMode } from 'react'
import Form from "./components/Form"
import Header from './components/Header'
import Footer from './components/Footer'
import ListKeys from './components/ListKeys'
import Event from './event/event'
import States from './event/States'
import Login from './components/login'
import Register from './components/Register'

const App = () => {
  return (
    <React.Fragment>
      {/* <Header/> */}
        {/* <Form></Form> */}
        {/* <Login /> */}
        <Register />
        {/* <States /> */}
        {/* <ListKeys /> */}
      {/* <Footer/> */}
    </React.Fragment>
  )
}

export default App