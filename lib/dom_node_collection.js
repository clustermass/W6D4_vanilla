// function DOMNodeCollection (arr) {
//   this.array = arr;
// 
// }

class DOMNodeCollection{
  constructor(arr){
    this.array = arr;
  }
  
  html(arg){
    if (arg) {
      this.array.forEach(el => {
        el.innerHTML = arg;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }
  
  
  empty(arg){
    this.html("");
    
  }
  
  append(arg){
    if(arg.constructor.name === "String"){
      this.array.forEach(el =>{
        el.insertAdjacentHTML('afterend', arg);
      });
    } 
    else if (Object.getPrototypeOf(arg.constructor).name == "HTMLElement"){
      this.array.forEach(el =>{
        el.insertAdjacentHTML('afterend', arg.outerHTML);
      });
      // arg.constructor.name === `DOMNodeCollection` 
    } else if(arg instanceof DOMNodeCollection){
      let data = "";
      
      for (var i = 0; i < arg.array.length; i++) {
        data = data.concat(arg.array[i].outerHTML);
      }
    
      this.append("data");
    }
  }
  
  attr() {
    
  }
  
}


module.exports = DOMNodeCollection;