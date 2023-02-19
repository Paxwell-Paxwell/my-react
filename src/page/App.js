import logo from "../logo.svg";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1>Hello World</h1>
                    <br />
                    <input type="text" placeholder="Enter your name" />
                    <br />
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
