import Image from 'next/image';
import { FC } from 'react';

interface PropsPromptCard {
  isCardPulse?: boolean;
  prompt?: string;
  tag?: string;
}

const PromptCard: FC<PropsPromptCard> = ({ isCardPulse, prompt }) => {
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
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="user_image"
          />
        </div>
      </div>
    </div>
  )
}

export default PromptCard