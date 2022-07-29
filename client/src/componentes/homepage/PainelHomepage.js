import React from 'react'

export default function PainelHomepage() {
    return (
        <div className='painelHomepage'>
            <div className='textQuestion'>
                Você continua somando suas contas na calculadora?
            </div>
            <div className='textQuestion'>
                Anota em um papel (que você vai perder em no máximo 2 semanas) ?
            </div>
            <br></br>
            <div className='textAnswer'>
                A partir de hoje você tem um sistema simples e fácil para organizar
                suas contas. O NFOB (New life, old bills ou Vida nova, contas velhas)
                é uma solução para você conseguir organizar suas contas, saber todo seu custo mensal,
                descobrir o percentual de cada custo e ainda descobrir o quanto vai te sobrar depois
                de quitar seus boletos.
            </div>
            <div className='textQuestion'>
                "Mas da muito trabalho organizar ?"
            </div>
            <div className='textAnswer'>
                Não!
                Nós já deixamos alguns contas cadastradas,
                caso queira incluir uma nova é só clicar no botão com um "+" e dar nome a conta.
                Também temos o botão para adicionar um período, com ele você pode definir qualquer prazo!
                Seja ano, mês, semana ou até mesmo dia.
            </div>

        </div>
    )
}
