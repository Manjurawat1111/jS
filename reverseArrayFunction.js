// Write your code here:

const reverseArray=array=>{
    let newArray=[];
  let j=0
  for(i=array.length-1;i>=0;i--){
     newArray[j]=array[i];
   
    j++;
  }
  return newArray;
  };
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  // we can use push method or unshift methodto achieve this
  