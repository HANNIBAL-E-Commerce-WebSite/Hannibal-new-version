import React from "react"
import next from "next"
import AdminNav from "./AdminNav/page"

export default function Admin({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <AdminNav/>
{children}
      </section>
    )
  }