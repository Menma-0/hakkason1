import { defineEventHandler, readMultipartFormData } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  // multipart/form-dataを解析
  const formData = await readMultipartFormData(event);

  if (!formData) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No files uploaded',
    });
  }

  // `static`ディレクトリのパスを取得
  const staticDir = path.resolve('public');

  // ファイルを保存
  for (const file of formData) {
    const filePath = path.join(staticDir, file.filename);
    await fs.writeFile(filePath, file.data);
  }

  return {
    success: true,
    path: '/' + formData[0].filename, // 最初のファイルのパスを返す
  };
});
