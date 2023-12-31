import React from "react"
import next from "next"
import SellerNav from "./SellerNav/sellerNav"

export default function Admin({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <SellerNav/>
{children}
      </section>
    )
  }