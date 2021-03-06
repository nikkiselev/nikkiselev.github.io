import sitemap from '../../js/sitemap'
import { NextApiResponse, NextApiRequest } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/xml')

  try {
    res.write(await sitemap(req.headers.host))
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}
