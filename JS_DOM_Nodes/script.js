const para = document.createElement("p");
const node = document.createTextNode("Hello world");

para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

const p = document.getElementById("p1");
element.insertBefore(para, p);