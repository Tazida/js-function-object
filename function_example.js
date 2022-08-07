/**
  function functionName (parameters){
  // function body
  // return
}
var returnValue = functionName (parameters value)
 
 */

function getAverage(assinment1, assinment2, assinment3) {
  const total = assinment1 + assinment2 + assinment3;
  const average = total / 3;
  return average;
}
const assinment1Marks = 60;
const assinment2Marks = 58;
const assinment3Marks = 59;

var myAverage = getAverage(assinment1Marks, assinment2Marks, assinment3Marks);
console.log("my average so far:", myAverage);
