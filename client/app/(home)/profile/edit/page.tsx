"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface EditProps {
  children?: ReactNode;
  userID: number;
}

const Edit: React.FC<EditProps> = ({ userID }) => {
  const route = useRouter();

  const [pass, setPass] = useState<string>("");
  const [newPass1, setNewPass1] = useState<string>("");
  const [newPass2, setNewPass2] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(true);
  const [bool, setbool] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkPassword = async () => {
    const ob = { email: email, password: pass };
    try {
      const response = await axios.post("http://localhost:8000/auth/pass", ob);
      console.log("resp", response);
      setbool(response.data);
      setRefresh(false);
    } catch (error) {
      setErrorMessage("Error during login. Please try again.");
      setRefresh(false);
      console.error("Error during login:", error);
    }
  };

  const update = () => {
    const obj = {
      email: email,
      password: newPass2,
      fullName: fullName,
    };

    axios
      .put(`http://localhost:8000/users/2`, obj)
      .then((result) => {
        console.log("User updated:", result);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error("Error during update:", error);
      });
  };

  const updateuser = async () => {
    try {
      console.log(bool);

      if (bool === false) {
        return alert("Unmatched Password");
      } else if (newPass1 !== newPass2) {
        return alert("Unmatched Passwords");
      } else if (newPass2.length < 6) {
        return alert("Your Password Must Contain At Least 6 Digits");
      } else {
        await update();
        route.push("/");
        return alert("User Updated !!");
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 mt-4">
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <h3 className="text-center text-2xl font-semibold mt-3">
            Edit Your Profile :
          </h3>
          <br />
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border border-black-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black-500 placeholder-shown:border-t-black-500 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Full Name:
            </label>
            <br />
          </div>

          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border border-black-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black-500 placeholder-shown:border-t-black-500 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              E-mail:
            </label>
            <br />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <h3 className="text-center text-2xl font-semibold mt-3">
          Edit Your Password :
        </h3>
        <br />
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            className="peer h-full w-full rounded-[7px] border border-black-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black-500 placeholder-shown:border-t-black-500 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Current Password:
          </label>
          <br />
        </div>
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            className="peer h-full w-full rounded-[7px] border border-black-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black-500 placeholder-shown:border-t-black-500 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            onChange={(e) => {
              setNewPass1(e.target.value);
            }}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            New Password:
          </label>
          <br />
        </div>
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            className="peer h-full w-full rounded-[7px] border border-black-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black-500 placeholder-shown:border-t-black-500 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            onChange={(e) => {
              setNewPass2(e.target.value);
            }}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Confirm Pasword:
          </label>
          <br />
        </div>
        <div className="flex justify-between">
          <div>
            <button
              onClick={() => {
                updateuser();
              }}
              className="middle none center mr-3 rounded-lg bg-yellow-200 py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Update Profile
            </button>
          </div>
          <div>
            <button
              className="middle none center mr-3 rounded-lg border bg-yellow-300  py-3 px-6 font-sans text-xs font-bold uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => {
                route.push("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
