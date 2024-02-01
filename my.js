/* =====================================
==
== ES2015 rewrite of:
== function filterOutOdds() {
==   var nums = Array.prototype.slice.call(arguments);
==   return nums.filter(function(num) {
==     return num % 2 === 0
==   });
== }
========================================= */
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin
const findMin = (...minNum) => Math.min(...minNum);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...newArr) => [
  ...arr,
  ...newArr.map((val) => val * 2),
];

/* =====================
== slice and dice!
======================= */
// RemoveRandom
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

// Return new array with every item in array1 and array2
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// RRturn new obj with all key value pairs from the obj and add a new key value pair
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// Return new obj with a key removed
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// Combine 2 objects and return a new object
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// Return a new object with a modified key value.
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
