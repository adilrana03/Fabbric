
import Image from "next/image";
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";
import { redirect } from 'next/navigation';


export default async function Home() {
    const menuOptions = ["Opción 1", "Opción 2", "Opción 3"];


    const session = await getServerSession(options)

    // console.log(session, "DASBOARD SESSION")
    if (!session) {
        redirect('/login');
    }

  return (
    <div className="py-12 px-6 sm:ml-64 bg-white">
        <div className="p-4 ">

            <div className="" >
                
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase  light:text-gray-400" style={{ color: '#7745FF', border: '1px solid #7745FF'}}>
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock Received
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b light:bg-gray-900 light:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                LOREM IPSUM
                                </th>
                                <td className="px-6 py-4">
                                LOREM IPSUM
                                </td>
                                <td className="px-6 py-4">
                                    <span className="badge-pending text-sm  mr-2 px-2.5 py-0.5">PENDING</span>
                                </td>
                                <td className="px-6 py-4">0</td>
                                <td className="px-6 py-4">23/07/2023</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-b bg-gray-50 light:bg-gray-800 light:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                LOREM IPSUM
                                </th>
                                <td className="px-6 py-4">
                                LOREM IPSUM
                                </td>
                                <td className="px-6 py-4">
                                <span className="badge-received text-sm  mr-2 px-2.5 py-0.5">Received</span>
                                </td>
                                <td className="px-6 py-4">0</td>
                                <td className="px-6 py-4">23/07/2023</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="bg-white border-b light:bg-gray-900 light:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                LOREM IPSUM
                                </th>
                                <td className="px-6 py-4">
                                LOREM IPSUM
                                </td>
                                <td className="px-6 py-4">
                                <span className="badge-received text-sm  mr-2 px-2.5 py-0.5">Received</span>
                                </td>
                                <td className="px-6 py-4">0</td>
                                <td className="px-6 py-4">23/07/2023</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center h-28" style={{ background: 'rgba(119, 69, 255, 0.06)', color: '#7745FF', border: '1px solid #7745FF' }}>
                    <p className="text-2xl text-center">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" style={{ margin: '0 auto' }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span style={{fontSize: '14px'}}>ADD WIDGET HERE</span>
                    </p>
                </div>
                <div className="flex items-center justify-center h-28" style={{ background: 'rgba(119, 69, 255, 0.06)', color: '#7745FF', border: '1px solid #7745FF', borderLeft: 0 }}>
                    <p className="text-2xl text-center">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" style={{ margin: '0 auto' }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span style={{fontSize: '14px'}}>ADD WIDGET HERE</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4" style={{ background: 'rgba(119, 69, 255, 0.06)', color: '#7745FF', border: '1px solid #7745FF', borderTop: 0 }}>
                <p className="text-2xl text-center">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" style={{ margin: '0 auto' }}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span style={{fontSize: '14px'}}>ADD WIDGET HERE</span>
                </p>
            </div>
        </div>
        </div>
  );
}
