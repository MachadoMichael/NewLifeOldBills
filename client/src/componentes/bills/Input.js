import React from 'react'
import { useSelector } from 'react-redux'


export default function Input(props) {
    const Bills = useSelector((state) => state.bill)
    const handle = props.handle

    function InputName(input, index) {
        return (
            <div className='inputs' key={index}>
                <div>
                    <label>{input.name}</label>
                </div>
                <div>
                    <input className='input' type='text' onChange={(event) => handle(event, input.name, index)}></input>
                </div>
            </div>
        )
    }

    const inputs = Bills.map(InputName)

    return (
        <ul>
            {inputs}
        </ul>
    )
}