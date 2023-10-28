"use client";

import { FC } from "react";

interface PropsError {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<PropsError> = ({ error, reset }) => {
  return (
    <>
      An error occured: {error.message}
      <button onClick={() => reset()}>Retry</button>
    </>
  )
}

export default Error;