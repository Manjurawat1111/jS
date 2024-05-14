const getSleepHours= day=>{
    switch(day){
      case 'Monday':
      return 7;
      break;
      case 'Tuesday':
      return 8;
      break;
      case 'Wednesday':
      return 7;
      break;
      case 'Thursday':
      return 6;
      break;
      case 'Friday':
      return 7;
      break;
      case 'Saturday':
      return 8;
      break;
      case 'Sunday':
      return 8;
      break;
    }
  }
  const getActualSleepHours=()=>
    getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
   
  const getIdealSleepHours=()=>{
    let idealHours=8;
    return idealHours*7;
  }
  
  const calculateSleepDebt=()=> {
    const actualSleepHours=getActualSleepHours();
    const idealSleepHours=getIdealSleepHours();
    if (actualSleepHours > idealSleepHours) 
    console.log('You got more sleep than needed. ')
     if(actualSleepHours < idealSleepHours)
    console.log('You should get some rest. ')
    if(actualSleepHours === idealSleepHours) console.log(' Getting Perfect sleep ')
  }
  calculateSleepDebt();