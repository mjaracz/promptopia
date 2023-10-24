import Prompt from "@models/prompt";
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

  static async getPromptsByUserId(userId: string) {
    await connectToDb();
    const userPromptsList = await Prompt.find({ creator: userId }).exec();
    if (!userPromptsList.length) throw new Error('prompts not exisit for provide userId');

    return userPromptsList;
  }
}