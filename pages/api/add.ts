// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { url } = req.body;
  const id = Math.random().toString(36).substr(2, 6);

  try {
    await prisma.link.create({
      data: {
        url,
        linkId: id
      }
    })
    res.status(201).json(id);

  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }


}
