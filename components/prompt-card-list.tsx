import PromptCard from "@components/prompt-card";
import { FC, MouseEvent } from "react";
import { Post } from "./form";

interface PropsPromptCardList {
  data: Post[];
  handleTagClick: (e: MouseEvent) => void;
  isLoading: boolean;
}

const PromptCardList: FC<PropsPromptCardList> = ({ data, handleTagClick, isLoading }) => {
  return (
    <div className="w-full flex-center flex-col">
      {isLoading 
        ? (
          <>
            <PromptCard isCardPulse={true} />
            <PromptCard isCardPulse={true} />
            <PromptCard isCardPulse={true} />
          </>
        )
        : data.map(post => (
            <PromptCard
              key={post._id} 
              prompt={post.prompt} 
              tag={post.tag} 
            />
          ))
      }
    </div>
  )
}

export default PromptCardList