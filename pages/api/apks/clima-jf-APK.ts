import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
import fs from 'fs'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(process.cwd(),'apks','clima-jf-APK.zip')
  res.setHeader('accept-ranges','bytes')
  res.setHeader('content-disposition','attachment; filename=clima-jf-APK.zip')
  res.setHeader('content-type','application/zip')
  res.send(fs.readFileSync(filePath,null))
}
