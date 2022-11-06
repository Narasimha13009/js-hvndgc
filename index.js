const arr1 = [10, 50, 20, 70, 5];
function max(arr) {
  max = arr[0];
  for (let ele of arr) {
    if (ele > max) {
      max = ele;
    }
  }
  return max;
}
console.log(max(arr1));
