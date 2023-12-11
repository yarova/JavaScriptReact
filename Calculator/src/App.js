import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MathUtils from "./MathUtils";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 0,
            title: "Calculator",
            mode: "light",
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

        this.allowedCharacters = this.buttons.filter((i) => i != "C");
    }

    onModeClick(mode) {
        this.setState({ mode: mode });
    }

    onEqualClick() {
        var result = eval(this.state.text);
        this.setState({ text: result });
    }

    onClearClick() {
        this.setState({ text: 0 });
    }

    onKeyDown(event) {
        if (event.key === "Enter") {
            this.onEqualClick();
        }
    }

    onButtonClick(btnText) {
        console.log(`Hello ${btnText}`);
        if (btnText === "=") {
            this.onEqualClick();
        } else if (btnText === "C") {
            this.onClearClick();
        } else {
            var newText = this.state.text + btnText;
            this.setState({
                text: MathUtils.validateAndCorrectEquation(newText),
            });
        }
    }

    onInputChange(event) {
        var newText = event.target.value;
        var lastCharacter = newText.slice(-1);
        var hasValidCharacter =
            this.allowedCharacters.indexOf(lastCharacter) !== -1;
        var isEmptyString = lastCharacter == "";
        var shouldUpdate = hasValidCharacter || isEmptyString;

        if (shouldUpdate) {
            this.setState({
                text: MathUtils.validateAndCorrectEquation(newText),
            });
        }
    }

    render() {
        const buttonList = this.buttons.map((i) => (
            <button
                onClick={() => this.onButtonClick(i)}
                className="btn bg-light text-dark"
                key={i}
            >
                {i}
            </button>
        ));

        return (
            <div
                className={`container-fluid container-xxl pt-5 ${this.state.mode}-mode`}
            >
                <div
                    className="w-100"
                    style={{ height: 600, borderRadius: 24 }}
                >
                    <div className="container-fluid container-xxl mt-5 card w-50">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                for="flexSwitchCheckDefault"
                            ></label>
                        </div>

                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className={`btn ${
                                    this.state.mode == "light" ? "active" : ""
                                }`}
                                onClick={() => this.onModeClick("light")}
                            >
                                Light
                            </button>
                            <button
                                type="button"
                                className={`btn ${
                                    this.state.mode == "dark" ? "active" : ""
                                }`}
                                onClick={() => this.onModeClick("dark")}
                            >
                                Dark
                            </button>
                        </div>

                        <h3 className="text-center text-dark fw-bold fs-1">
                            {this.state.title}
                        </h3>
                        <div className="mt-3 container-fluid container-xxl w-50">
                            <div className="calculator">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="display"
                                    onKeyDown={(e) => this.onKeyDown(e)}
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
