import 'dotenv/config';
import { App } from './app';

const PORT = process.env.API_PORT;

new App().start(PORT);
