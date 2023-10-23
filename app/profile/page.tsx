"use client";

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Profile from '@components/profile';
import { IPrompt } from '@models/prompt';

const MyProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [posts, setPosts] = useState<IPrompt[]>([]);
  const { data: session } = useSession();
  const handleEdit = useCallback((promptId: string) => {

  }, []);
  const handleDelete = useCallback(async (promptId: string) => {

  }, [])

  useEffect(() => {
    const fetchPrompts = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const posts: IPrompt[] = await response
        .json()
        .catch(err => {
          setIsLoading(false)
          console.warn(err);
        })
        .finally(() => setIsLoading(false));

      setPosts(posts);
    }

    if (session?.user.id) fetchPrompts();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personlized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile;