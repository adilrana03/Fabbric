'use client';
import React, {
	useEffect,
	useState,
	ChangeEvent,
} from 'react';
import {getCurrentUser} from '@/services/user';
import {getCountries} from '@/services/country';
import {AiOutlinePlus} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import VisaImage from '@/assets/Visa.png';
import Card from '@/components/Card/Card';

interface Country {
	UUID: string;
	name: string;
}

const UserProfile =
	(
		session: any,
	) => {
		const [
			userData,
			setUserData,
		] =
			useState<
				| any
				| null
			>(
				null,
			);

		const [
			formValues,
			setFormValues,
		] =
			useState(
				{
					first_name:
						'',
					last_name:
						'',
					address_street:
						'',
					address_apartment:
						'',
					address_zip_code:
						'',
					address_city:
						'',
					address_province:
						'',
					address_country:
						'',
					email: '',
					telephone:
						'',
					birthday: '',
					job_position:
						'',
					biography:
						'',
					instagram:
						'',
					twitch: '',
					youtube: '',
					website: '',
					billing_name:
						'',
					billing_lastname:
						'',
					billing_company:
						'',
					billing_cif:
						'',
					billing_address:
						'',
					billing_zipcode:
						'',
					billing_city:
						'',
					billing_provinance:
						'',
					billing_country:
						'',
					billing_number:
						'',
					billing_email:
						'',
					password: '',
					newPass: '',
				},
			);

		const [
			countries,
			setCountries,
		] =
			React.useState<
				Country[]
			>(
				[],
			);
		const [
			open,
			setOpen,
		] =
			useState<boolean>(
				false,
			); // Ensure to provide the correct initial value

		useEffect(() => {
			async function fetchData() {
				try {
					const userData =
						await getCurrentUser(
							session
								.session
								.access,
						);
					setUserData(
						userData,
					);
				} catch (error) {
					// Manejo de errores
				}
			}

			fetchData();
		}, []);

		useEffect(() => {
			async function fetchData() {
				try {
					const countriesData =
						await getCountries(
							session
								.session
								.access,
						);
					setCountries(
						countriesData,
					);
					console.log(
						countriesData,
					);
				} catch (error) {
					// Manejo de errores
				}
			}

			fetchData();
		}, []);

		if (
			userData
		) {
			formValues.first_name =
				userData.first_name ||
				'';
			formValues.last_name =
				userData.last_name ||
				'';
			formValues.address_street =
				userData.address_street ||
				'';
			formValues.address_apartment =
				userData.address_apartment ||
				'';
			formValues.address_zip_code =
				userData.address_zip_code ||
				'';
			formValues.address_city =
				userData.address_city ||
				'';
			formValues.address_province =
				userData.address_province ||
				'';
			formValues.address_country =
				userData.address_country ||
				'';
			formValues.email =
				userData.email ||
				'';
			formValues.telephone =
				userData.telephone ||
				'';
			formValues.birthday =
				userData.birthday ||
				'';
			formValues.job_position =
				userData.job_position ||
				'';
			formValues.biography =
				userData.biography ||
				'';
			formValues.instagram =
				userData.instagram ||
				'';
			formValues.twitch =
				userData.twitch ||
				'';
			formValues.youtube =
				userData.youtube ||
				'';
			formValues.website =
				userData.website ||
				'';
			formValues.billing_name =
				userData.billing_name ||
				'';
			formValues.billing_lastname =
				userData.billing_lastname ||
				'';
			formValues.billing_company =
				userData.billing_company ||
				'';
			formValues.billing_cif =
				userData.billing_cif ||
				'';
			formValues.billing_address =
				userData.billing_address ||
				'';
			formValues.billing_zipcode =
				userData.billing_zipcode ||
				'';
			formValues.billing_city =
				userData.billing_city ||
				'';
			formValues.billing_provinance =
				userData.billing_provinance ||
				'';
			formValues.billing_country =
				userData.billing_country ||
				'';
			formValues.billing_number =
				userData.billing_number ||
				'';
			formValues.billing_email =
				userData.billing_email ||
				'';
			formValues.password =
				userData.password ||
				'';
			formValues.newPass =
				userData.newPass ||
				'';



					}

		const handleChange =
			(
				event: ChangeEvent<HTMLInputElement>,
			) => {
				const {
					name,
					value,
				} =
					event.target;
				setFormValues(
					{
						...formValues,
						[name]: value,
					},
				);
			};

		return (
			<div
				id='dashboard-profile'
				className='py-12 px-6 sm:ml-64 bg-white relative '>
				<div className='p-4'>
					<form>
						<div className='grid grid-flow-col gap-2'>
							<div className='flex items-center justify-center w-full'>
								<label
									id='profile-img'
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-center w-[363px] h-[349px]  cursor-pointer bg-gray-100 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 '>
									<div className='flex flex-col items-center justify-center pt-5 pb-6 h-full relative'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={
												1.5
											}
											stroke='currentColor'
											className='w-6 h-6 camera-icon'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
											/>
										</svg>

										<div
											className='flex items-center justify-center'
											style={{
												position: 'absolute',
												width: '35px',
												height: '35px',
												background:
													'#AFFF00',
												top: '10px',
												right: '10px',
											}}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={
													1.5
												}
												stroke='currentColor'
												className='w-6 h-6'
												style={{
													width: '20px',
													color: '#000',
												}}>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
												/>
											</svg>
										</div>

										{/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
									</div>
									<input
										id='dropzone-file'
										type='file'
										className='hidden'
									/>
								</label>
							</div>
							<div className='p-4 '>
								<div className='grid gap-6 mb-5 md:grid-cols-2'>
									<div>
										<label
											htmlFor='first_name'
											className=''>
											First
											name
										</label>
										<input
											type='text'
											id='first_name'
											className=''
											placeholder='John'
											required
											value={
												formValues.first_name
											}
											onChange={
												handleChange
											}
										/>
									</div>
									<div>
										<label
											htmlFor='last_name'
											className=''>
											Last
											name
										</label>
										<input
											type='text'
											id='last_name'
											className=''
											placeholder='Doe'
											required
											value={
												formValues.last_name
											}
											onChange={
												handleChange
											}
										/>
									</div>
								</div>
								<div className='mb-5'>
									<label
										htmlFor='address'
										className=''>
										STREET
										AND
										HOUSE
										NUMBER
									</label>
									<input
										type='text'
										id='address'
										className=''
										placeholder='STREET AND HOUSE NUMBER'
										required
										value={
											formValues.address_street
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div className='mb-4'>
									<label
										htmlFor='address2'
										className=''>
										APARTMENT,
										SUITE,
										ETC.
										(OPTIONAL)
									</label>
									<input
										type='text'
										id='address2'
										className=''
										placeholder='APARTMENT, SUITE, ETC. (OPTIONAL)'
										value={
											formValues.address_apartment
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div className='grid gap-6 mb-5 md:grid-cols-2'>
									<div>
										<label
											htmlFor='zipcode'
											className=''>
											ZIP
											CODE
										</label>
										<input
											type='text'
											id='zipcode'
											className=''
											placeholder='00000'
											required
											value={
												formValues.address_zip_code
											}
											onChange={
												handleChange
											}
										/>
									</div>
									<div>
										<label
											htmlFor='city'
											className=''>
											City
										</label>
										<input
											type='text'
											id='city'
											className=''
											placeholder='LOREM IPSUM'
											required
											value={
												formValues.address_city
											}
											onChange={
												handleChange
											}
										/>
									</div>
								</div>
								<div className='grid gap-6 mb-5 md:grid-cols-2'>
									<div>
										<label
											htmlFor='province'
											className=''>
											Province
										</label>
										<input
											type='text'
											id='province'
											className=''
											placeholder='LOREM IPSUM'
											required
											value={
												formValues.address_province
											}
											onChange={
												handleChange
											}
										/>
									</div>
									<div>
										<label
											htmlFor='country'
											className=''>
											Country
										</label>
										<select
											id='country'
											className=''
											required
											value={
												formValues.address_country
											}>
											{countries.map(
												(
													option,
												) => (
													<option
														key={
															option.UUID
														}
														value={
															option.UUID
														}>
														{
															option.name
														}
													</option>
												),
											)}
										</select>
									</div>
								</div>
								<div className='grid gap-6 -mb-1 md:grid-cols-2'>
									<div>
										<label
											htmlFor='phone'
											className=''>
											PHONE
											NUMBER
										</label>
										<input
											type='text'
											id='phone'
											className=''
											placeholder='LOREM IPSUM'
											required
											value={
												formValues.telephone
											}
											onChange={
												handleChange
											}
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className=''>
											EMAIL
										</label>
										<input
											type='email'
											id='email'
											className=''
											placeholder='LOREM IPSUM'
											required
											value={
												formValues.email
											}
											onChange={
												handleChange
											}
										/>
									</div>
								</div>
							</div>
						</div>
						{/* ----------------------------------------------------= */}
						{open ? (
							<div className='text-center '>
								open
								?{' '}
								<Card
									setState={
										setOpen
									}
								/>
							</div>
						) : (
							''
						)}
						{/* ------------------------------------ABOUT ME START FROM HERE----------------------------------- */}
						<div>
							<h2 className='w-full bg-violet-500 text-white mb-5 pl-3 p-1'>
								ABOUT
								ME
							</h2>
							<div className='grid gap-6 mb-6 md:grid-cols-2'>
								<div>
									<p className='font-light text-gray-300 text-sm'>
										BIRTHDAY
									</p>
									<input
										type='text'
										id='phone'
										className=''
										placeholder='DD/MM/YYYY'
										required
										value={
											formValues.birthday
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className=''>
										JOB
										POSITION
									</label>
									<input
										type=''
										id='job_position'
										className=''
										placeholder='LOREM IPSUM'
										required
										value={
											formValues.job_position
										}
										onChange={
											handleChange
										}
									/>
								</div>
							</div>
							<div className='mb-4'>
								<label
									htmlFor='Biography'
									className='mb-4'>
									Biography
								</label>
								<input
									type='email'
									id='email'
									className=''
									placeholder='LOREM IPSUM'
									required
									value={
										formValues.biography
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>
						<div className='mb-4'>
							<h2 className='w-full bg-violet-500 text-white mb-5 pl-3 p-1'>
								EXTERNAL
								LINK
							</h2>
							<div className='grid gap-3 mb-6 md:grid-cols-3'>
								<div>
									<label
										htmlFor='email'
										className='font-light text-gray-300 text-sm'>
										Instagram
									</label>
									<input
										type='text'
										id='instagram'
										className=''
										placeholder='DD/MM/YYYY'
										required
										value={
											formValues.instagram
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='twitch'
										className=''>
										Twitch
									</label>
									<input
										type='text'
										id='twitch'
										className=''
										placeholder='LOREM IPSUM'
										required
										value={
											formValues.twitch
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='twitch'
										className=''>
										Youtube
									</label>
									<input
										type='text'
										id='youtube'
										className=''
										placeholder='LOREM IPSUM'
										required
										value={
											formValues.youtube
										}
										onChange={
											handleChange
										}
									/>
								</div>
							</div>
							<div className='mb-4'>
								<label
									htmlFor='Biography'
									className='mb-4'>
									Website
								</label>
								<input
									type='email'
									id='email'
									className=''
									placeholder='LOREM IPSUM'
									required
									value={
										formValues.website
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>
						{/* -----------------------------EXERNAL LINK ENDS HERE------- */}

						{/* -----------------------------Billing Address HERE------- */}

						<div className='mb-4 '>
							<h2 className='w-full bg-violet-500 text-white mb-5 pl-3 p-1'>
								BILLING
								ADDRESS
							</h2>
							<div className='grid gap-4 mb-6 md:grid-cols-2'>
								<div>
									<label
										htmlFor='name'
										className='font-light text-gray-300 text-sm'>
										Name
									</label>
									<input
										type='text'
										id='name'
										className=''
										placeholder='Lorum Ispum'
										required
										value={
											formValues.billing_name
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='last_name'
										className=''>
										Last
										Name
									</label>
									<input
										type='text'
										id='last_name'
										className=''
										placeholder='LOREM IPSUM'
										required
										value={
											formValues.billing_lastname
										}
										onChange={
											handleChange
										}
									/>
								</div>
							</div>
							<div className='grid gap-4 mb-6 md:grid-cols-2'>
								<div>
									<label
										htmlFor='name'
										className='font-light text-gray-300 text-sm'>
										COMPANY
										NAME
									</label>
									<input
										type='text'
										id='name'
										className=''
										placeholder=''
										required
										value={
											formValues.billing_company
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='last_name'
										className=''>
										CIF/NIF
									</label>
									<input
										type='text'
										id='last_name'
										className=''
										placeholder=''
										required
										value={
											formValues.billing_cif
										}
										onChange={
											handleChange
										}
									/>
								</div>
							</div>
							<div className='mb-4'>
								<label
									htmlFor='address'
									className=''>
									ADDRESS
								</label>
								<input
									type='text'
									id='address'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_address
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>
						<div className='grid gap-4 mb-6 md:grid-cols-2'>
							<div>
								<label
									htmlFor='zipcode'
									className='font-light text-gray-300 text-sm'>
									ZIP
									CODE
								</label>
								<input
									type='text'
									id='zipcode'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_zipcode
									}
									onChange={
										handleChange
									}
								/>
							</div>
							<div>
								<label
									htmlFor='city'
									className=''>
									CITY
								</label>
								<input
									type='text'
									id='billing_city'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_city
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>
						<div className='grid gap-4 mb-6 md:grid-cols-2'>
							<div>
								<label
									htmlFor='province'
									className='font-light text-gray-300 text-sm'>
									PROVINCE
								</label>
								<input
									type='text'
									id='billing_province'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_provinance
									}
									onChange={
										handleChange
									}
								/>
							</div>
							<div>
								<label
									htmlFor='country'
									className=''>
									COUNTRY
								</label>
								<input
									type='text'
									id='billing_country'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_country
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>

						<div className='grid gap-4 mb-6 md:grid-cols-2'>
							<div>
								<label
									htmlFor='phone'
									className='font-light text-gray-300 text-sm'>
									PHONE
									NUMBER
								</label>
								<input
									type='text'
									id='billing_phone'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_number
									}
									onChange={
										handleChange
									}
								/>
							</div>
							<div>
								<label
									htmlFor='gmail'
									className=''>
									GMAIL
								</label>
								<input
									type='text'
									id='billing_gmail'
									className=''
									placeholder=''
									required
									value={
										formValues.billing_email
									}
									onChange={
										handleChange
									}
								/>
							</div>
						</div>

						{/* -------------------------------------BILLING ADDRESS ENDS HERE ---------------------*/}

						{/* -------------------------------------PAYMENT METHODS STARTS HERE ---------------------*/}
						<div className='mb-5 '>
							<h2 className='w-full bg-violet-500 text-white mb-5 pl-3 p-1'>
								PAYMENT
								METHODS
							</h2>
							<div
								className='flex justify-items-start text-xs cursor-pointer'
								onClick={() => {
									setOpen(
										true,
									);
								}}>
								<RxCross2 className='mr-4' />
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
								<p className='text-sm text-gray-700'>
									****
									****
									****
									4156
								</p>
							</div>

							<div
								className='flex mt-4 align-text-bottom font-light text-xs cursor-pointer'
								onClick={() => {
									setOpen(
										true,
									);
								}}>
								<AiOutlinePlus className='mr-4' />
								<h4>
									ADD
									NEW
									ADDRESS
								</h4>
							</div>
						</div>
						{/* --------------------------------SECURITY STARTS FROM HERE---------------- */}
						<div>
							<h2 className='w-full bg-violet-500 text-white mb-5 pl-3 p-1'>
								SECURITY
							</h2>
							<div className='grid gap-4 mb-6 md:grid-cols-2'>
								<div>
									<label
										htmlFor='password'
										className='font-light text-gray-300 text-sm'>
										PASSWORD
									</label>
									<input
										type='password'
										id='password'
										className=''
										placeholder='**********'
										required
										value={
											formValues.password
										}
										onChange={
											handleChange
										}
									/>
								</div>
								<div>
									<label
										htmlFor='new password'
										className=''>
										NEW
										PASSWORD
									</label>
									<input
										type='password'
										id='new_password'
										className=''
										placeholder=''
										required
										value={
											formValues.newPass
										}
										onChange={
											handleChange
										}
									/>
								</div>
							</div>
						</div>
						<div className='text-center mt-10 mb-10 '>
							<button className='btn-submit-primary mr-4'>
								Save
							</button>
							<button className=' bg-white text-black border border-green-300 px-10 ml-4'>
								Exit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	};

export default UserProfile;
