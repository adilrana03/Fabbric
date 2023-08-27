'use client';
import React, {
	useState,
	useEffect,
} from 'react';

import {getCurrentUser} from '@/services/user';
import UserProfile from '@/components/user/UserProfile';
import {getServerSession} from 'next-auth/next';
import {options} from '@/lib/auth';
// import myPlans from '@/components/myPlans/myPlans';

async function MyPlans() {
	// const session =
	// 	await getServerSession(
	// 		options,
	// 	);
	const [
		state,
		setState,
	] =
		useState(
			true,
		);

	return (
		<div className='text-center mt-[5%] w-[80%] ml-[20%]'>
			<div>
				<div className='flex justify-center m-2 mr-[-10px]'>
					<button
						className='text-gray-900 text-xs px-20 bg-green-300 py-1 mr-4'
						onClick={() => {
							setState(
								true,
							);
						}}>
						MONTHLY
					</button>
					<button
						className='text-gray-900 text-xs px-16 bg-white border border-yellow-400'
						onClick={() => {
							setState(
								false,
							);
						}}>
						ANNUALY{' '}
						<span className='bg-black text-white px-2'>
							-30%
						</span>
					</button>
				</div>

				<div className='flex justify-center w-[100%]'>
					<div className='max-w-sm  shadow-xl rounded-lg px-20 h-[160px] mr-4  bg-white w-[45%]'>
						<div className='px-6 py-4'>
							<h2 className='text-blue-600 '>
								STARTER
								PACK
							</h2>
							<p className='text-xs font-semibold text-blue-500'>
								<span className='text-3xl text-blue-600'>
									FREE
								</span>
								/1MONTH
							</p>
						</div>
						<div className='pt-4 pb-2 '>
							<button className=' hover:bg-green-400 text-gray-400 font-light py-1 px-20 rounded border border-yellow-300 text-xs'>
								INCLUDE
							</button>
						</div>
					</div>

					<div className='max-w-sm  shadow-xl rounded-lg px-20 h-[160px]   bg-white w-[45%]'>
						<div className='px-6 py-4'>
							<h2 className='text-blue-600'>
								FABBRIC
								PLUS
								PLAN
							</h2>
							<p className='text-xs font-semibold text-blue-500'>
								<span className='text-3xl text-blue-600'>
									{state
										? '€' +
										  49
										: '€' +
										  366}
								</span>
								/1MONTH
							</p>
						</div>
						<div className='pt-4 pb-2 '>
							<button className='bg-green-300 text-gray-900 font-light py-1 px-10 rounded border border-yellow-300 text-xs '>
								{state
									? 'UPGRADE PLAN'
									: 'DOWNGRADE PLAN'}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* -----------------PLAN  BENEFITS -------------------------- */}

			<div className='bg-purple-600 text-white flex justify-evenly m-auto mt-10 p-1'>
				<h2 className='font-light ml-[-260px] mr-56'>
					PLAN
					BENEFILTS
				</h2>

				<p className='text-bold '>
					STARTER
					PLAN
				</p>
				<p className='mr-[-220px] ml-[-80px] text-bold'>
					FEBBRIC
					PLUS
					PLAN
				</p>
			</div>

			{/* --------------------------------------DECCRIPTIONS   STARTS    FROM      HERE  ------------------------ */}
			<div className='text-gray-700'>
				<div className='flex justify-evenly  mt-6 p-1'>
					<h2 className='font-light ml-[-280px] mr-42 text-sm'>
						Dashboard
						to
						Manage
						your
						product,
						payment
						and
						shipment.
					</h2>

					<p className='text-bold ml-[-76px]'>
						✓
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
				<div className='flex justify-evenly  mt-2 p-1'>
					<h2 className='font-light ml-[-280px] mr-[80px] text-sm'>
						Access
						to
						Trusted
						Partners
						and
						Access
						Low
						MOQ
					</h2>

					<p className='text-bold -ml-20'>
						✓
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
				<div className='flex justify-evenly  mt-2 p-1'>
					<h2 className='font-light ml-[-280px] mr-[120px] text-sm'>
						Editor
						to
						design
						your
						own
						custom
						Products.
					</h2>

					<p className='text-bold ml-[-84px]'>
						✓
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
				<div className='flex justify-evenly  mt-2 p-1'>
					<h2 className='font-light ml-[-280px] mr-[155px] text-sm'>
						Use
						Fabbric's
						private
						fullfillment
						center
					</h2>

					<p className='text-bold -ml-[84px]'>
						✓
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
				<div className='flex justify-evenly  mt-2 p-1'>
					<h2 className='font-light ml-[-280px] mr-[200px] text-sm'>
						Connect
						your
						website
						(Shopify)
					</h2>

					<p className='text-bold -ml-20'>
						✕
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
				<div className='flex justify-evenly  mt-2 p-1'>
					<h2 className='font-light ml-[-280px] mr-[300px] text-sm'>
						Premium
						Support
					</h2>

					<p className='text-bold ml-[-90px]'>
						✕
					</p>
					<p className='mr-[-220px]  text-bold'>
						✓
					</p>
				</div>
			</div>
			<div className='flex justify-center m-2 mr-[-10px] mt-8'>
				<button className='text-gray-900 text-xs px-16 bg-green-300 py-1 mr-4'>
					SAVE
				</button>
				<button className='text-gray-900 text-xs px-16 bg-white border border-yellow-400'>
					EXIT
				</button>
			</div>
		</div>
	);
}

export default MyPlans;
