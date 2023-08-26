import React, {
	useState,
	useEffect,
} from 'react';

import {getCurrentUser} from '@/services/user';
import UserProfile from '@/components/user/UserProfile';
import {getServerSession} from 'next-auth/next';
import {options} from '@/lib/auth';

async function MyPlans() {
	// const session =
	// 	await getServerSession(
	// 		options,
	// 	);

	return (
		<div className='text-center bg-red-400'>
			<h1>My Plans</h1>
		</div>
	);
}

export default MyPlans;
