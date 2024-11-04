import React from 'react'
import Sidebar from './sidebar'
import TopHeader from './header/page'

export default function UserDashboard(  {children}) {
  return (
    

    <div className="flex max-w-[90%] mx-auto relative">
    <Sidebar />
    <div className="w-[70%] h-screen overflow-hidden">
      <header className="p-2 border bg-red-500">
        <TopHeader />
      </header>
      <main className="bg-yellow-400 p-1 h-[calc(100vh-70px)]">
        {/* Your dashboard content here */}

        {children}


      </main>
      <footer className="w-full">
        <div className="w-full bg-red-500 p-1 text-center border">
          This is me footerF
        </div>
      </footer>
    </div>
  </div>




  )
}
