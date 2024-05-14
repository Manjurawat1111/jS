// Write your code here:
const isTheDinnerVegan=array=>{
    const boolean =array.every(arrayItem=>{
      if(arrayItem.source==='plant')
    return true;})
    return boolean;
    }
    
    
    
    
    
    
    
    
    // Feel free to comment out the code below to test your function
    
    const dinner = [{name: 'hamburger', source: 'plant'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'plant'}];
    
    console.log(isTheDinnerVegan(dinner))
    // Should print false
    