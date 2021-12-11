export interface Customers{
    name:string,
    id:number,
    email:string,
    age:number,
    sex:string,
    address:string,
}


export const CUSTOMERS:Customers[]=[
    {id:1,name:"John",email:"john@gmail.com",age:32,sex:"Male",address:"Addis"},
    {id:2,name:"John",email:"john@gmail.com",age:32,sex:"Male",address:"Addis"},
    {id:3,name:"John",email:"john@gmail.com",age:32,sex:"Male",address:"Addis"}
]

let last_id: number = 3;

export const get_id = ()=>{
    return ++last_id;
}