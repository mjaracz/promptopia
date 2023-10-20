'use client';

import { useState, useEffect, FC, useCallback, ChangeEvent } from 'react';
import { Post } from './form';
import PromptCardList from './prompt-card-list';



const Feed: FC = () => {
  const [searchText, setSearchText] = useState<string>();
  const [promptsList, setPromptsList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

  }, [])

  const getPromps = async () => {
    try {
      setIsLoading(true);

      const responseData: Post[] = await fetch('/api/prompts')
        .then((res) => res.json())
        .finally(() => setIsLoading(false));
      setPromptsList(responseData);
    }
    catch (err) {
      setIsLoading(false)
      console.warn(err);
    }
  }

  useEffect(() => {
    getPromps();
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

      <PromptCardList data={[]} handleTagClick={() => ({})} />
    </section>
  )
}

export default Feed