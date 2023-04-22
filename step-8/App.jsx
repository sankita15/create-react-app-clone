import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => <h1>Heading 1</h1>
const Heading2 = () => <h1>Heading 2</h1>
const Heading3 = () => <h1>Heading 3</h1>

const Container = () => {
    return (
        <div>
            <Heading1 />
            <Heading2 />
            <Heading3 />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Container />);
