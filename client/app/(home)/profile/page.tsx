"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import "./profile.css";
interface Result {
  fullName: string;
  email: string;
  role: string;
  password: string;
}

interface LoginProps {
  children?: ReactNode;
  userID: number;
}

const Profile: React.FC<LoginProps> = ({ userID }) => {
  const [user, setUser] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const route = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Result>(`http://localhost:8000/users/2`);
        const responseData: Result = res.data;
        setUser(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [userID]);
  console.log(userID);
  return (
    <div className="bg-gray-100 ">
      <div className="bg-gray-100 ">
        <div className=" css-fix max-w-lg ml-auto my-10 bg-white rounded-md shadow-md p-5 items-center">
          <div className="flex ">
            <div className="text-center text-blue-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer">
              My Account
            </div>
            /
            <div
              className="text-center text-gray-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer"
              onClick={() => {
                route.push("/profile/edit");
              }}
            >
              Manage Account
            </div>
            /
            <div className="text-center text-red-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer">
              Log Out
            </div>
          </div>

          {/* <button className="logout__action" onClick={() => { handleLogout(); console.log("Logout clicked"); }}>
          Logout
          </button> */}
        </div>
        <div className="manage__account__action">
          {/* <Link to="/account/manage">Manage account</Link> */}
        </div>
        <div className=" css-fix2 max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <div className="text-center text-2xl font-semibold mt-3">
            Account Details:
          </div>
          {user?.role === "User" && (
            <div>
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://static.thenounproject.com/png/165979-200.png"
                alt=""
              />
            </div>
          )}
          {user?.role === "Admin" && (
            <div>
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://cdn4.iconfinder.com/data/icons/manager-6/332/Untitled-16-512.png"
              />
            </div>
          )}
          {!user?.role && (
            <div>
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://static.thenounproject.com/png/252424-200.png"
              />
            </div>
          )}
          <div className="text-center text-2xl font-semibold mt-3">
            User Name: {isLoading ? "Loading..." : user?.fullName}
          </div>
          <div className="text-center text-gray-600 mt-1">
            User Email: {isLoading ? "Loading..." : user?.email}
          </div>
          <div className="text-center text-gray-600 mt-1">
            User Role: {isLoading ? "Loading..." : user?.role}
          </div>
        </div>
        <div className="css-fix1 max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          {user?.role === "User" && (
            <div className="order__history">
              <div className="text-center text-2xl font-semibold mt-3">
                Order History
              </div>
              <div className="text-center text-gray-600 mt-1">
                You have not placed any orders yet...
              </div>
            </div>
          )}
          {user?.role === "Seller" && (
            <div>
              <div className="text-center text-2xl font-semibold mt-3">
                Order History
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
