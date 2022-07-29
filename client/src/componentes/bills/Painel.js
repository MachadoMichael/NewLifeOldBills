import React from 'react'
import Input from './Input'
import Percent from './Percent'

export default function Painel(props) {

    if (props.handle) {
        return (

            <div className='painel'>
                <h2 className='t2'>
                    {props.h2}
                    <button onClick={() => props.setShowModal('modal')} className='addCusto'>+</button>
                </h2>
              
                <Input handle={props.handle} />

            </div>

        )
    } else {
        return (
            <div className='painel'>
                <h2 className='t2'>{props.h2}</h2>
                <Percent />
            </div>
        )
    }

}





