'use client'
import React,{useState} from 'react';
import {BsFillCheckSquareFill} from 'react-icons/bs'
interface card {
	setOpenCard: boolean | any
}

const upgradeCard =({setOpenCard}: card) => {
	// const [openCard, setOpenCard] = useState(true);

		return (
			<div className='h-[377px] w-[621px] p-8 border text-center shadow-xl fixed z-10 bg-white bottom-[220px] right-[290px]'>
				<div className='text-center text-lime-400'>
					<BsFillCheckSquareFill className='text-lime-400 mb-5 mx-auto text-2xl' />
				</div>

				<h2 className='text-xl  text-indigo-600 mb-3 font-light'>
					YOUR
					SUBSCRIPTION
					HAS
					BEEN
					UPGRADED
				</h2>
				<h4 className=' mb-5 text-sm font-light'>
					You
					are
					now
					on
					the
					FABBRIC
					PLUS
					PLAN.
				</h4>
				<h2 className='mb-5 text-sm font-light'>
					You
					were
					charged
					a
					prorated
					amount
					of
					-$49.00
					immediately
					for
					the
					remainder
					of
					this
					billing
					cycle.
					You
					will
					be
					charged
					$49.00/monthly
					starting
					at
					the
					next
					cycle.
				</h2>
				<h2 className='text-sm font-light'>
					Please
					email
					us
					at
					<span className='font-bold ml-1 mr-1'>
						creators@fabbric.com
					</span>
					if
					you
					have
					any
					query
				</h2>
				<div className='flex flex-col w-[300px] text-center ml-36 mt-8'>
					<button
						className='bg-lime-400 text-black p-1 px-2 block mb-4 text-sm cursor-pointer'
						onClick={() =>
							setOpenCard(
								false,
							)
						}>
						THAT'S
						IT
					</button>
					<button
						className='border border-green-300 text-black p-1 px-2 text-sm cursor-pointer'
						onClick={() =>
							setOpenCard(
								false,
							)
						}>
						NOPE
					</button>
				</div>
			</div>
		);
	};

export default upgradeCard;
