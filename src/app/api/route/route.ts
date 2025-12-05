import { Data1,Data2 } from "@/Data/data";
export async function GET() {
  const images = Data2;
  return new Response(JSON.stringify(images));
}