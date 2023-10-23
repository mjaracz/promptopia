import { IPrompt } from '@models/prompt';
import { FC } from 'react'

interface PropsProfile {
  name: string;
  desc: string;
  data: IPrompt[];
  handleEdit: (promptId: string) => void;
  handleDelete: (promptId: string) => void;
}

const Profile: FC<PropsProfile> = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile