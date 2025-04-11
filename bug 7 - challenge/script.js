function bug7()
{
  //make an array and fill it up with numbers. DONT CHANGE THIS CODE.
  arrayOfNumbers = [4,32,41,23,10,6,36,24,29,35,38,40,12];
  
  //use the sort function to sort the array in ascending order.
  console.log(sort(arrayOfNumbers));
  //should print [4, 6, 10, 12, 23, 24, 29, 32, 35, 36, 38, 40, 41]
}

function sort(arrayToSort) {
  for(var i = 1; i < arrayToSort.length; i++){
    for(var j = i-1; j >= 0; j--){
      if(arrayToSort[j] < arrayToSort[j+1]){
        var temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[i];
        arrayToSort[i] = temp;
      }
    }
    
  }
  return(arrayToSort);
}