import React from 'react';
import './RootLayout.css';
import { Navbar, Header, Footer, Journey } from '../../Components';

import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
    <div className='header-pad'>
     <Navbar/>
    <Header/>
    </div>
     <main>
        <Outlet/>
     </main>
     <Journey/>
     <Footer/>
    </div>
  )
}

export default RootLayout