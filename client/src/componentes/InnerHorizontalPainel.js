import React from 'react'

export default function innerHorizontalPainel(props) {
    const handle = props.handle
    if (props.handle) {
        return (
            <div className='innerPainelHorizontal'>
                <h3>{props.h3}</h3>
                <input className='inputSalario' onChange={(event) => handle(event, 'Salário', 0)}></input>
            </div>
        )
    } else {
        return (
            <div className='innerPainelHorizontal'>
                <h3>{props.h3}</h3>
            </div>
        )
    }


}
