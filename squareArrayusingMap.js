const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums=array=>{
  const squareArray=array.map(arrayNum=>{ return toSquare(arrayNum) })
  return squareArray;
}
console.log(squareNums(numbers));