import path from 'path';
import fs from 'fs/promises';

import { FileInfo } from './dir-scanner.interfaces';

export default class DirScanner {
  async scan(path: string): Promise<FileInfo[]> {
    console.info(`Scanning path: ${path}`);

    const result = await this.readDir(path);

    console.info(`Scanning completed. Files scanned: ${result.length}`);

    return result;
  }

  private async readDir(dirPath: string): Promise<FileInfo[]> {
    const dirents = await fs.readdir(dirPath, { withFileTypes: true });

    const promises = dirents.map((dirent): Promise<FileInfo[] | FileInfo> => {
      const fullPath = path.resolve(dirPath, dirent.name);

      if (dirent.isDirectory()) {
        // Recursively scan directory
        return this.readDir(fullPath);
      }

      if (dirent.isFile()) {
        return this.getFileStats(fullPath);
      }

      // Ignore dirent if it is not a directory or a file
      return Promise.resolve([]);
    });

    // Scan files asynchronously to avoid blocking Event Loop
    const files = await Promise.all(promises);

    // In the task description it is not clearly stated how response should look like. I used flat structure
    // Another way to do it is tree structure, which could be implemented using an object
    return Array.prototype.concat(...files);
  }

  private async getFileStats(fullPath: string): Promise<FileInfo> {
    const stats = await fs.stat(fullPath);

    return {
      ...stats,
      fullPath,
    };
  }
}
