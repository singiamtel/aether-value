import axios from 'axios';
import { useState, useEffect } from 'react';
import { PortfolioAuxType, PortfolioType, PortfolioResponseType } from '../models/portfolio.interface';
import {get} from './api'

/* Portfolio vacío a devolver en caso de error */
const emptyPortfolio:PortfolioAuxType = {
    "wallet": [
        {
        "amount": 0,
        "targetPrice": 0,
        "api": {
        "meta": {
            "symbol": "",
            "currency": "",
            "exchange": "",
            "type": ""
        },
        "values": [
            {
            "datetime": "",
            "open": 0,
            "close": 0
            },
            {
            "datetime": "",
            "open":0,
            "close": 0
            }
        ],
        "status": ""
        }
    }]
}



export const GetPortfolio = () => {
    const [portfolio, setPortfolio] = useState<PortfolioAuxType>(emptyPortfolio);

    const GetPortfolio = async () => {
        const {status, wallet} = await get<PortfolioResponseType>('localhost:8080');
        if(status != "success"){
            alert("Failed to update portfolio")
        }
        setPortfolio({wallet})
    }

    useEffect(() => {
        GetPortfolio()
    })

    return portfolio
}
export default GetPortfolio

