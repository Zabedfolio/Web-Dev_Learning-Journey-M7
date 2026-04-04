import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Home from './components/Home/Home.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import User from './components/User/User.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'

// const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      // {
      //   path: 'user',
      //   element: <Suspense fallback={<span>Loading....</span>}>
      //     <User userPromise={userPromise}></User>
      //   </Suspense>
      // }
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }
    ]
  },
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
