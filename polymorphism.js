class animal{
    sound(){
        console.log("Diffrent animal make diffrentr sound")
    }
}
class dog{
    sound(){
        console.log("Ruff Ruff")
    }
}

class Cat{
    sound(){
        console.log("Meow meow")
    }
}

let a1=new animal();
let tommy=new dog();
let malu=new Cat();
a1.sound();
tommy.sound();malu.sound();