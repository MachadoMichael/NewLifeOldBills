import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import Painel from './Painel'
import InnerHorizontalPainel from '../InnerHorizontalPainel';
import Modal from '../Modal';
import Constructor from '../Constructor';

import './Bills.css'

export default function House() {
  const [showModal, setShowModal] = useState(false)
  const [showModalMonth, setShowModalMonth] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/statebills').then(res => {
      return res.json();
    }).then(data => {
      console.log(`data`)
      console.log(data)
      dispatch({ type: 'RESET_BILLS_VALUE', payload: data })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Bills = useSelector((state) => state.bill)
  const Salario = useSelector((state) => state.salary)


  let newValor = {}
  let newMonth = {}

  function handleChangeHouse(event, input, index) {
    let t = event.target.value

    switch (input) {

      case 'Salário':
        newValor[input] = t
        Salario[index].value = newValor[input]
        dispatch({ type: 'ADD_SALARY', payload: [...Salario] })
        break

      case 'inputNewBill':
        newValor[input] = t
        break

      case 'inputMonth':
        newValor[input] = t
        break

      case Bills[index].name:
        newValor[input] = t
        Bills[index].value = Number(newValor[input])
        dispatch({ type: 'ADD_VALUE', payload: [...Bills] })
        break
      default: newValor[input] = t
        break;
    }
  }

  function onHideModal(modal) {
    if (modal === 'modal') {
      setShowModal(false)
    }
    if (modal === 'modalMonth') {
      setShowModalMonth(false)
    }
  }

  var Despesas = Number(0)
  Bills.map((item, index) => Despesas += item.value)

  var DespesasPercent = (Despesas * 100 / Salario[0].value).toFixed(2)

  function addMounth() {
    newMonth['Name'] = newValor['inputMonth']
    newMonth['Salario'] = Number(Salario[0].value)
    Bills.map((item, index) => newMonth[item.name] = item.value)
    newMonth['Despesas'] = Despesas

    dispatch({ type: 'ADD_MONTH', payload: newMonth, nameMonth: newValor['inputMonth'] })
    setShowModalMonth(true)
  }


  return (

    <div className='background'>

      <Modal show={showModal} onHideModal={onHideModal} modalType='addBill'>
        <form action='/addBill' method='POST'>
          <input name='name' onChange={(event) => handleChangeHouse(event, 'inputNewBill')} className='inputNewBill' type='text' placeholder='Nome da conta'></input>
          <input className='invisibleInput' name='value' value={Number(0)}></input>
          <button onClick={() => { dispatch({ type: 'ADD_BILL', payload: Constructor(newValor['inputNewBill']) }); onHideModal('modal') }} className='btnModal'>Save</button>
        </form>

      </Modal>

      <Modal show={showModalMonth} onHideModal={onHideModal} id='addMonth'>
        <h4> O periódo foi adicionado com sucesso.</h4>
        <button onClick={() => { onHideModal('modalMonth') }} className='btnModal'>X</button>
      </Modal>

      <div className='horizontalPainel'>
        <InnerHorizontalPainel h3='Salário: R$' handle={handleChangeHouse} />
        <InnerHorizontalPainel h3={`Resta do salário: R$ ${(Salario[0].value - Despesas)} || ${(100 - (Despesas * 100 / Salario[0].value)).toFixed(2)}%`} />
      </div>

      <div className='container'>
        <Painel h2='Custos' handle={handleChangeHouse} setShowModal={setShowModal}></Painel>
        <Painel h2='Percentual do Salário'></Painel>
      </div>

      <div className='horizontalPainel'>
        <InnerHorizontalPainel h3={`Despesas: R$ ${(Despesas).toFixed(2)}`} />
        <InnerHorizontalPainel h3={`Percentual despesas: ${DespesasPercent}%`} />
      </div>

      <div className='addMonthPainel'>
        <input onChange={(event) => handleChangeHouse(event, 'inputMonth')} className='input' placeholder='exemplo: Janeiro 2022'></input>
        <h4 onClick={addMounth} className='btnAddMonth'>Adicionando periódo</h4>
      </div>
    </div >

  )
}
