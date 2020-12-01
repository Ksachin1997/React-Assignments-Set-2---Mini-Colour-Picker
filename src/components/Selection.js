import React from "react";
import "../styles/App.css";
import "../styles/Child.css";

export default function Selection(props) {
  const [bckGr, setBckGr] = React.useState({ backgroun: "" });

  const applyColor = () => {
    let newObj = props.applyColor();
    setBckGr(newObj);
  };

  return (
    <div className="fix-box" style={bckGr} onClick={applyColor}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
