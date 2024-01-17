const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello, World! --- using React Elements"),
    React.createElement("h1", {}, "Okay , Bye! --- using React Elements")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=hello.d3ff674e.js.map
