export interface PortfolioResponseType
	{
		"status": string,
		"wallet": {
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
		}[]		
	}


	export interface PortfolioAuxType
	{
		"wallet": PortfolioType[]		
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
	}[]		