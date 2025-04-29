import React from 'react';
import { createRoot } from 'react-dom/client';

const domcontainer = document.querySelector("#root");

const elmnt = React.createElement("div", null, "Hello React");

createRoot(domcontainer).render(elmnt);


// ...................................................... with raw Js..................................

/* 
const p = document.createElement("p");
p.innerHTML = "Hello Javascript";
domcontainer.appendChild(p);
*/