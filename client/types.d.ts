interface User {
    id:Number;
    fullName:string;
    email:string; 
    password:string;
    role:string; 
    createdAt:string; 
    updatedAt:string
}

interface Categorie {
    id:Number;
    image:string;
    createdAt:string; 
    updatedAt:string;
    Products:any[]
}
