import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen mt-10">
      <div className="col-span-3 border-r-2 border-gray-200">
        <Link href={"/"} className="text-2xl font-semibold">
          Dev Story
        </Link>

        <div className="flex flex-col space-y-5 mt-10">
          <Link
            href={"/dashboard/add-story"}
            className="px-4 py-2 bg-gray-800 w-full"
          >
            Add Story
          </Link>
          <Link
            href={"/dashboard/my-profile"}
            className="px-4 py-2 bg-gray-800 w-full"
          >
            My Profile
          </Link>
          <Link
            href={"/dashboard/settings"}
            className="px-4 py-2 bg-gray-800 w-full"
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default Dashboard;
