import env from '@shared/config/env.config';

const USER = env.DB_USER;
const PASSWORD = env.DB_PASSWORD;
const HOST = env.DB_HOST;
const PORT = parseInt(env.DB_PORT, 10);
// const DATABASE = env.DB_DATABASE;
const DATABASE = 'admin';

const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

export default URI;
