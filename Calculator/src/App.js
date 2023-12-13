import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MathUtils from "./MathUtils";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class Mode {
    static Light = "light";
    static Dark = "dark";
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 0,
            title: "Calculator",
            mode: Mode.Light,
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

    onModeChange(event) {
        var isDark = event.target.checked;
        this.setState({ mode: isDark ? Mode.Dark : Mode.Light });
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
                className="btn btn-calc"
                key={i}
            >
                {i}
            </button>
        ));

        return (
            <div className={`${this.state.mode}-mode`}>
                <div className="container-fluid container-xxl pt-5">
                    <div
                        className="w-100"
                        style={{ height: 600, borderRadius: 24 }}
                    >
                        <div className="container-fluid container-xxl mt-5 card w-50">
                            <Form className="mode-form">
                                <Form.Check
                                    onChange={(e) => this.onModeChange(e)}
                                    checked={this.state.mode == Mode.Dark}
                                    type="switch"
                                />
                            </Form>

                            <h3 className="text-center fs-1 mt-5">
                                {this.state.title}
                            </h3>
                            <div className="mt-3 mb-5 container-fluid container-xxl w-50">
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
            </div>
        );
    }
}

export default App;
