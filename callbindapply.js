//call
// let obj1={
//     name:"gopi",
//     age:31,
//     print:function(){
//         console.log(`name : ${this.name} age: ${this.age}`);
//     }
// }


// let obj2={
//     name:"vishnu",
//     age:36,
   
// }

// obj1.print.call(obj2);

//make function as public
let obj1={
    name:"gopi",
    age:31,
   
}


let print=function(city,state){
    console.log(`name : ${this.name} age: ${this.age} city :${city}`);
}

let obj2={
    name:"vishnu",
    age:36,
   
}

print.call(obj2,"glendale","AZ");
print.apply(obj1,["glendale","AZ"]); //apply,use argument as arrays

let obj3=print.bind(obj1,"glendale","AZ");//Bind assign the function to a variable
obj3();
