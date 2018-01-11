function binarySearch(numArray, key) {
  //taking a varible of the middle index of the number array by taking the length and dividing my 2. and math flooring to round
  var middleIdx = Math.floor(numArray.length / 2);
// getting the element in the middle to test
  var middleElem = numArray[middleIdx];
// if the middle element is the key return true
  if(middleElem === key) return true;
// else if the middle element is less than the key and the num array is longer than 1
  else if(middleElem < key && numArray.length > 1) {
    // return the binary with the last half spliced off
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
// else if the middle element is greater than the key and the num array is longer than 1
  else if (middleElem > key && numArray.length > 1) {
    // return a binary with the first half spliced off
    return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false;

}


// will tell you if the number is in the array
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 39));
