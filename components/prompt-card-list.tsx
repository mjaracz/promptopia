import PromptCard from "@components/prompt-card";
import { FC, MouseEvent } from "react";
import { IPrompt } from "@models/prompt";

interface PropsPromptCardList {
  data: IPrompt[];
  handleTagClick: (e: MouseEvent) => void;
  isLoading: boolean;
  isException: boolean;
}

const PromptCardList: FC<PropsPromptCardList> = ({ data, handleTagClick, isLoading, isException }) => {
  return (
    <div className="w-full flex-center flex-col">
      {isLoading || isException
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
