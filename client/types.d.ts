interface User {
    id:Number;
    fullName:string;
    email:string; 
    password:string;
    role:string;
    token:string 
    createdAt:string; 
    updatedAt:string
}

interface Categorie {
    id?:Number;
    name?:string;
    image?:string;
    createdAt?:string; 
    updatedAt?:string;
    Products?:Products[]
}

interface Products {
    id:number;
    name:string;
    price:number;
    image:string;
    description:string;
    available:Boolean;
    rate:number;
    createdAt:string;
    quantity:number;
    sellerProduct:number;
    updatedAt:string;
    CategoryId:number
}

interface Product {
    id: number;
    name: string;
    category: string;
    rate: number; 
    price: number;
    image: string;
    description: string;
    image: string;
    img2: string;
    img3: string;
    img4: string;
  }
  
  interface CategoryProps {
    params:{
        id:any
    };
    products: Product[];
  }

interface Context {

}

interface SearchResult {
    image: string;
    name: string;
    price: number;
  }
  
  interface SearchResultsProps {
    results: SearchResult[];
  }


interface Orders {
  UserId:Number,
  ProductId:Number
  Product:Products
  User:User
}
interface SuccessProps {
  result: string | null;
}