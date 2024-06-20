//non strict method
 a=10;
console.log(a);


//value of this in diffrent scenerios
console.log(this);

//this inside function
function print(){
    console.log(this);
}
//print();

//inside Object
let obj={
    name:"gopika",
    age:31,
    fn:function(){
        console.log(this);
    }
}
obj.fn();

//inside  object-->function-->fn

let obj1={
    name:"gopika",
    age:31,
    fn:function(){
        function fn3(){
            console.log(this);
        }
        fn3();
    }
}

obj1.fn();