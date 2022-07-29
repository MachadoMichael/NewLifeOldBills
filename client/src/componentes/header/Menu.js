import React from 'react'
import { Link } from 'react-router-dom'


export default function Menu(props) {

    const navegation = props.menu.map((item, index) =>
        <li key={index}><Link to={`/${item}`} className='menuNav'>{item}</Link></li>)
    return <ul className='menu'>
        {navegation}
    </ul>

}
