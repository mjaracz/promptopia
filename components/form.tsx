import Link from "next/link";
import { IPrompt } from "@models/prompt";
import { FC, FormEventHandler } from "react";


interface PropsForm {
  type: string;
  post: IPrompt;
  setPost: (post: IPrompt) => void;
  submitting: boolean;
  handleSubmit: FormEventHandler;
}


const Form: FC<PropsForm> = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col cursor-default">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world,
        and let yout imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your AI Prompt
          </span>

          <textarea
            required
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className="form_textarea"
          >

          </textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Tag {` `}
            <span className="font-normal">(#product, #webdevelopment, #idea)</span>
          </span>

          <input
            required
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
          />

          <div className="flex-end mx-3 gap-4 mt-6">
            <Link href='/' className='text-gray-500 text-sm'>
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>

          </div>

        </label>
      </form>
    </section>
  )
}

export default Form