import axios from 'axios';
import { useState, useEffect } from 'react';
import { PortfolioAuxType, PortfolioType, PortfolioResponseType } from '../models/portfolio.interface';
import {post, apiRoute} from './api'

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

const translateErrorCode = (code:number) => {
  switch(code){
    default:
      return "Not found"
  }
}

export const login = async (user:string, pass:string) => {
  const response = await axios.post(apiRoute+"/login", {username:user, password:pass});
  if(response.data.status === "success"){
    sessionStorage.setItem("token", response.data.token)
    sessionStorage.setItem("wallets", JSON.stringify(response.data.wallets))
    return true
  }
  return false
}

export const register = async (user:string, pass:string) => {
  const response = await axios.post(apiRoute+"/register", {username:user, password:pass});
  if(response.data.status === "success"){
    sessionStorage.setItem("token", response.data.token)
    sessionStorage.setItem("wallets", JSON.stringify(response.data.wallets))
    return true
  }
  console.log(response.data);
  return false
}

export const GetPortfolio = async (token:string) => {
  let portfolio = await axios.post(apiRoute+"/wallets", {token:token});
    if(portfolio.data.status != "success" && portfolio.data.errorCode){
      let errorMsg = translateErrorCode(portfolio.data.errorCode)
      if(errorMsg !== "Not found"){
        portfolio.data.message = errorMsg
      }
    }
    return portfolio
}

