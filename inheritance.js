class person{
    constructor(_name,_age){
        this.name=_name;
        this._age=_age;
    }
    welcome(){
        console.log("welcome "+this.name);
    }
}

class student extends person{
    constructor(_name,_age,_marks){
        super(_name,_age)
        this.marks=_marks;
    }

    w2(){
        super.welcome();
    }
}

let gopi=new student("gopi",31,8.8);
gopi.w2();