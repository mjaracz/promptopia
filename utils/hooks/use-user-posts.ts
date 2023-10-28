import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { IPrompt } from "@models/prompt";

export const useUserPosts = () => {
  const [promptsList, setPromptsList] = useState<IPrompt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isException, setIsException] = useState(false);
  const { data: session } = useSession();


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

    if (session?.user?.name) fetchPrompts();
    else setIsException(true);
  }, [session]);

  return {
    promptsList,
    isLoading,
    isException,
    session,
  }
}