function bug5()
{
//this function should print out the smallest number in the array but something is not quite right...
  var nums = [4,32,41,23,10,6,36,24,29,35,38,40,12,33,42,26,27,19,20,2,43,41,34,38,39,45,42,41,34,23,26,40];
  var minNumber = 0;
  for(var i = 1; i < nums.length; i++)
    {
      if(nums[i] > minNumber)
        {
          minNumber = nums[i];
        }
    }
  console.log(minNumber);
  //should print: "2"
}