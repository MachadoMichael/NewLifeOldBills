
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function MonthPainel(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('/stateMonths').then(res => {
            return res.json();
        }).then(data => {
            dispatch({ type: 'LIST_MONTHS_VALUE', payload: data })
        })
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Months = useSelector((state) => state.month)

    const [select, setSelect] = useState({
        onSelect: 'month select',
        offSelect: 'month'
    })

    function selectDataMonth(e, item) {
        let target = e.target

        if (target.className === select.offSelect) {
            target.className = select.onSelect
        } else {
            target.className = select.offSelect
        }
        dispatch({ type: 'ADD_DATA_MONTH', payload: Months[item], nameMonth: item })
    }

    const listMonth = Months.map(ListingMonth)
    function ListingMonth(item, index) {
        
        return (
            <div id={index} key={index} className={select.offSelect}
                onClick={(e) => selectDataMonth(e, index)}>
                    {item['Name']}
            </div>
        )
    }
    let valorSalario = 0
    let percentual = 0

    const Data = useSelector((state) => state.data)
    const dataMonth = Data.map(imprimirDataMonth)
    function imprimirDataMonth(item, index) {

        if (item.bills === 'Salario') {
            valorSalario = item.value
            return (
                <div key={index} className='month'>
                    {item.bills}: R$ {Number(item.value)}
                </div>
            )
        }
        if (item.bills === '_id') {
            return (
                <div key={index} className='month'>
                    {item.bills}: {item.value}
                </div>
            )
        }
        if (item.bills === 'Name') {
            return (
                <div key={index} className='month'>
                    {item.bills}: {item.value}
                </div>
            )
        }
        if (item.value !== 0) {

            percentual = (item.value * 100) / valorSalario

            return (
                <div key={index} className='month'>
                    {item.bills}: R$ {Number(item.value)}  ({percentual.toFixed(2)}%)
                </div>
            )
        }
    }

    if (props.h2 === 'Selecione o periodo') {
        return (
            <div className='MonthPainel'>
                <h2 className='t2month'>{props.h2}</h2>
                {listMonth}
            </div>

        )
    } else {
        return (
            <div className='MonthPainel'>
                <h2 className='t2month'>{props.h2}</h2>
                {dataMonth}
            </div>
        )

    }
}
