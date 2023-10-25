import { PromptService } from "./prompt.service";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const promptsList = await PromptService.getPromptsByUserId(username);
    return new Response(JSON.stringify(promptsList), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: (err as Error).message }), { status: 400 });
  }
}