import React from 'react'
import logo from '../../assets/svg/logo.svg';
import circleArrow from '../../assets/svg/circle-arrow.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar-inner">
          <a className='logo' href="/"><img src={logo} alt="arrow" /></a>
          <ul className='menu'>
            <li><a href="#">Kurslar</a></li>
            <li><a href="#">Natijalar</a></li>
            <li><a href="#">Jamoa</a></li>
            <li><a href="#">Online darslar</a></li>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className="buttons">
            <button className="registr">Ro’yxatdan o’tish</button>
            <button className="login">Kirish <img src={circleArrow} alt="circle" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar