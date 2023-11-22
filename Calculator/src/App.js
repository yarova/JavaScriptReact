import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="container-fluid container-xxl mt-5">
          <div className="w-100" style={{ height: 600, borderRadius: 24 }}>
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
                          <div className="buttons">
                              <button className="btn bg-light text-dark">C</button>
                              <button className="btn bg-light text-dark">7</button>
                              <button className="btn bg-light text-dark">8</button>
                              <button className="btn bg-light text-dark">9</button>
                              <button className="btn bg-light text-dark">+</button>
                              <button className="btn bg-light text-dark">4</button>
                              <button className="btn bg-light text-dark">5</button>
                              <button className="btn bg-light text-dark">6</button>
                              <button className="btn bg-light text-dark">-</button>
                              <button className="btn bg-light text-dark">1</button>
                              <button className="btn bg-light text-dark">2</button>
                              <button className="btn bg-light text-dark">3</button>
                              <button className="btn bg-light text-dark">*</button>
                              <button className="btn bg-light text-dark">0</button>
                              <button className="btn bg-light text-dark">.</button>
                              <button className="btn bg-light text-dark">=</button>
                              <button className="btn bg-light text-dark">/</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
