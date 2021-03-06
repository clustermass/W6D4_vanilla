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
  
  attr(key) {
    
    for (var i = 0; i < this.array.length; i++) {
      let tags = this.array[i].outerHTML;
  
        if(tags.includes(key)){
          return this.stringExtractor(key, tags);
        }
        else{
          return undefined;
        }
    }
    // 
    // this.array.forEach((el) =>{
    //   let tags = el.outerHTML;
    //   console.log(tags);
    //   console.log(tags.includes(key));
    //     if(tags.includes(key)){
    //       console.log(this.stringExtractor(key, tags));
    //       return this.stringExtractor(key, tags);
    //     }
    //     else{
    //       return undefined;
    //     }
    // });
  }
  
  stringExtractor(key, string){
    // debugger
    const array = string.split("=");
    let tempKey;
    let valueIdx;
    let value;
    let return_value = "";
    for (var i = 0; i < array.length; i++) {
      if (array[i].includes(key)) {
        tempKey = array[i];
        valueIdx = i + 1;
        break;}
      }
      
    value = array[valueIdx];
      let quote = value.slice(0, 1);
      value = value.slice(1);
      while (quote != value.slice(0, 1)) {
        return_value = return_value.concat(value.slice(0,1));
        value = value.slice(1);
      }
      return return_value;
    }
  
    
  }



module.exports = DOMNodeCollection;



