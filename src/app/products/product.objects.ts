
export interface Product{
    id :number;
    name:string;
    price:number;
    imageUrl:string;
    description:string;
}
export const PRODUCTS:Product[] =[
    {id:1,name:"Puma", price:100, imageUrl:"/assets/nike.jpg",description:"good shoe"},
    {id:2,name:"Nike", price:30, imageUrl:"/assets/nike.jpg",description:"Never miss"},
    {id:3,name:"Jordan", price:110, imageUrl:"/assets/nike.jpg",description:"For the tops"},
    {id:4,name:"Mike", price:100, imageUrl:"/assets/nike.jpg",description:"good shoe"},
    {id:5,name:"This Product", price:30, imageUrl:"/assets/nike.jpg",description:"Never miss"},
    {id:6,name:"Jordan 3", price:110, imageUrl:"/assets/nike.jpg",description:"For the tops"},
    {id:7,name:"Puma 2020", price:100, imageUrl:"/assets/nike.jpg",description:"good shoe"},
    {id:8,name:"Original", price:30, imageUrl:"/assets/nike.jpg",description:"Never miss"},
    {id:9,name:"Right", price:110, imageUrl:"/assets/nike.jpg",description:"For the tops"},
]

let last_id: number = 3;

export const get_id = ()=>{
    return ++last_id;
}