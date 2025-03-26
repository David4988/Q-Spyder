import {BrowserRouter, createBrowserRouter} from 'react-router-dom'

const routes = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />
        },
        {
            path:"/services",
            element: < Services />
        },
        {
            path: "/about",
            element: <AboutUs />
        },
        {
            path: "/contact",
            element: <ContactUs />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
)

export default routes