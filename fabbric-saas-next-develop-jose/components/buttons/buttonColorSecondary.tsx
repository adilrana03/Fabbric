'use client';

import Link from 'next/link';
import { css, Grid, Card, Text } from "@nextui-org/react";
import LoadingDots from "@/components/loading-dots";
import { useRouter } from "next/navigation";




interface MockItemProps {
    loading?: boolean;
    text?: string;
    height?: string;
    type?: string;
    link: string;
}

const ButtonColorSecondary: React.FC<MockItemProps> = ({ text = "SELECT", loading, type, link }) => {
    // export default function buttonColorSecondary({ text?: string }){
    const router = useRouter();


    const handleButtonClick = () => {
        router.push(link);
    };

    return (
        <>
            <div className="flex flex-col w-60  ">
                <button
                    disabled={loading}
                    className={`${loading
                        ? "cursor-not-allowed border-gray-200 bg-gray-100"
                        : "border-black bg-secondary text-black hover:bg-white hover:text-black"
                        } flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none font-semibold`}
                >

                    <Link href={"/editor/" + link } className="font-semibold text-gray-800">
                        {loading ? (
                            <LoadingDots color="#808080" />
                        ) : (
                            <p>{text}</p>
                        )} 
                    </Link>

                </button>
            </div>
        </>
    );

}









export default ButtonColorSecondary