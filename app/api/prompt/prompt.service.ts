import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDb } from "@utils/database";

export class PromptService {
  static async createPrompt(creatorId: string, prompt: string, tag: string) {
    await connectToDb();
    const newPrompt = new Prompt({
      creator: creatorId,
      prompt,
      tag,
    })
    await newPrompt.save();
    return newPrompt;
  }

  static async getPromptsList() {
    await connectToDb();
    const promptsDataList = await Prompt.find({}).populate('creator');

    return promptsDataList;
  }

  static async getPromptsByUserId(username: string | null): Promise<typeof Prompt[]> {
    if (!username) throw new Error('username url query is required');
    await connectToDb();
    const userCreator = await User.findOne({ username })
    const userPromptsList = await Prompt.find({ creator: userCreator._id.toString() }).exec();
    if (!userPromptsList.length) throw new Error('prompts not exisit for provide userId');

    return userPromptsList;
  }
}