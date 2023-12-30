import Link from "next/link";
import React from "react";


const AdminNav =()=>{
    return (
        <nav className="nav-admin">
        <Link href='/admin/Clients'>Clients</Link>
        <Link href='/admin/Sellers'>Sellers</Link>
        <Link href='/admin/Categories'>Categories</Link>
        <Link href='/admin/Products'>Products</Link>
        <Link href='/admin/Orders'>Orders</Link>
        </nav>
    )
}

export default AdminNav