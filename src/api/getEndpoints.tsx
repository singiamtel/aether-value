import axios from 'axios';
import {apiRoute} from './api'
import {PortfolioResponseType} from '../models/portfolio.interface'

const translateErrorCode = (code:number) => {
  switch(code){
    default:
      return "Not found"
  }
}

export const login = async (user:string, pass:string) => {
  const response = await axios.post(apiRoute+"/login", {username:user, password:pass});
  if(response.data.status === "success"){
    if(sessionStorage.setItem("token", response.data.token) === null)
      console.log("Recieved null object as token")
    else if(sessionStorage.setItem("wallets", JSON.stringify(response.data.wallets)) === null)
      console.log("Recieved null object as wallets")
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

export const GetPortfolios = async (token:string) => {
  let portfolio = await axios.post(apiRoute+"/wallets", {token:token});
    if(portfolio.data.status != "success" && portfolio.data.errorCode){
      let errorMsg = translateErrorCode(portfolio.data.errorCode)
      if(errorMsg !== "Not found"){
        portfolio.data.message = errorMsg
      }
    }
    return portfolio
}

export const GetPortfolioContents = async (token:string,portfolioName:string) => {
  let portfolioContents:PortfolioResponseType = await axios.post(apiRoute+"/wallet/fetch/"+portfolioName, {token:token});
    if(portfolioContents.data.status != "success" && portfolioContents.data.errorCode){
      let errorMsg = translateErrorCode(portfolioContents.data.errorCode)
      if(errorMsg !== "Not found"){
        portfolioContents.data.message = errorMsg
      }
    }
  return portfolioContents.data
}
