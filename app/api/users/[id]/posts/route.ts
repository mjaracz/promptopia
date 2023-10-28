import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

interface ResWithParams extends Response {
  params: {
    id: string
  }
}

export const GET = async (request: Request, { params }: ResWithParams) => {
  try {
    await connectToDb();
    const promptsDataList = await Prompt.find({ creator: params.id }).populate('creator');

    return new Response(JSON.stringify(promptsDataList), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}