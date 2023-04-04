import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Frindes from './components/Frindes/Frindes';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/contact",
//     element: <div>this is route contact</div>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Info></Info>
      },
      {
        path: "frindes",
        element: <Frindes></Frindes>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"friend/:friendId",
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:"posts",
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
    
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contact",
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>404</div>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
