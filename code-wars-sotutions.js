// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//# Multiples of 3 & 5
function solution(number){
  
  if (number < 0){      //if number is less than 0, return 0
    return 0;           //returning 0 if number is less than 0
  }
  
  let sum =0; // set sum counter equal to 0 
  for (let i= 0; i < number; i++){  //for loop used to iterate up to the number 
    if (i % 3===0 || i% 5===0){     // if statements used to check for mutiples of 3 or 5 or both
       sum += i // counter sum used to add the mutiples of 3 or 5 or both 
    }
  }
  return sum // returning the sum outside of the for loop
}

// # Who likes it 
function likes(names) {
  
  if (names.length ==0) {           // if the there are no elements(names) in the names array, return "no likes this"
    return "no one likes this"      // returning "no one likes this" 
  }
  if (names.length ===1){           // if there is one element(name) in the names array, return " element(name) likes this "
    return names[0] + " likes this" // returning one "element (name) likes this"
  }
  if (names.length ===2){   // if there are two elements in the names array, return "first element(name) and second element(name) like this"  
    return names[0] + " and " + names[1] + " like this" // returning first element(name) and second element(name) like this" 
  }
   if (names.length ===3){ // if there are three elements in the names array, return "first element(name),  second element(name) and third element(name) like this"  
    return names[0] + ", " + names[1] + ' and '+ names[2] + " like this" // returning "first element(name),  second element(name) and third element(name) like this" 
  }
   if (names.length >= 4){ // if there are four elements in the names array, return "first element(name),  second element(name) and  number of the rest of the likes like this"
    return names[0] + ', ' + names[1] + " and " + (names.length -2) + " others like this" //returning "first element(name),  second element(name) and  number of the rest of the likes like this"
  }
  
  //# find unique number 
  
  function findUniq(arr) {
  
  for(let i= 0; i < arr.length; i++){   //using a for loop to iterate through the array
   
    if (arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){ // using if statement to see if the first index of an element is the same as it's last index. This helps to see if the element has not been repeated which this singles out the outlier of the array. 
     
       return arr[i]; // This returns the outlier or the unique number of the array. 
    }
  }
   
}
  
//# moveZeros
function moveZeros(arr) {
 let array0= [];            // made an array to store our zeroes from arr array
  let everyThingelse =[];   // made an array to store everything else except for zeroes from our arr array
  for (let i= 0; i < arr.length; i++){  // for loop used to iterate through the arr array 
    if( arr[i]===0){        // if statements used to check for zeroes and move these zeroes into array0, the array to store zeroes
      array0.push(arr[i]);  // moving zeros into the array0 array
    } else {
      everyThingelse.push(arr[i]); // else statement used to move everything else that is not a zero into everyThingelse array
    }
  }
  return  everyThingelse.concat(array0); // returning the adding the everyThingelse array to array0 by using the .concat. This returns an array with zeros at the end. 
}
  
//# find the parity outlier  
function findOutlier(integers){

  const evenArray= []; // making an array that stores even numbers
  const oddArray= []; // making an array that stores odd numbers
 
  for(let i = 0; i < integers.length; i++){ //for loop used iterate through integers array
    if ( integers[i] % 2 ===0 ){            // if statement used to check for even numbers 
          evenArray.push(integers[i]);      // Moving even numbers from integers array to the evenArray 
    }
    
    if (integers[i] % 2 !==0 ){         // if statement used to check for odd numbers 
          oddArray.push(integers[i]);   // Moving odd numbers from integers array to the oddArray
    }
  }
  
  if (evenArray.length < oddArray.length){  // if statement to check evenArray length is smaller 
    return evenArray[0]     // returns the evenArray[0] which is the outlier 
  } else {                  // else statement used to check if oddArray length is smaller 
    return oddArray[0]      // returns the oddArray[0] which is the outlier
  }
  }
  
}

//#count Duplicates
function duplicateCount(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length; //
}
// in this return statement, we are changing text to lowercased letters using .toLowerCase(), getting every indivual character inside text using .split(), .sort used to sort the characters alphabetically, .join convert the array to a string  
//regex used to match group of characters that repeat more than once 
//.length is equal to the number of duplicates which is what is needed to retun 


//#piglatin

function pigIt(str){
  let strArr = str.split(' ')   // spliting the array to seperate each element(word) in str array
  let pigLatinPhrase = []       // making an empty array to store the pig latin phrase
  let regex = /([a-zA-Z])/;     // using regex to make sure there are letters present 
  
  for (let element of strArr){  //used to iterate through the new array stArr
    if (regex.test(element)){
      pigLatinPhrase.push(element.substring(1) + element[0] + "ay"); // pushing ay into array
    } else {
      pigLatinPhrase.push(element) // pushing the rest into array
    }
  } return pigLatinPhrase.join(" "); // returns the output as an array
};

