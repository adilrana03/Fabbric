"use client";
import React, { ChangeEvent, useState } from "react";
import { signIn } from "next-auth/react";

import { API_ENDPOINTS } from "@/lib/api-constants"
import Toasts from "@/components/toasts";
import 'react-toastify/dist/ReactToastify.css';




const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        first_name: "",
        email: "",
        password: "",
        password2: ""
    });

    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormValues({ first_name: "", email: "", password: "", password2: "" });
    
        try {
          const res = await fetch(API_ENDPOINTS.authSignUp, {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          setLoading(false);
          if (!res.ok) {
            setError((await res.json()).message);
            return;
          }
    
          signIn(undefined, { callbackUrl: "/" });
        } catch (error: any) {
          setLoading(false);
          setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
  
    return (
        <form
        id="register-form"
        method="POST"
        className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-10 w-full"
        onSubmit={onSubmit}
        >
            {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
            )}
            <div>

                <div className="mb-4 md:mb-8">
                    <div className="relative mt-1 bg-white">
                        <input
                        id="first_name"
                        name="first_name"
                        type="first_name"
                        placeholder="FIRST NAME*"
                        autoComplete="first_name"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        value={formValues.first_name}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4 md:mb-8">
                    <div className="relative mt-1 bg-white">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="TYPE YOUR EMAIL*"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        value={formValues.email}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4 md:mb-8">
                    <div className="relative mt-1 bg-white">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="CREATE PASSWORD*"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4 md:mb-8">
                    <div className="relative mt-1 bg-white">
                        <input
                        id="password2"
                        name="password2"
                        type="password"
                        autoComplete="new-password"
                        placeholder="REPEAT PASSWORD*"
                        required
                        className="block w-full appearance-none pb-2 focus:outline-none"
                        value={formValues.password2}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">I acknowledge that I have read and accept the <a href="#" className="text-blue-600 hover:underline text-primary">privacy policies</a>, <a href="#" className="text-blue-600 hover:underline text-primary">terms of service</a>, and any other relevant agreements.</label>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center ">
                <button
                type="submit"
                disabled={loading}
                className={`${loading
                    ? "cursor-not-allowed border-gray-200 bg-gray-100"
                    : "border-black bg-secondary text-black  hover:text-black"
                    } flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none`}
                >{loading ? "loading..." : "SEND"}</button>
            </div>

            <Toasts />


        </form>
    );
}

export default RegisterForm;
