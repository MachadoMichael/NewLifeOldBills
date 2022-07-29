import React from 'react'
import { useSelector } from 'react-redux'


export default function Percent() {
    const Bills = useSelector((state) => state.bill)
    const Salary = useSelector((state) => state.salary)

    function convertendoValores(item, index) {
        return (
            <div className='percent' key={index}>
                <h5>{item.name}: {(item.value * 100 /Salary[0].value).toFixed(1)}%</h5>
            </div>)
    }
    
    const valoresPercent = Bills.map(convertendoValores)
    return (
        <ul>
            {valoresPercent}
        </ul>
    )
}
