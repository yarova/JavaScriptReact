import React from "react";
import "./App.css";
import currencies from "./currencies";
import currencyApiClient from "./currencyApiClient.js";
//https://codepen.io/dsr/pen/VwxZKZB

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceCurrencyCode: "EUR",
            destinationCurrencyCode: "UAH",
            sourceAmount: 5,
            destinationAmount: 10,
        };
    }

    onSourceCurrencyChange(event) {
        this.setState(
            { sourceCurrencyCode: event.target.value },
            this.calculateDestination
        );
    }

    onSourceAmountChange(event) {
        this.setState(
            { sourceAmount: parseInt(event.target.value) },
            this.calculateDestination
        );
    }

    onDestinationCurrencyChange(event) {
        this.setState(
            { destinationCurrencyCode: event.target.value },
            this.calculateSource
        );
    }

    onDestinationAmountChange(event) {
        this.setState(
            { destinationAmount: parseInt(event.target.value) },
            this.calculateSource
        );
    }

    async calculateSource() {
        console.log(
            `calculating source amount in ${this.state.sourceCurrencyCode} from ${this.state.destinationAmount} ${this.state.destinationCurrencyCode}`
        );
        var exchangeRate = await currencyApiClient.getExchangeRate(
            this.state.sourceCurrencyCode,
            this.state.destinationCurrencyCode
        );

        var sourceAmount = this.state.destinationAmount / exchangeRate;
        sourceAmount = parseFloat(sourceAmount.toFixed(2));

        this.setState({ sourceAmount: sourceAmount });
    }

    async calculateDestination() {
        console.log(
            `calculating destination amount in ${this.state.destinationCurrencyCode} from ${this.state.sourceAmount} ${this.state.sourceCurrencyCode}`
        );
        var exchangeRate = await currencyApiClient.getExchangeRate(
            this.state.sourceCurrencyCode,
            this.state.destinationCurrencyCode
        );

        var destinationAmount = this.state.sourceAmount * exchangeRate;
        destinationAmount = parseFloat(destinationAmount.toFixed(2));

        this.setState({ destinationAmount: destinationAmount });
    }

    render() {
        var xx = currencies;

        return (
            <div className="currency-converter">
                <div className="currency-form currency-from">
                    <input
                        type="text"
                        value={this.state.sourceAmount}
                        onChange={(e) => this.onSourceAmountChange(e)}
                    />
                    <select
                        onChange={(e) => this.onSourceCurrencyChange(e)}
                        value={this.state.sourceCurrencyCode}
                    >
                        {Object.entries(xx).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="eq">=</div>
                <div className="currency-form currency-to">
                    <input
                        type="text"
                        value={this.state.destinationAmount}
                        onChange={(e) => this.onDestinationAmountChange(e)}
                    />
                    <select
                        onChange={(e) => this.onDestinationCurrencyChange(e)}
                        value={this.state.destinationCurrencyCode}
                    >
                        {Object.entries(xx).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default App;
