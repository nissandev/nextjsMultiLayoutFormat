import RootLayout from "@/app/page";
import React from "react";
import Sidebar from "./sidebar";
import TopHeader from "./header/page";
import UserDashboard from "./layout";
import HomeContentDashboard from "./(home)/page";

export default function HomeDashboard({ children }) {
  return (
    <>
      <HomeContentDashboard />
    </>
    //    <UserDashboard>

    // <h1>
    //   AMi holam user dashboard home
    // </h1>

    //    </UserDashboard>
  );
}
