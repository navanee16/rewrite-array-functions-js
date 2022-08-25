// shift
var a = ["one","two","three"];
// console.log(a);

function myShift(array,){
    let newArray = [];
    var z=0;
    for(let i = 1; i<=array.length-1; i++){
        // console.log(array[i]);
        
        newArray[z]=array[i];
        z++;

    }
 return newArray;   

}
// a = myShift(a);
// console.log(a);
 

// unshift
var x =["one","two","three"]
function myUnshift(array,value){
   let newArray = [];
    var length = array.length;
   x[0] = value
   
   return array; 
  }
// x = myUnshift(x,"five")
// console.log(x);

// tosring
var t = ["one","two","three"]
 function mytoSting(value){
    for(let i=0; i<array.length; i++){
        
}
 }
// t = mytoSting(t);
// console.log(t);

// myreverse
var y = [10,20,30,40]
// console.log(y);
function myreverse(array){
      newArray=[];
      let length = array.length-1;    
    for(let i=length; i>=0; i--){
        newArray[array.length-i-1] = array[i]
 }
return newArray
}
// y = myreverse(y);
//  console.log(y);


//  myFill
var j = [1,2,3,4,5]
function myFill(array,value){
    newArray=[];
    a = 0;
    length = array.length
    for(let i =0; i<array.length; i++){
        newArray[i]=array[i];
        a++;
    }
    newArray[2] = value;
    return newArray
}
j = myFill(j,6)
console.log(j);



// mtSlice
var a =[1,2,3,4,5];
function mySlice(array,start,end){
    newArray= [];
    index = 0;
    for(i=start; )
}