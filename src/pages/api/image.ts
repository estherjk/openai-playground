// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Extend `NextApiRequest` to specify request body types
// See: https://stackoverflow.com/a/69895731
interface Request extends NextApiRequest {
  body: {
    text: string;
  };
}

// Response data: just grab the result for now
type Data = {
  result?: string;
};

export default async function handler(req: Request, res: NextApiResponse<Data>) {
  const completion = await openai.createImage({
    prompt: req.body.text,
    n: 1,
    size: '1024x1024',
  });

  res.status(200).json({ result: completion.data.data[0].url });
}
