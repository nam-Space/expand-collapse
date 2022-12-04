import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    const [isExpand, setIsExpand] = useState(false);

    const handleChange = () => {
        setIsExpand(!isExpand);
    };

    return (
        <div className="App">
            <h1 className="bg-success text-white">Conditional Rendering</h1>
            <button onClick={handleChange}>
                {!isExpand ? "Xem" : "Đóng"} giới thiệu
            </button>
            {isExpand && <p>I love Full-Stack!</p>}
        </div>
    );
}

export default App;
