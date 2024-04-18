import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
  SERVER_PORT: env.get('SERVER_PORT').required().asPortNumber(),
  PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString()
}