'use client';

import Profile from '@components/profile';
import { useUserPosts } from '@utils/hooks/use-user-posts';

const MyProfile = () => {
  const { isLoading, promptsList, isException } = useUserPosts();

  return (
    <Profile
      name="My profile"
      desc="Welcome to your personalized profile page"
      data={promptsList}
      isLoading={isLoading}
      isException={isException}
    />
  )

}

export default MyProfile;