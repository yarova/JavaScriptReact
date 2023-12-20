class CurrencyApiClient {
    async getExchangeRate(sourceCurrency, destinationCurrency) {
        var requestParameters = {
            method: "GET",
            headers: {
                apikey: "ZDLWQ1wptT59puo6iLBpIFEWAlNqzeQ4",
            },
        };

        var url = `https://api.apilayer.com/exchangerates_data/convert?to=${destinationCurrency}&from=${sourceCurrency}&amount=1`;

        var responce = await fetch(url, requestParameters);
        var json = await responce.json();

        return json.result;
    }
}

export default new CurrencyApiClient();
