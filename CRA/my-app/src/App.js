
import './App.css';
import Header from './header';
import TodoEditor from './todoEditor';
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <TodoEditor></TodoEditor>
      <Footer></Footer>
    </div>
  );
}

export default App;
