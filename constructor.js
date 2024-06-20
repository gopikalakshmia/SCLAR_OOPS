function car(_name,_model){
    this.name=_name;
    this.model=_model;

    this.print=function(){
        console.log(`car  name is ${this.name}`);
    }
}

let c1=new car("Benz","C");
let c2=new car("honda","civic");
c1.print();