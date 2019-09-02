function binarySearch(arr, num){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if (arr[mid] == num){
      return mid
    }
    else if (arr[mid] < num) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));
