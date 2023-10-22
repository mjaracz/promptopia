'use client';

import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { Post } from './form';
import PromptCardList from './prompt-card-list';



const Feed: FC = () => {
  const [searchText, setSearchText] = useState<string>();
  const [promptsList, setPromptsList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

  }, [])


  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/prompt');
        const posts = await response.json().finally(() => setIsLoading(false));
        
        setPromptsList(posts);
      }
      catch (err) {
        setIsLoading(false)
        console.warn(err);
      }
    }

    fetchPrompts();
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
        handleTagClick={() => {}} 
      />
    </section>
  )
}

export default Feed