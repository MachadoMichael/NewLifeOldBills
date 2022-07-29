import React from 'react'

export default function Modal(props) {

    function hideModal(e) {
        let target = e.target;
        if (target.id === 'modal') {
            props.onHideModal('modal')
        }
        if (target.id === 'modalMonth') {
            props.onHideModal('modalMonth')
        }

    }

    if (props.modalType === 'addBill') {

        return (
            <div id='modal' onClick={hideModal} className={props.show ? 'modal' : 'modal hide'}>
                <div className='molduraModalBill'>
                    {props.children}
                </div>
            </div>

        )
    } else {
        return (
            <div id='modalMonth' onClick={hideModal} className={props.show ? 'modal' : 'modal hide'}>
                <div className='molduraModalMonth'>
                    {props.children}
                </div>
            </div>

        )
    }

}

