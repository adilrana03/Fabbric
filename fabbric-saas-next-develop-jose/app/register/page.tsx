import RegisterForm from "@/app/register/RegisterForm";
import BackgroundGrid from "@/components/background_grid";
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";
import { redirect } from 'next/navigation';
import Link from "next/link";

import backgroundImgGrid from "@/assets/backgrounds/Malla_Morada.png";


// import CheckIcon from '@mui/icons-material/Check';

export const metadata = {
    title: 'SignUp - Fabbric',
    description: 'Fabbric Creator Dashboard',
}

export default async function Register() {

    const session = await getServerSession(options)

    if (session) {
        redirect('/');
    }
    return (
        <div className="flex min-h-screen w-screen items-center justify-center pt-16 md:pt-10 pb-16 md:pb-10" style={{ backgroundImage: `url(/img/bg/bg_01.png)`,    backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
            <div className="z-10 overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-3 text-center py-4 px-4 md:py-8 ">
                    <h1 className="text-xl text-secondary z-10 italic">
                        ONE CLICK TO DESIGN YOUR OWN GARMENTS ;)
                    </h1>
                    <p className="text-white z-10">
                        Register Now to Revisit Your Drafts Designs Anytime!
                    </p>
                </div>

                <div className="flex bg-white w-11/12 mx-auto">
                    <div className="flex flex-col-reverse md:flex-row w-full shadow-xl" style={{ maxWidth: '800px' }}>
                        <div className="md:w-2/5">
                            <div className="h-full px-4 py-4 md:px-8 md:py-8"  style={{background: '#afff00'}}>
                                <p className="text-sm text-black mb-4 md:mb-10">Your FREE Starter Plan includes: </p>

                                <div className="grid grid-cols-[auto,1fr] mb-4 md:mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{color: '#7745ff'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <p className="text-xs text-black pl-2">
                                        Dashboard to manage product, payments, & shippings
                                    </p>
                                </div>

                                <div className="grid grid-cols-[auto,1fr] mb-4 md:mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{color: '#7745ff'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <p className="text-xs text-black pl-2">
                                        Access to Trusted Partners and access Low MOQ
                                    </p>
                                </div>

                                <div className="grid grid-cols-[auto,1fr] mb-4 md:mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{color: '#7745ff'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <p className="text-xs text-black pl-2">
                                        Editor to design your own custom products
                                    </p>
                                </div>

                                <div className="grid grid-cols-[auto,1fr]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{color: '#7745ff'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <p className="text-xs text-black pl-2">
                                        Save and revisit your designs any time
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <RegisterForm />
                        </div>
                    </div>
                </div>


                <p className="text-center text-white mt-10">
                    *If it&apos;s not your first time, click here to <br></br>
                    <Link href="/login" className="font-semibold text-white underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
