import React from "react";
import Sidebar from "../userdashboard/sidebar";
import TopHeader from "../userdashboard/header/page";
import Link from "next/link";

const AdminRootLayout = ({ children }) => {
  return (
    <div className="flex max-w-[90%] mx-auto relative">
      <div className="w-[30%] p-4 bg-yellow-300">
        Admin Sidebar
       <div className="flex flex-col gap-7">
       <Link href={"/admindashboard"}>Dashboard</Link>
       <Link href={"/admindashboard/aboutadmin"}>About Admin</Link>
       <Link href={"/userdashboard"}>Go user dashboard</Link>
       </div>

      </div>
      <div className="w-[70%] h-screen overflow-hidden">
        <header className="p-2 border bg-red-500 ">admin top header</header>
        <main className="bg-orange-400 p-1 h-[calc(100vh-70px)]">
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
  );
};

export default AdminRootLayout;
