let myArray = ["Apple","Banana"]; 

function addString(newString) {
   
    if (!myArray.includes(newString)) {
        myArray.push(newString); 
    } else {
        console.log(`${newString} already exists in the array.`);
    }

    
    myArray.sort();

   
    console.log("Array in alphabetical order:", myArray);

    
    console.log("Length of the array:", myArray.length);
}


addString("Apple");

addString("cherry")

