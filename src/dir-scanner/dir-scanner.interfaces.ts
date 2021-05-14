import type fs from 'fs';

export interface FileInfo extends fs.Stats {
  fullPath: string;
}
