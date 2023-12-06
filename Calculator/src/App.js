import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: 50,
            title: "Calculator"
        };
        this.buttons = [
            "C",
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "0",
            ".",
            "=",
            "/",
        ];

        this.allowedCharacters = this.buttons.filter(i => i != "C");
    }

    onButtonClick(btnText) {
        console.log(`Hello ${btnText}`);
        if (btnText === "=") {
            this.onEqualClick();
            return;
        }
        if(btnText === "C") {
            this.onClearClick();
            return;
        }
        this.setState({
            text: this.state.text + btnText
        });
    }

    onEqualClick(){
        console.log("EqualClick");
        var result = eval(this.state.text);
        this.setState({
            text: result,
        });
    }

    onClearClick(){
        console.log(`I clicked C`);
        this.setState({
            text: 0
        });
    }

    onInputChange(event){
        var newText = event.target.value;
        var lastCharacter = newText.slice(-1);
        var hasInvalidCharacter = this.allowedCharacters.indexOf(lastCharacter) == -1;

        if (!hasInvalidCharacter){
            this.setState({ text: this.ensureHasSingleOperation(newText) });
        }
    }

    ensureHasSingleOperation(text){
        var lastCharacter = text.slice(-1);
        var lastTwoCharacters = text.slice(-2);
        var hasNumbers = lastTwoCharacters.match(/^([^0-9]*)$/) == null;
        if (hasNumbers) {
            return text;
        } else {
            return text.slice(0, -2) + lastCharacter;
        }
    }

    render() {
        const buttonList = this.buttons.map((i) => (
            <button
                onClick={() => this.onButtonClick(i)}
                className="btn bg-light text-dark"
            >
                {i}
            </button>
        ));

        return (
            <div className="container-fluid container-xxl mt-5">
                <div
                    className="w-100"
                    style={{ height: 600, borderRadius: 24 }}
                >
                    <div className="container-fluid container-xxl mt-5 card w-50">
                        <h3 className="text-center text-dark fw-bold fs-1">
                            {this.state.title}
                        </h3>
                        <div className="mt-3 container-fluid container-xxl w-50">
                            <div className="calculator">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="display"
                                    onChange={(e) => this.onInputChange(e)}
                                    value={this.state.text}
                                />
                                <div className="buttons">{buttonList}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
