function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    } else if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  
  return [odd,even];
}