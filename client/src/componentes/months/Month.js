import React from 'react'
import MonthPainel from './MonthPainel'


import './Month.css'

export default function Month() {
  return (
    <div className='background'>
      <div className='containerMonth'>
        <MonthPainel h2='Selecione o periodo'/>
        <MonthPainel h2='Detalhamento'/>
      </div>

    </div>
  )
}