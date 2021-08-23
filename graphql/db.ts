import path from 'path'
import {Database} from 'sqlite3'

class AsyncDatabase {
  db: Database;

  constructor(filename: string) {
    this.db = new Database(filename)
  }

  async getOne<T = any>(sql: string, params: any[] = []): Promise<T | undefined> {
    const rows = await this.getAll(sql, params);
    return rows[0];
  }

  async getAll<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(sql)
      stmt.all(...params, (err: Error | undefined, rows: any[]) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

export default new AsyncDatabase(path.join(process.cwd(), 'db.sqlite'))

export type FeedRow = {
  title: string;
  body: string;
  img_url: string;
  fellowship: string;
  created_ts: string;
  type: string;
}

export type UserRow = {
  id: number;
  name: string;
  bio: string;
  avatar_url: string;
  fellowship: "founders" | "angels" | "writers";
  created_ts: Date;
  updated_ts: Date;
}

export type ProjectRow = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  created_ts: Date;
  updated_ts: Date;
}

export type UserProjectRow = {
  user_id: number;
  project_id: number;
}
