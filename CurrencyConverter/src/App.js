import "./App.css";
//https://codepen.io/dsr/pen/VwxZKZB

function App() {
    return (
        <div className="currency-converter">
            <div className="currency-form currency-from">
                <input type="text" value="1" />
                <select>
                    <option>USD</option>
                </select>
            </div>
            <div className="eq">=</div>
            <div className="currency-form currency-to">
                <input type="text" value="" />
                <select>
                    <option>INR</option>
                </select>
            </div>
        </div>
    );
}

export default App;
