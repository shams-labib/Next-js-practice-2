import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen mt-10">
      <div className="col-span-3 border-r-2 border-gray-200">
        <Link href={"/"}>Dev Story</Link>
      </div>
    </div>
  );
};

export default Dashboard;
