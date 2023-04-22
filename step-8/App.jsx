import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1>Heading 1</h1>
const Body = () => <p>You have successfully create create-react-app/create-react-vite clone :)</p>
const Footer = () => <p>© All by your own</p>

const Container = () => {
    return (
        <div>
            <Heading />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Container />);
