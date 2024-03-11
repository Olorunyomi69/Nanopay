import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Home, RootLayout, About, ContactUs, Faq } from './pages';

// import Navbar from './Components/Navbar';
// import Header from './Components/Header'
// import Footer from './Components/Footer'


const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element= {<RootLayout/>}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="Faq" element={<Faq />} />
    <Route path="contact" element={<ContactUs />} />
    </Route>
  )
);



function App() {
  return (
   
<RouterProvider router = {router} />

  );
}

export default App;

//Nanopay is a mini fintech project intended to leverage the use of crypto 
//currency to break barriers of payment errors, give easy acces to users via its UI simplicity
// as well as an opportunity to invest and get up to 25% ROI per annum and 5% cash back on every transactions  
