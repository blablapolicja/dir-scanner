import DirScanner from './dir-scanner';

describe('DirScanner', () => {
  const scanner = new DirScanner();

  test('scan', async () => {
    // I didn't use mocks to simplify the test
    const res = await scanner.scan('./node_modules');

    expect(res).toBeInstanceOf(Array);
    expect(res[0]).toEqual({
      dev: expect.any(Number),
      mode: expect.any(Number),
      nlink: expect.any(Number),
      uid: expect.any(Number),
      gid: expect.any(Number),
      rdev: expect.any(Number),
      blksize: expect.any(Number),
      ino: expect.any(Number),
      size: expect.any(Number),
      blocks: expect.any(Number),
      atimeMs: expect.any(Number),
      mtimeMs: expect.any(Number),
      ctimeMs: expect.any(Number),
      birthtimeMs: expect.any(Number),
      atime: expect.anything(),
      mtime: expect.anything(),
      ctime: expect.anything(),
      birthtime: expect.anything(),
      fullPath: expect.any(String),
    })
  })
});
