import React from "react";
import Heading from "../global/Heading";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <Heading>تسجيل الدخول</Heading>
      <div className="max-w-[500px] m-auto ">
        <form className="border-1 border-[#344955] p-3 bg-[#fff] rounded-md ">
          <div className="mb-2">
            <label className="font-bold text-md mb-1 inline-block">
              البريد الالكتروني
            </label>
            <input
              type="email"
              className="w-full p-2 outline-none rounded-md bg-[#344955] text-white"
              placeholder="البريد الالكتروني ..."
            />
          </div>
          <div className="mb-2">
            <label className="font-bold text-md mb-1 inline-block">
              كلمة المرور
            </label>
            <input
              type="password"
              className="w-full p-2 outline-none rounded-md bg-[#344955] text-white"
              placeholder="كلمة المرور"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="loginBtn bg-[#344955] m-1 w-[200px] p-1 text-white rounded-md"
            >
              تسجيل الدخول
            </button>

            <Link href="/register">تسجيل</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
