import { PortfolioType, TransactionType } from "./portfolio.interface"

export const emptyPortfolio:PortfolioType[] = [
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
            "open": "0",
            "close": "0"
          },
          {
            "datetime": "",
            "open":"0",
            "close": "0"
          }
        ],
        "status": ""
      }
    }
  ]

export const emptyTransactions: TransactionType[] = [
	{
	  "id": 0,
	  "asset": "",
	  "amount": 0,
	  "open_price": 0,
	  "date": ""
	}
  ]