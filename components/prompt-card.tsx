'use client';

import Image from 'next/image';
import { IPrompt } from '@models/prompt';
import { FC, useCallback, useState } from 'react';

interface PropsPromptCard {
  isCardPulse?: boolean;
  prompt?: IPrompt;
  handleTagClick?: (tagName?: string) => void;
}

const PromptCard: FC<PropsPromptCard> = ({ isCardPulse, prompt, handleTagClick }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = useCallback(() => {
    if (prompt?.prompt) {
      setCopied(prompt.prompt);
      navigator.clipboard.writeText(prompt.prompt);
      setTimeout(() => setCopied(""), 3000);
    }
  }, [prompt])

  return isCardPulse ? (
    <div className='border border-grey-800 shadow rounded-md p-6 max-w-sm w-full mx-auto mt-10'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-slate-700 h-10 w-10'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 bg-slate-700 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-700 rounded col-span-2'></div>
              <div className='h-2 bg-slate-700 rounded col-span-1'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="prompt_card my-5">
      <div className="flex justify-between items-start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src="/assets/images/logo.svg"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 text-base text-left">{prompt?.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500 text-left">{prompt?.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === prompt?.prompt
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
            alt='copy'
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-grey-700 text-left">{prompt?.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer text-left"
        onClick={() => handleTagClick && handleTagClick(prompt?.tag)}
      >
        {prompt?.tag}
      </p>
    </div>
  )
}

export default PromptCard