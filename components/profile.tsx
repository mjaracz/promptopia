import PromptCardList from '@components/prompt-card-list';
import { IPrompt } from '@models/prompt';
import { FC } from 'react';

interface PropsProfile {
  name: string;
  desc: string;
  data: IPrompt[];
  isLoading: boolean;
  isException: boolean;
}

const Profile: FC<PropsProfile> = ({ name, desc, data, isException, isLoading }) => {
  console.log(name);

  return (
    <section className='w-full max-w-full flex-start flex-col cursor-default'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>{name}</span>
      </h1>
      <p className='desc text-left max-w-md blue_gradient'>
        {desc}
      </p>

      <PromptCardList
        data={data}
        isException={isException}
        isLoading={isLoading}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Profile