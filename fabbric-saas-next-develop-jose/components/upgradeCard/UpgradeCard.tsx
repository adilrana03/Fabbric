'use client';
import React from 'react';

interface CardProps {
	setOpenCard: (
		open: boolean,
	) => void;
}

const UpgradeCard: React.FC<
	CardProps
> = ({
	setOpenCard,
}) => {
	const handleOpen =
		() => {
			setOpenCard(
				false,
			); // Or setOpenCard(true) if that's the name of the state setter prop
		};
	return (
		<div className='card p-6 border rounded-md max-w-[480px] bg-white z-10 mx-auto fixed left-1/2 transform -translate-x-1/2'>
			<h2 className='text-md font-bold mb-4 text-indigo-500'>
				Your
			</h2>
			<h5 className='text-xs mb-2 text-indigo-500'>
				You
				are
				now
				on
				the
				FABBRIC
				PLUS
				PLAN
			</h5>
			<h5 className='text-xs mb-2 text-indigo-500'>
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
			</h5>
			<p className='text-xs text-gray-700'>
				Please
				email
				us
				at
				creators@fabbric.com
				if
				you
				have
				any
				questions.
			</p>

			<div className='flex justify-center mt-4 space-x-4'>
				<button
					className='add-button bg-lime-400 text-black px-12 rounded'
					onClick={()=>{handleOpen()}}>
					THAT'S
					IT
				</button>
				<button
					className='add-button bg-lime-400 text-black px-12 rounded'
					onClick={()=>{handleOpen()}}>
					NOPE
				</button>
			</div>
		</div>
	);
};

export default UpgradeCard;
