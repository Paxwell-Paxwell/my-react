import logo from "../logo.svg";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="container-fluid bg" >
            <div className="row  align-items-center" style={{height:"95vh"}}>
                <div className="offset-4 col-4 text-center glass "  >
                    <span style={{fontSize:"6rem"}}>Hello World</span>
                </div>
            </div>
        </div>
    );
}

export default App;
