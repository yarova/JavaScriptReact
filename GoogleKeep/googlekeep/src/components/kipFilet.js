import React from "react";

class KipFilet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, I'm chicken!",
        };
    }

    onButtonOneClick() {
        console.log("Click first button");
        this.setState({ message: "I'm papa chicken!" });
    }

    onButtonTwoClick() {
        console.log("Click second button");
        this.setState({ message: "I'm mama chicken!" });
    }

    render() {
        return (
            <div>
                Hello, I am kip and my price is {this.props.pricePerKg}
                <button onClick={() => this.onButtonOneClick()}>
                    {this.props.buttonOne}🐔
                </button>
                <button onClick={() => this.onButtonTwoClick()}>
                    {this.props.buttonTwo}🐓🥚
                </button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default KipFilet;
