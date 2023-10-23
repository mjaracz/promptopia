import { PromptService } from "../prompt.service";

export const POST = async (req: Request) => {
  const { userId, prompt, tag } = await req.json();
  try {
    const createdPrompt = await PromptService.createPrompt(userId, prompt, tag);
    return new Response(JSON.stringify(createdPrompt), { status: 201 })
  }
  catch {
    return new Response('internal erro in backend- creating new Prompt fail', { status: 500 }) 
  }
}