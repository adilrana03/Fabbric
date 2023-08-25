import React, { useState, useEffect } from 'react';

import { getCurrentUser } from "@/services/user"
import UserProfile from '@/components/user/UserProfile';
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";


async function  Profile() {

    const session = await getServerSession(options)

    return (
        <>
            <UserProfile session={session} />
        </>

    );
}



export default Profile;