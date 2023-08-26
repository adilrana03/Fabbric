'use client'
import React from 'react';
import Image from 'next/image';
import VisaImage from '@/assets/Visa.png';
import Mastercard from '@/assets/Mastercard.png';
import AX from '@/assets/AmericanExpress.png';

interface CardProps {
  setState: (state: boolean) => void;
}

const Card: React.FC<CardProps> = ({ setState }) => {
  const handleAddButtonClick = () => {
    setState(false);
  };
		return (
			<div className='card p-6 border rounded-md w-[480px] h-[456px] bg-white absolute z-10 mt-[-20%] mx-[15%]'>
				<h2 className='text-2xl font-semibold mb-4'>
					Add
					Card
					Detail
				</h2>
				<div className='card-images flex mb-8'>
					<Image
						className='mr-4'
						src={
							VisaImage
						}
						alt='Visa-Image'
						height={
							5
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
							5
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
							5
						}
						width={
							40
						}
					/>
				</div>
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
					<div className='flex items-start ml-[-280px]'>
						<input
							className='mr-[-450px]'
							type='checkbox'
							id='save-info'
						/>

						<label htmlFor='save-info '>
							Save
							information
							for
							future
						</label>
					</div>
				</div>
				<button
					className='add-button bg-green-200 text-black px-10 rounded'
					onClick={
						handleAddButtonClick
					}>
					Add
				</button>
			</div>
		);
	};

export default Card;
