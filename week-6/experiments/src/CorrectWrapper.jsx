import React from "react";
import { useState } from "react";

function App() {
  return(
    <div>
    <CardWrapper>
      <div>hi there</div>
    </CardWrapper>
    <CardWrapper>
      <div>hello there</div>
    </CardWrapper>
  </div>
  );
  
}

function CardWrapper({ children }) {
  return (<div style={{ border: "2px solid black" ,padding:20}}>{children}</div>);
}

export default App;
