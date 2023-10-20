import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database"

export const GET = async () => {
  try {
    await connectToDb();
    const promptsDataList = await Prompt.find({});

    return new Response(JSON.stringify(promptsDataList), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}