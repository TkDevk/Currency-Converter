import React, { useState, useEffect } from "react";
import './main.css'
const ExchangeApi = 'e84b117546b0f433cc10c348ee177827';
//I need to fetch the api that is why i destruct useEffect
const CurrencyRow = () => {
    {/**I need to pass a Fcn as parameter and 2nd parameter is an array, as soon something changes into the array it will run the useEffect, so as we want to run once we put an empty array*/}
    useEffect(()=>{ 
      fetch(`https://api.exchangeratesapi.io/data?key=${ExchangeApi}`)
      .then(res=> res.json())
      .then(data=> console.log(data))
    },[])

    return (
        <section>
            <input type="number" />
            <select>
                <option value="1"> 1 </option>
                
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
            </select>
        </section>

    );


}

export default CurrencyRow