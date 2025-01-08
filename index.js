import React from "react";
import ReactDOM from "react-dom";
import ResumeForm from "./ResumeForm";

function App() {
    return (
        <div className="container">
            <h1>Personalized Resume Generator</h1>
            <ResumeForm />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
