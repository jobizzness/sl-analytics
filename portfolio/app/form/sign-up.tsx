"use client";

import { Fragment, useState } from 'react'


export default function SignUp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section className="relative isolate  bg-gray-900">
            <div className=" w-full md:w-3/4 mx-auto grid pt-1 grid-cols-1 p-4 md:p-2 md:grid-cols-2 ">
               <div className="img w-full md:block hidden ">
                 <img src="https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-10/12 mx-auto" />
               </div>
               <div className="inputs-con p-2 md:p-6 flex flex-col gap-14 align-center justify-center">
                <div className="flex-row ">
                  <h1 className="text-slate-50 mb-4 text-4xl">Create new account</h1>
                 <div className="flex gap-2">
                    <p className="text-slate-500 text-sm">Already A Member?</p>
                  <p className="text-blue-600 text-sm">Log In</p>
                 </div>  
                </div>

               
                  <div className="input-container ">
                    <p className="lable text-slate-50">Full Name</p>
                    <input type="text" placeholder='Name' className="w-full bg-transparent border-b border-sky-500 p-2 mt-2 rounded text-slate-50 outline-none" />
                  </div>
                  <div className="input-container ">
                    <p className="lable text-slate-50">Email</p>
                    <input type="text" placeholder='email' className="w-full bg-transparent border-b border-sky-500 p-2 mt-2 rounded text-slate-50 outline-none" />
                  </div>
                  <div className="input-container ">
                    <p className="lable text-slate-50">Password</p>
                    <input type="text" placeholder='password' className="w-full bg-transparent border-b border-sky-500 p-2 mt-2 rounded text-slate-50 outline-none" />
                  </div>
                 <button className=" bg-sky-500 hover:bg-sky-700 text-slate-50 p-2 rounded-2xl ">Sign Up</button>
               </div>

            </div>
         
        </section>
    )
}
