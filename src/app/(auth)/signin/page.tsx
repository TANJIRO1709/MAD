"use client";
import SignupFormDemo from '@/app/components/signin';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getLoggedInUser } from '@/lib/server/users.actions';

const SignIn = () => {
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
      <SignupFormDemo />
    </>
  );
};

export default SignIn;
