function sum(arr, n) {
  // Only change code below this line
if (--n<0) {
return 0;
} else {
return sum(arr, n) + arr[n];
}
  // Only change code above this line
}
