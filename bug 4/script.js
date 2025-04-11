function bug4()
{
  //This loop should remove all the even numbers from the array
  //DO NOT MODIFY THE ARRAY
  var nums = [1,2,2,3,4,4,5,6,6,7,8,8,9,10,10];
  for (var i = 0; i < nums.length; i++) {
      if(nums[i]%2 == 1){
        //remove the element at that index
        nums.splice(i,1);
      }
    }
  console.log(nums);
  //should print: "[1,3,5,7,9]"
}