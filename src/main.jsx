import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import HeaderWithBanner from './components/HeaderWithBanner/HeaderWithBanner.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/productsData.json')
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element: <DashBoard></DashBoard>
      },
      {
        path:"/headerwithbanner",
        element: <HeaderWithBanner></HeaderWithBanner>
      },
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
