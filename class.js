class emp{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    print(){
        console.log("name:"+this.name);
    }
}

let e1=new emp("Gopika",31);
e1.print();