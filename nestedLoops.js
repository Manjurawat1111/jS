// Write your code below
const bobsFollowers=['manju', 'naveen', 'lavit', 'sona'];

const tinasFollowers=['manju', 'naveen', 'pawan'];

const mutualFollowers=[];

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i]===tinasFollowers[j])
        console.log(mutualFollowers.push(tinasFollowers[j]));
    
    
   
  }
}
console.log(mutualFollowers);