const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is the h1 !!"),
    React.createElement("h2", {}, "This is the h2 tag !!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is the parent !!"),
    React.createElement("h2", {}, "This is the h2 tag !!"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
