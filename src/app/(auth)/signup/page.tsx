"use client";
import SignupFormDemo from '@/app/components/signup'
import { getLoggedInUser } from '@/lib/server/users.actions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const SignupPage = async () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      // Fetch the user data on the client side
      const user = await getLoggedInUser();
      
      if (user) {
        router.push('/homepage');
      }
    };

    checkUser();
  }, [router]);
  return (
    <>
    <SignupFormDemo/>
    </>
  )
}

export default SignupPage
