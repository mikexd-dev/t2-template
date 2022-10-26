// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export function getData() {
  return { name: 'John Doe' }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getData()
  res.status(200).json(data)
}
