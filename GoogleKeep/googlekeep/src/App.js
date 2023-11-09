import "./app.css";
import Header from "./components/header";
import Menu from "./components/menu";
import TaskList from "./components/taskList";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div>
                <Menu></Menu>
                <TaskList></TaskList>
            </div>
        </div>
    );
}

export default App;
