import { rolldown } from 'rolldown';
import config from './config.js';

const builder = await rolldown(config);
await builder.write(config.output);
