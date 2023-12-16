import React from 'react'
import ReactDOM from 'react-dom/client'
import CurrencyRow from './CurrenyRow';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.Fragment>
        <h1> Currency converter </h1>
        <CurrencyRow />
        <span> = </span>
        <CurrencyRow />
        
    </React.Fragment>
)
