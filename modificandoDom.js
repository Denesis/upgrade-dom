// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const createDiv = document.createElement("div");
document.body.append(createDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv = document.createElement("div");
const pContent = document.createElement("p");
newDiv.appendChild(pContent);
document.body.append(newDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv1 = document.createElement("div");

for (let index = 0; index < 6; index++) {
  const p1 = document.createElement("p");
  newDiv1.appendChild(p1);
}
document.body.append(newDiv1);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newP = document.createElement("p");
const text = document.createTextNode("Soy dinámico!");
newP.appendChild(text);

document.body.append(newP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const searchTitle = document.querySelector(".fn-insert-here");
searchTitle.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const unordenList = document.createElement("ul");

for (let index = 0; index < apps.length; index++) {
  const lista = document.createElement("li");
  const appName = document.createTextNode(apps[index]);
  unordenList.appendChild(lista);
  lista.appendChild(appName);
}

document.body.append(unordenList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let searchClass = document.querySelectorAll(".fn-remove-me");

for (let index = 0; index < searchClass.length; index++) {
  document.body.removeChild(searchClass[index]);
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const [div1, div2] = document.querySelectorAll("div");
const medio = document.createElement("p");
const textMedio = document.createTextNode("Voy en medio");
medio.appendChild(textMedio);

document.body.insertBefore(medio, div2);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const [divhere1, divhere2] = document.querySelectorAll(
  'div[class="fn-insert-here"]'
);
const medio1 = document.createElement("p");
const textMedio1 = document.createTextNode("Voy dentro");
medio1.appendChild(textMedio1);

document.body.insertBefore(medio1, divhere2);
