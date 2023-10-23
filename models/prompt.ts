import { Schema, model, models } from 'mongoose';
import { IUser } from './user';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export interface IPrompt {
  _id: string;
  prompt: string;
  tag: string;
  creator: IUser;
}

export default Prompt;