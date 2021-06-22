import ENVConfig from 'dotenv'
ENVConfig.config();

export const PORT: number = Number(process.env.PORT) ?? 5000
export const ENV: string = process.env.ENV ?? 'prod';
export const HOST: string = process.env.HOST ?? '0.0.0.0';