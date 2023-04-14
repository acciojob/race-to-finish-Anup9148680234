window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000 * Math.floor((Math.random()*5)+1)));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000 * Math.floor((Math.random()*5)+1))));
const promise3 = new Promise((resolve) => setTimeout(resolve,1000 * Math.floor((Math.random()*5)+1))));
const promise4 = new Promise((resolve) => setTimeout(resolve, 1000 * Math.floor((Math.random()*5)+1))));
const promise5 = new Promise((resolve) => setTimeout(resolve,1000 * Math.floor((Math.random()*5)+1))));

promises = [promise1, promise2, promise3,promise4,promise5];

Promise.any(promises).then((value) => console.log(value));