function user(name,dept){
   
       var  name=name;
        this.dept=dept;
    
   this.getname=function(){
        return name;
    }
}

let u1=new user("gopika","ece");
console.log(u1.getname());
