import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Type from './pages/type/Type.jsx';
import Card from './pages/Card/Card.jsx';
import Checkout from './pages/checkout/Checkout.jsx';
import Thanks from './pages/thanks/Thanks.jsx';
import "./i18n"; // Import the i18n configuration
import Search from './pages/search/Search.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='type/:id' element={<Type />} />
    <Route path='card' element={<Card />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='thanks' element={<Thanks />} />
    <Route path='search' element={<Search />} />

  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)