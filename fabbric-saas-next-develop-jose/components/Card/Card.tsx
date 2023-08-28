'use client';
import React from 'react';
import Image from 'next/image';
import VisaImage from '@/assets/Visa.png';
import Mastercard from '@/assets/Mastercard.png';
import AX from '@/assets/AmericanExpress.png';

interface CardProps {
	setState: (
		state: boolean,
	) => void;
}

const Card: React.FC<
	CardProps
> = ({
	setState,
}) => {
	const handleAddButtonClick =
		() => {
			setState(
				false,
			);
		};
	return (
		<div className='card p-6 border rounded-md w-[480px] h-[456px] bg-white  z-10 mt-[-20%] mx-[15%] fixed'>
			<h2 className='text-md font-bold mb-4  ml-[-65%] text-indigo-500'>
				ADD
				CARD
				DETAILS
			</h2>
			<h5 className='text-xs ml-[-83%] mb-2 text-indigo-500'>
				We
				accepted
			</h5>
			<div className='card-images flex mb-8 h-[16px]'>
				<Image
					className='mr-4'
					src={
						VisaImage
					}
					alt='Visa-Image'
					height={
						3
					}
					width={
						40
					}
				/>
				<Image
					className='mr-4'
					src={
						Mastercard
					}
					alt='MasterCard-Image'
					height={
						2
					}
					width={
						40
					}
				/>
				<Image
					className='mr-4'
					src={
						AX
					}
					alt='American_Express-Image'
					height={
						4
					}
					width={
						40
					}
				/>
			</div>
			<Image
				className='ml-[88%] -mb-4'
				src={
					VisaImage
				}
				alt='Visa-Image'
				height={
					2
				}
				width={
					40
				}
			/>
				<input
					type='text'
					placeholder='Card Number'
					className='input-field mb-8'
				/>

			<input
				type='text'
				placeholder='Expiry Date'
				className='input-field mb-8'
			/>
			<input
				type='text'
				placeholder='Card Holder'
				className='input-field mb-8'
			/>
			<input
				type='text'
				placeholder='CVV'
				className='input-field mb-8'
			/>
			<div className='mb-8'>
				<div className='flex items-start ml-[-300px]'>
					<input
						className='mr-[-500px]'
						type='checkbox'
						id='save-info'
					/>

					<label htmlFor='save-info'>
						Save
						information
						for
						future
					</label>
				</div>
			</div>
			<button
				className='add-button bg-lime-400 text-black px-12 rounded'
				onClick={
					handleAddButtonClick
				}>
				ADD
			</button>
		</div>
	);
};

export default Card;
