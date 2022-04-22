var n = 5;
var arr = [1, 2, 3, 4, 5];
var k = 7;

// Two pointers technique

var left = 0;
var right = n - 1;
var max = -1;
while (left < n && right >= 0) {
  var sum = arr[left] + arr[right];
  if (sum < k) {
    right--;
    if (sum > max) {
      max = sum;
    }
  } else {
    left++;
  }
}

console.log(max);
