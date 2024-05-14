// Write function below
const subLength=(string, char)=>{
    let n=0;
    let difference=0;
    for(const element of string){
      if (element===char)
        n++;   
        
        }
         console.log(n)   
    if(n=2){
    const firstPosition=string.indexOf(char);
    const secondPosition=string.indexOf(char,firstPosition+1);
     return difference=secondPosition-firstPosition+1;
     } else return  difference;  
    }
    
    
    console.log(subLength('momentum', 'm'));