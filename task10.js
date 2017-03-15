var k = Math.round(Math.random() * 1000);
function  getRandomNumber (from, to) {
    return Math.round(from + Math.random() * (to - from));
}
var length = Math.round(Math.random() * k),
    arr = new Array(length);
for (var i = 0; i < length; i++) {
    arr[i] = getRandomNumber(0, 100);
}
var sorti = arr.length - 1;
for (var a = 0; a < sorti; a++)
for (var j = 0; j < sorti - a; j++)
if (arr[j] < arr[j + 1]) {
    var min = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = min;
}
console.log(arr);
