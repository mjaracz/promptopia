import { PromptService } from "./prompt.service";

export const GET = async () => {
  try {
    const promptsList = await PromptService.getPromptsList();
    return new Response(JSON.stringify(promptsList), { status: 200 })    
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}