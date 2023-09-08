// ============== Javascript Class Nine ===================

// array[1] = "banana";
// array.push("orange")
// console.log(array)
// array.splice(1,2,"orange" , "kiwi" , "pineapple")
// console.log(array)
// array.splice(2,0,"mango")
// let array1 = ["Milk" , 2 , "apples"];
// let array2 = ["orange" , true , "pineapple"];
// let mergeArray = array1.concat(array2)

// console.log(array1)
// console.log(array2)
// console.log(mergeArray)
// mergeArray.pop();
// console.log(mergeArray)
// mergeArray.splice(2,4)
// console.log(mergeArray)

// let array= ["Milk" , 2 , "apples"];
// array.shift();
// console.log(array)

// let array= ["Milk" , 2 , "apples"];
// array.unshift("zubair");
// console.log(array)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

// console.log(names);

// names.sort();

// console.log(names)

// let ages = [18, 72, 33, 56, 40];
// console.log(ages)

// ages.sort();

// console.log(ages)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

// console.log(names);
// names.reverse();

// console.log(names)








// ---------------------------------------------------------------

// arr = [ "Milk", "Bread", "Apples"];
// // console.log("Length of Items:", arr.length)
// arr[1] = "Bananas";

// console.log(arr)


// --------- splice to add value in Specific Positon in Array ----------
// arr.splice(2, 0, "Cherry")
// console.log(arr)
// arr.splice(1, 2, "Orange")
// console.log(arr)


// arr1 = [1,2,3];
// arr2 = [3,4,5];
// // console.log(arr1)
// // console.log(arr2)
// let mergeArrays = arr1.concat(arr2)
// console.log(mergeArrays)

// ------------ Deleting items in Array -------------------

// mergeArrays.pop();
// console.log(mergeArrays)

// ------------ Deleting items in Array -------------------

// let arr = [1,2,3];
// arr.shift();
// console.log(arr)

// let arr = [1,2,3];
// arr.unshift(0);
// console.log(arr)


// ---------- Sorting ---------------------

// let ages = [25 , 12 ,26 , 18 , 33, 56]
// console.log(ages)
// ages.sort()
// console.log(ages)
// ages.reverse()
// console.log(ages)



// ---------- Practice exercise 3.2 -----------------

let shoppingList;
shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(1,1, "Bananas" , "Eggs")
shoppingList.pop()
console.log(shoppingList)
shoppingList.sort()
// --------------finding position of a item in array with 'indexOf()'
let indexOfMilk = shoppingList.indexOf("Milk")
console.log(indexOfMilk)
shoppingList.splice(1,0, "Carrots" , "Lettuce")
console.log(shoppingList)
let newShoppingList = ["Juice" , "Pop"]
let lastItem = newShoppingList.lastIndexOf(   )
console.log(indexOfMilk)
let finalShoppingList = shoppingList.concat(newShoppingList);
console.log(finalShoppingList)







