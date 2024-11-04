import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <>
        
        <div className="w-[30%] h-screen overflow-hidden border bg-red-500">
        <div className="flex flex-col gap-2 pl-4 pt-10">
          <Link href={"/userdashboard"}>Dashboard</Link>
          <Link href={"/userdashboard/aboutus"}>About us</Link>
          <Link href={"/admindashboard"}>Go admin Dash</Link>
        </div>
      </div>




    </>
  )
}
