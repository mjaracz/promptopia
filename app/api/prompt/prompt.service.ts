import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export class PromptService {
  static async createPrompt(creatorId: string, prompt: string, tag: string) {
    try {
      await connectToDb();
      const newPrompt = new Prompt({
        creator: creatorId,
        prompt,
        tag,
      })
      await newPrompt.save();
      return newPrompt;
    } 
    catch (err) {
      console.warn(err);
      throw err;
    }
  }

  static async getPromptsList() {
    try {
      await connectToDb();
      const promptsDataList = await Prompt.find({}).populate('creator');

      return promptsDataList;
    }
    catch (err) {
      console.warn(err)
      throw err;
    }
  }
}