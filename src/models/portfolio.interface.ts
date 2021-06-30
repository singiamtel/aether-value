export interface PortfolioResponseType{
  data: {
    "status": string,
    "message": string,
    errorCode?: number,
    "wallet": PortfolioType[]
    
  }
}
export interface PortfolioType
{
  "amount": number,
  "targetPrice": number,
  "api": {
    "meta": {
      "symbol": string,
      "currency": string,
      "exchange": string,
      "type": string
    },
    "values": [
      {
        "datetime": string,
        "open": string,
        "close": string
      },
      {
        "datetime": string,
        "open":string,
        "close": string
      }
    ],
    "status": string
  }
}

export interface TransactionResponseType{
  data: {
    "status": string,
    "message": string,
    errorCode?: number,
    "history": TransactionType[]
  }
}
export interface TransactionType
{
    "id": number,
    "asset": string,
    "amount": number,
    "open_price": number,
    "date": string
}

