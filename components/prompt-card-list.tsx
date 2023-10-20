import { FC, MouseEvent } from "react";
import { Post } from "./form";
import PromptCard from "@components/prompt-card";

interface PropsPromptCardList {
  data: Post[];
  handleTagClick: (e: MouseEvent) => void;
  isLoading: boolean;
}

const PromptCardList: FC<PropsPromptCardList> = ({ data, handleTagClick, isLoading }) => {
  return (
    <div className="">
      <PromptCard isCardPulse={true} prompt="" tag="" />
    </div>
  )
}

export default PromptCardList