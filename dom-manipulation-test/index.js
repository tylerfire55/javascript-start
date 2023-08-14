//This isn't working!! wtf!!
const container = document.querySelector('.container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('paragraph');
para.textContent = 'This is the fun times!';
para.style.color = "red";

container.appendChild(para);

const thirdHead = document.createElement("h3");
thirdHead.classList.add("h3");
thirdHead.textContent = "I'm a blue h3!";
thirdHead.style.color = "blue";

container.appendChild(thirdHead);


const content2 = document.createElement("div");
content2.classList.add("bigDiv");
content2.style.cssText = "background-color: pink; border-style: 4px, black";



const smallHead = document.createElement("h1");
smallHead.textContent = "I'm in a div"

const smallPara = document.createElement("p")
smallPara.textContent = "Me too!"


content2.appendChild(smallHead);
content2.appendChild(smallPara);
container.appendChild(content2);
