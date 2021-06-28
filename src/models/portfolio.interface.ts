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
        "open": number,
        "close": number
      },
      {
        "datetime": string,
        "open":number,
        "close": number
      }
    ],
    "status": string
  }
}
