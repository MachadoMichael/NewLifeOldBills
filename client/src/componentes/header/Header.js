import React from "react";
import '../../App.css'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export default function Header(props) {
    return (
        <div className='header'>
            <h1><Link className='logo' to={'/'}>{props.logo}</Link></h1>
            <Menu menu={props.menu}></Menu>
        </div>
    )
}
