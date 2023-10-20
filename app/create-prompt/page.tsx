'use client';

import { FormEvent, useState, useCallback, FC } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from '@components/form';

const CreatePrompt: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  const router = useRouter();
  console.log(post);

  const createPrompt = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        '/api/prompt/new',
        {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user?.id,
            tag: post.tag,
          })
        }
      )

      if (response.ok) {
        router.push('/')
      }
    } catch (err) {
      console.warn(err);
    } finally {
      setSubmitting(false);
    }
  }, [post, session, submitting])

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt