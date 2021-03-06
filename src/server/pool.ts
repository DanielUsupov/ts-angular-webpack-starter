import { readFileSync } from 'fs'
import { Pool } from 'pg'

const { db } = JSON.parse(readFileSync(`${__dirname}/../../config/default.json`, 'utf8'))

export const pool = new Pool({ connectionString: db })
