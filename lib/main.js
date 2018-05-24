const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg){
  let array = [];
  if(arg.constructor.name === "String"){
    array = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(array);
  } else if(Object.getPrototypeOf(arg.constructor).name == "HTMLElement"){
    array.push(arg);
    return new DOMNodeCollection(array);
  }
};  


