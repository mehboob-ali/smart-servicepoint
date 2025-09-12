"use client";

import React from "react";
import { useState } from "react";
import { useRouter} from "next/navigation";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = {
      email,
      password,
    };
    console.log(sendData);
    const sendDataJSON = JSON.stringify(sendData);
    console.log(sendDataJSON);
    //make api call to backend
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: sendDataJSON,
      });
      const data = await res.json();
      console.log("DATA IS",data);

      if (res.ok && data.success) {
        if (data.role === "admin") {
          console.log("Redirecting to /admin:");
          // setTimeout(()=>window.location.href = "/admin",5000);
          setTimeout(()=>router.push("/admin"), 5000);
          return;
        } else {
          console.log("Redirecting to /user");
          localStorage.setItem("role", "user");
          router.push("/");
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }

    // const sendReq = await fetch("http://localhost:5000/api/login");
    // if (sendReq.ok) {
    //   if (sendReq.role === "admin") {
    //     console.log("Redirecting to /admin");
    //     return;
    //   } else {
    //     console.log("Redirecting to /userndfsknk");
    //     return;
    //   }
    // }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="flex flex-col justify-center  gap-4 ">
        <h2 className="text-2xl font bold text-white">Login to your account</h2>
        <div className=" flex">
          <input
            className=" w-full p-2 text-sm rounded-md"
            type="text"
            placeholder="Email/Mobile No"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className=" flex">
          <input
            className=" w-full p-2 text-sm rounded-md"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <div className=" flex">
          <input
            type="submit"
            className=" w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
            value="Login"
            onClick={handleSubmit}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default page;
