import { defineEventHandler, readMultipartFormData, createError } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  // multipart/form-dataを解析
  const formData = await readMultipartFormData(event);

  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No files uploaded',
    });
  }

  // `public`ディレクトリのパスを取得
  const staticDir = path.resolve('public');

  const savedFiles = [];

  // ファイルを保存
  for (const file of formData) {
    if (!file.filename) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ファイル名がありません',
      });
    }

    const filePath = path.join(staticDir, file.filename);
    await fs.writeFile(filePath, file.data);
    savedFiles.push(file.filename);
  }

  return {
    success: true,
    files: savedFiles,
  };
});
