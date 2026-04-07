import sharp from 'sharp';
import { readdir, rename, unlink } from 'fs/promises';
import { join } from 'path';

const dir = './public';
const files = await readdir(dir);

for (const file of files) {
  if (!file.endsWith('.png')) continue;
  const path = join(dir, file);
  const tmpPath = join(dir, `_tmp_${file}`);
  try {
    await sharp(path)
      .resize(600, null, { withoutEnlargement: true })
      .png({ quality: 70, compressionLevel: 9 })
      .toFile(tmpPath);
    
    await unlink(path);
    await rename(tmpPath, path);
    
    const { stat } = await import('fs/promises');
    const info = await stat(path);
    console.log(`✓ ${file}: compressed to ${Math.round(info.size / 1024)}KB`);
  } catch (e) {
    console.log(`✗ ${file}: ${e.message}`);
    try { await unlink(tmpPath); } catch {}
  }
}
console.log('\nDone!');
