export const createChunk = (file: File, size = 2 * 1024 * 1024) => {
  const chunkList = [];
  let cur = 0;
  while (cur < file.size) {
    chunkList.push({
      file: file.slice(cur, cur + size)
    });
    cur += size;
  }

  return chunkList;
}