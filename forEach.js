const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything=(veggies)=>{
  veggies.forEach(politelyDecline) 
}


declineEverything(veggies);


const acceptEverything=(veggies)=>{
  veggies.forEach(veggie=>{
    console.log(`Ok, I guess I will eat some ${veggie}.`)
  }) 
}
acceptEverything(veggies);
