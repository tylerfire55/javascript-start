//DOM Manipulation//
const sect = document.querySelector("selection"); //Grabs a reference to the "selection" element in the DOM//
const para = document.createElement("p"); //Creates element "p" for paragraph//
para.textContent = "Some content and letters."; //Fills the "para" paragraph with the text//
sect.appendChild(para); //Adds the "para" paragraph we made, with the text, to the DOM below "sect"//
const text = document.createTextNode( //Creates text node//
    " - the premier source for web development blah balh.",
);
const linkPara = document.querySelector("p"); //selects the para we made//
linkPara.appendChild(text); //Adds to para//