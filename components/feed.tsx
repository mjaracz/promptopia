'use client';

import { ChangeEvent, FC, useCallback, useState } from 'react';

import PromptCardList from './prompt-card-list';
import { useUserPosts } from '@utils/hooks/use-user-posts';


const Feed: FC = () => {
  const [searchText, setSearchText] = useState<string>();
  const { isLoading, promptsList, isException } = useUserPosts();

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

  }, [])


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

export default Feed;
