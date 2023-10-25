'use client';

import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { IPrompt } from '@models/prompt';
import { useSession } from 'next-auth/react';

import PromptCardList from './prompt-card-list';


const Feed: FC = () => {
  const [searchText, setSearchText] = useState<string>();
  const [promptsList, setPromptsList] = useState<IPrompt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isException, setIsException] = useState(false);
  const { data: session } = useSession();

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

  }, [])


  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/prompt?username=${session ? session.user.name : ''}`);
        const posts = await response.json().finally(() => setIsLoading(false));

        setPromptsList(posts);
      }
      catch (err) {
        setIsLoading(false);
        setIsException(true);
      }
    }

    fetchPrompts();
  }, [session]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          required
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <PromptCardList
        isLoading={isLoading}
        data={promptsList}
        isException={isException}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed