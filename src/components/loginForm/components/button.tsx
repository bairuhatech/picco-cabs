import React from "react";

function Button(props: any) {
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => props.onClick()}
        style={{
          width: "100%",
          backgroundColor: "rgb(107, 181, 70)",
          display: "flex",
          height: 38,
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: 16,
          fontWeight: "600",
          borderRadius: 6,
          border: "0px",
        }}
        className="loginform-button"
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
