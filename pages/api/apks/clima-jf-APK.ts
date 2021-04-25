import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
import fs from 'fs'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(__dirname,'apks','clima-jf-APK.apk')
  res.setHeader('accept-ranges','bytes')
  res.setHeader('content-disposition','attachment; filename=clima-jf-APK.apk')
  res.setHeader('content-type','application/vnd.android.package-archive')
  res.send(fs.readFileSync(filePath,null))
}
