import PromptCard from "@components/prompt-card";
import { IPrompt } from "@models/prompt";
import { FC, MouseEvent } from "react";

interface PropsPromptCardList {
  data: IPrompt[];
  handleTagClick: (e: MouseEvent) => void;
  isLoading: boolean;
  isException: boolean;
}

const PromptCardList: FC<PropsPromptCardList> = ({ data, handleTagClick, isLoading, isException }) => {
  return (
    <div className="w-full flex-center flex-col">
      {isLoading || isException || !data.length
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
            prompt={post}
          />
        ))
      }
    </div>
  )
}

export default PromptCardList;
