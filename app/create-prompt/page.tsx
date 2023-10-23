'use client';

import Form from '@components/form';
import { IPrompt } from '@models/prompt';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useCallback, useState } from "react";

const CreatePrompt: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const [post, setPost] = useState<IPrompt>({
    _id: '',
    creator: {
      _id: '',
      email: session?.user?.email ? session?.user?.email : '',
      username: session?.user?.name ? session?.user?.name : '',
      image: session?.user?.image ? session?.user?.image : '/assets/pictures/logo.svg'
    },
    prompt: '',
    tag: ''
  });
  const router = useRouter();
  console.log(JSON.stringify({
    prompt: post?.prompt,
    userId: session?.user?.id,
    tag: post?.tag,
  }))

  const createPrompt = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        '/api/prompt/new',
        {
          method: 'POST',
          body: JSON.stringify({
            prompt: post?.prompt,
            userId: session?.user?.id,
            tag: post?.tag,
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
  }, [post, session, router])

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