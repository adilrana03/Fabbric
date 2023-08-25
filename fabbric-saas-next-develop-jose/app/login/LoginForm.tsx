"use client";
import React, { useRef, useState } from "react";

import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import Toasts from "@/components/toasts";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const email = useRef("");
    const pass = useRef("");

    const onSubmit = async () => {
        setLoading(true);
        const result = await signIn("credentials", {
            email: email.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
        }).then((response: any) => {
            if (response) {
                console.log(response)
                toast("Credentials do not match!", { type: "error" });
            }
        });
        setLoading(false);
    };
  
    return (
        <form
        id="login-form"
        method="POST"
        className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-10 w-full"
        >
            <div>
                <div className="relative mt-1 bg-white mb-4 md:mb-8">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="TYPE YOUR EMAIL*"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        onChange={(e) => (email.current = e.target.value)}
                    />
                </div>
                <div className="relative mt-1 bg-white mb-4 md:mb-8">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="TYPE YOUR PASS*"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        onChange={(e) => (pass.current = e.target.value)}
                    />
                </div>
            </div>
        

            <div className="flex flex-col items-center justify-center ">
                <button
                    onClick={onSubmit}
                    disabled={loading}
                    className={`${loading
                        ? "cursor-not-allowed border-gray-200 bg-gray-100"
                        : "border-black bg-secondary text-black hover:text-black"
                        } flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none font-semibold`}
                    >
                    {loading ? (
                        <LoadingDots color="#808080" />
                    ) : (
                        <p>SIGN IN</p>
                    )}
                </button>
            </div>
            <p className="text-center text-sm text-gray-600">*If it&apos;s your first time, click and we&apos;ll show the way to <Link href="/register" className="font-semibold text-gray-800">Sign up</Link> for free</p>
        

        <Toasts />

        </form>
    );
}

export default LoginForm;
