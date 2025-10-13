const image=document.createElement("img");
image.src="https://reactjsexample.com/content/images/2019/04/React.jpg";
image.width="250px";
image.height="250px";
const h4=document.createElement("h4");
h4.innerText="Price: 200/-";
const child=document.createElement("div");
child.className="card";
child.appendChild(image);
child.appendChild(h4);
const parent=document.getElementById("root");
parent.appendChild(child);


