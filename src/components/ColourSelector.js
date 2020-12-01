import React from "react";
import "../styles/App.css";
import "../styles/Child.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background } = config;
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
