import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    onButtonClick(btnText){
        console.log(`Hello ${btnText}`);
        if (btnText === '+') {
            this.onPlusClick();
        }
    }

    onPlusClick(){
        console.log(`I clicked plus`);
    }

    render() {
        const buttons = [
            "C", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"
        ];

        const buttonList = buttons.map((i) => (
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
                            Calculator
                        </h3>
                        <div className="mt-3 container-fluid container-xxl w-50">
                            <div className="calculator">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="display"
                                    readonly
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
