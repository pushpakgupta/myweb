import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.webp';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Header = () =>{
  return (
    <>
        <header>
    <div className='announcmentbar'>
        <p>Free shipping on all orders over $70</p>
    </div>
    <div className='header'>
        <div className="container">
          <div className="row align-items-center my-4">
            <div className='col logo-image'>
              <Link to="/"><img src={logo} alt={logo}/></Link>
            </div>
            <div className='col navigation'>
               <ul>
                 <li><NavLink activeClassName="active_nav" to='/'>Home</NavLink></li>
                 <li><NavLink activeClassName="active_nav" to='/about-us'>About Us</NavLink></li>
                 <li><NavLink activeClassName="active_nav" to='/shop'>Shop</NavLink></li>
                 <li><NavLink activeClassName="active_nav" to='/blog'>Blog</NavLink></li>
                 <li><NavLink activeClassName="active_nav" to='/contact-us'>Contact Us</NavLink></li>
               </ul>
            </div>
            <div className='col icon-section'>
               <div className='icons'>
                <div className=' search'><Link to='/search'><SearchOutlinedIcon/></Link></div>
                <div className=' cart'><Link to='/cart'><ShoppingCartOutlinedIcon/></Link></div>
                <div className=' account'><Link to='/account'><PersonOutlineOutlinedIcon/></Link></div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </header>
    </>
  );
}

export default Header;