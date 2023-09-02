'use client';
import React, {
	useState,
	useEffect,
} from 'react';
import UpgradeCard from '@/components/upgradeCard/UpgradeCard';

const MyPlans =
	() => {
		const [
			openCard,
			setOpenCard,
		] =
			useState(
				false,
			);

		const [
			plan,
			setPlan,
		] =
			useState(
				false,
			);

		return (
			<div className='text-center mt-[5%] w-[80%] ml-[20%]'>
				<div>
					<div className='flex justify-center m-2 '>
						<button
							className={`text-gray-900 text-xs px-20 ${
								plan
									? 'bg-white border border-lime-300'
									: 'bg-lime-400'
							}  py-1 mr-4`}
							onClick={() => {
								setPlan(
									false,
								);
							}}>
							MONTHLY
						</button>
						<button
							className={`text-gray-900 text-xs px-16 ${
								!plan
									? 'bg-white'
									: 'bg-lime-400'
							}  border border-lime-400`}
							onClick={() => {
								setPlan(
									true,
								);
							}}>
							ANNUALY{' '}
							<span className='bg-black text-white px-2'>
								-30
							</span>
						</button>
					</div>

					<div className='flex justify-center w-[100%]'>
						<div className='max-w-sm  shadow-xl rounded-lg px-20 h-[160px] mr-4  bg-white w-[45%]'>
							<div className='px-6 py-4'>
								<h2 className='text-indigo-600 '>
									STARTER
									PACK
								</h2>
								<p className='text-xs  text-indigo-500 font-light'>
									<span className='text-3xl font-semibold text-indigo-600'>
										FREE
									</span>
									/1month
								</p>
							</div>
							<div className='pt-4 pb-2 '>
								<button className=' hover:bg-lime-400 text-gray-400 font-light py-1 px-20 rounded border border-lime-300 text-xs'>
									INCLUDE
								</button>
							</div>
						</div>

						<div className='max-w-sm  shadow-xl rounded-lg px-20 h-[160px]   bg-white w-[45%]'>
							<div className='px-6 py-4'>
								<h2 className='text-indigo-600'>
									FABBRIC
									PLUS
									PLAN
								</h2>
								<p className='text-xs  text-indigo-500 font-light'>
									<span className='text-3xl text-indigo-600 font-semibold'>
										{plan
											? '€366'
											: '€49'}
									</span>
									/year
								</p>
							</div>
							<div className='pt-4 pb-2 '>
								<button className='bg-lime-400 text-gray-900 font-light py-1 px-10 rounded border border-lime-400 text-xs ' onClick={()=>{setOpenCard(true)}}>
									{!plan
										? 'UPGRADE PLAN'
										: 'DOWNGRADE PLAN'}
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* -----------------C A R D   C O M P O N E N T -------------------------- */}

				<div className=''>
					{openCard ? (
						<UpgradeCard
						setOpenCard={
							setOpenCard
						}
						/>
					) : (
						''
					)}
				</div>

				{/* -----------------PLAN  BENEFITS -------------------------- */}

				<div className='bg-indigo-600 text-white flex justify-evenly m-auto mt-10 p-1'>
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

						<p className='text-bold ml-[-76px] text-lime-400'>
							✓
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
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

						<p className='text-bold -ml-20 text-lime-400'>
							✓
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
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

						<p className='text-bold ml-[-84px] text-lime-400'>
							✓
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
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

						<p className='text-bold -ml-[84px] text-lime-400'>
							✓
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
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

						<p className='text-bold -ml-20 text-gray-400'>
							✕
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
							✓
						</p>
					</div>
					<div className='flex justify-evenly  mt-2 p-1'>
						<h2 className='font-light ml-[-280px] mr-[300px] text-sm'>
							Premium
							Support
						</h2>

						<p className='text-bold ml-[-90px] text-gray-400'>
							✕
						</p>
						<p className='mr-[-220px]  text-bold text-lime-400'>
							✓
						</p>
					</div>
				</div>
				<div className='flex justify-center m-2 mr-[-10px] mt-8'>
					<button
						className='text-gray-900 text-xs px-16 bg-lime-300 py-1 mr-4 '
						onClick={() =>
							setOpenCard(
								true,
							)
						}>
						SAVE
					</button>
					<button className='text-gray-900 text-xs px-16 bg-white border border-lime-400'>
						EXIT
					</button>
				</div>
			</div>
		);
	};

export default MyPlans;
