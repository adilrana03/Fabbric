'use client';
import React, {
	useState,
} from 'react';
import {
	sidebarLinkStyle,
	sidebarSubLinkStyle,
} from './sidebar.styles';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

const SidebarAccount =
	() => {
		const pathname =
			usePathname();
		console.log(
			pathname,
		);

		return (
			<aside
				id='dashboard-sidebar'
				className='fixed top-0 left-0 z-40 w-64 h-screen pt-11 transition-transform -translate-x-full bg-white sm:translate-x-0'
				aria-label='Sidebar'>
				<div
					className='h-full pt-8 pb-4 overflow-y-auto bg-white light:bg-gray-800'
					style={{
						borderLeft:
							'1px solid #7745FF',
						borderRight:
							'1px solid #7745FF',
						margin: '0 0 0 1.25rem',
					}}>
					<>
						<ul className='space-y-0 font-medium'>
							<li>
								<Link
									href='/account/profile'
									className={`flex items-center text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink p-5 ${
										pathname ==
										'/account/profile'
											? 'active'
											: ''
									}`}
									style={
										sidebarLinkStyle
									}>
									<span className='uppercase'>
										Profile
									</span>
								</Link>
							</li>
							<li>
								<Link
									href='/account/myplans'
									className={`flex items-center text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink ${
										pathname ==
										'/account/myplans'
											? 'active'
											: ''
									} p-5`}
									style={
										sidebarLinkStyle
									}>
									<span className='uppercase'>
										My
										Plans
									</span>
								</Link>
							</li>
						</ul>
					</>
				</div>
			</aside>
		);
	};

export default SidebarAccount;
