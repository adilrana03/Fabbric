'use client';
import React, {
	useState,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	Nav,
	Links,
} from './navbar.styles';
import logoblack from '@/assets/logo-black.svg';
import {Dropdown} from '@nextui-org/react';

import DropdownMenu from './dropdownmenu';

import {FaRegBell} from '@react-icons/all-files/fa/FaRegBell';
import fetchUsers from '@/services/fetchDummyData';

import {Fragment} from 'react';
import {
	Popover,
	Transition,
} from '@headlessui/react';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
	ArrowPathIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const solutions =
	[
		{
			name: 'Analytics',
			description:
				'Get a better understanding of your traffic',
			href: '#',
			icon: ChartPieIcon,
		},
		{
			name: 'Engagement',
			description:
				'Speak directly to your customers',
			href: '#',
			icon: CursorArrowRaysIcon,
		},
		{
			name: 'Security',
			description:
				"Your customers' data will be safe and secure",
			href: '#',
			icon: FingerPrintIcon,
		},
		{
			name: 'Integrations',
			description:
				'Connect with third-party tools',
			href: '#',
			icon: SquaresPlusIcon,
		},
		{
			name: 'Automations',
			description:
				'Build strategic funnels that will convert',
			href: '#',
			icon: ArrowPathIcon,
		},
	];
const callsToAction =
	[
		{
			name: 'Watch demo',
			href: '#',
			icon: PlayCircleIcon,
		},
		{
			name: 'Contact sales',
			href: '#',
			icon: PhoneIcon,
		},
	];

const NavBarDashboard =
	(
		props: any,
	) => {
		// console.log(props.props.session, "Navbar session")

		return (
			<nav
				id='dashboard-navbar'
				className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 light:bg-gray-800 light:border-gray-700'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start'>
							<a
								href='https://flowbite.com'
								className='flex ml-2 md:mr-24'>
								<Image
									src={
										logoblack
									}
									alt='fabbric-logo'
									width={
										100
									}
								/>
							</a>
						</div>
						{props
							.props
							.session !=
							null && (
							<div className='flex items-center'>
								<div className='flex items-center ml-3'>
									<div>
										<Popover className='relative profile-popover'>
											<Popover.Button className='flex items-center'>
												<svg
													className='w-6 h-6 text-gray-800 dark:text-white'
													aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 14 18'
													style={{
														color: '#7745FF',
														height: '15px',
														marginRight:
															'5px',
													}}>
													<path
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z'
													/>
												</svg>
											</Popover.Button>

											<Transition
												as={
													Fragment
												}
												enter='transition ease-out duration-200'
												enterFrom='opacity-0 translate-y-1'
												enterTo='opacity-100 translate-y-0'
												leave='transition ease-in duration-150'
												leaveFrom='opacity-100 translate-y-0'
												leaveTo='opacity-0 translate-y-1'>
												<Popover.Panel className='absolute right-0 z-10 mt-5 flex w-screen max-w-max px-4'>
													<div className='w-screen max-w-xs flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg'>
														<div className=''>
															<div className='flex justify-end items-center popover-header p-4'>
																<div className='pr-4'>
																	{props
																		.props
																		.session
																		.user
																		.first_name +
																		' ' +
																		props
																			.props
																			.session
																			.user
																			.last_name}
																</div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	className='w-6 h-6'
																	style={{
																		width: '20px',
																	}}>
																	<path
																		fillRule='evenodd'
																		d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
																		clipRule='evenodd'
																	/>
																</svg>
															</div>
															<ul>
																<li className='link-item px-4 py-2'>
																	<Link href='/account/profile'>
																		My
																		Profile
																	</Link>
																</li>
																<li className='link-item px-4 py-2'>
																	My
																	Plans
																</li>
																<li className='link-item px-4 py-2'>
																	<a
																		href='/api/auth/signout'
																		style={{
																			display: 'block',
																		}}>
																		Log
																		Out
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</Popover>
									</div>
									<div>
										<svg
											className='w-6 h-6 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 16 21'
											style={{
												color: '#7745FF',
												height: '15px',
												marginRight:
													'5px',
											}}>
											<path
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z'
											/>
										</svg>
									</div>
									<div>
										<svg
											className='w-6 h-6 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 18 20'
											style={{
												color: '#7745FF',
												height: '15px',
											}}>
											<path
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z'
											/>
										</svg>
									</div>
									<div>
										<button
											type='button'
											className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 light:focus:ring-gray-600'
											aria-expanded='false'
											data-dropdown-toggle='dropdown-user'>
											<span className='sr-only'>
												Open
												user
												menu
											</span>
											{/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"> */}
										</button>
									</div>
									<div
										className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow light:bg-gray-700 light:divide-gray-600'
										id='dropdown-user'>
										<div
											className='px-4 py-3'
											role='none'>
											<p
												className='text-sm text-gray-900 light:text-white'
												role='none'>
												Neil
												Sims
											</p>
											<p
												className='text-sm font-medium text-gray-900 truncate light:text-gray-300'
												role='none'>
												neil.sims@flowbite.com
											</p>
										</div>
										<ul
											className='py-1'
											role='none'>
											<Links>
												<Link href='/fabbric'>
													EDITOR
												</Link>
											</Links>

											<Links>
												<Link href='/onboarding'>
													LOGIN
												</Link>
											</Links>

											<Links>
												<Link href='/onboarding/register'>
													REGISTER
												</Link>
											</Links>

											<Links>
												<Link href='/fabbric'>
													HOME
												</Link>
											</Links>
										</ul>
									</div>
								</div>

								<button
									data-drawer-target='logo-sidebar'
									data-drawer-toggle='logo-sidebar'
									aria-controls='logo-sidebar'
									type='button'
									className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600'>
									<span className='sr-only'>
										Open
										sidebar
									</span>
									<svg
										className='w-6 h-6'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											clipRule='evenodd'
											fillRule='evenodd'
											d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
									</svg>
								</button>
							</div>
						)}
					</div>
				</div>
			</nav>
		);
	};

export default NavBarDashboard;
