import React from 'react'
import './Homepage.css'
import Image from './Image'
import PainelHomepage from './PainelHomepage'
import Calculator from '../../images/calculator.jpg'


export default function Homepage() {
    return (
        <div className='backgroundHomepage'>
            <Image src={Calculator} />
            <PainelHomepage />
        </div>
    )
}
