import LoginForm from "@/app/login/LoginForm";
import BackgroundGrid from "@/components/background_grid";
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'SignIn - Fabbric',
    description: 'Fabbric Creator Dashboard',
}

export default async function Login() {

    const session = await getServerSession(options)

    if (session) {
        redirect('/');
    }
    return (
        <>
            <div className="flex min-h-screen w-screen items-center justify-center pt-16 md:pt-10 pb-16 md:pb-10" style={{ backgroundImage: `url(/img/bg/bg_01.png)`,    backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                <div className="z-10 w-full max-w-md overflow-hidden ">
                    <div className="flex flex-col items-center justify-center space-y-3 text-center py-4 px-4 md:py-8 ">
                    <h1 className="text-xl text-secondary z-10 italic">
                        IT’S GREAT TO SEE YOU AGAIN ;)
                    </h1>
                    <p className="text-white z-10">
                        Login to Revisit Your Draft Designs Anytime!
                    </p>
                    </div>
                    <div className="w-11/12 mx-auto">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}
