'use client';

import Profile from '@components/profile';
import { useUserPosts } from '@utils/hooks/use-user-posts';
import { useSession } from 'next-auth/react';

const MyProfile = () => {
  const { isLoading, promptsList, isException } = useUserPosts();
  const { data: session } = useSession();

  return (
    <Profile
      name={`Welcome ${session?.user.name}`}
      desc="Welcome to your personalized profile page"
      data={promptsList}
      isLoading={isLoading}
      isException={isException}
    />
  )

}

export default MyProfile;