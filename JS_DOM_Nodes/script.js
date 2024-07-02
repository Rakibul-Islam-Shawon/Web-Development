const para = document.createElement("p");
const node = document.createTextNode("Hello world");

para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

const p2 = document.getElementById("p2");
element.insertBefore(para, p2);