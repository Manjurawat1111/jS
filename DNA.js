// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna){
    return {
      specimenNum:specimenNum,
      dna:dna,
  
      mutate(){
          let i=Math.floor(Math.random()*this.dna.length)
          console.log('changed index is ' + i)
           let base= returnRandBase();
          while(this.dna[i]===base){
            base= returnRandBase();
          } this.dna[i]=base
            return this.dna;
          },
  
      compareDNA(comparedPAequor){
       
        console.log(comparedPAequor.dna);
        
        console.log(factory.dna);
        console.log(`comparing specinum ${factory.specimenNum} to ${comparedPAequor.specimenNum}` )
        let firstDna=comparedPAequor.dna;
        let secondDna=factory.dna;
        let match=0;
        for(i=0; i<firstDna.length; i++){
          for(j=0; j<secondDna.length; j++){
            if(j===i&&firstDna[i]===secondDna[j]){
                 match++;
            }
           
          }
        }
        return console.log(`here is the ${Math.floor(100/firstDna.length*match)}%DNA match found. `)
      
      }
  
  
           }; 
  
  }
  
  
  
  
  //console.log(factory)
  //console.log(factory.mutate());
  let factory= pAequorFactory(1,mockUpStrand());
  let comparedPAequor=pAequorFactory(2,mockUpStrand());
  factory.compareDNA(comparedPAequor);

