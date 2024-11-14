import { watch } from 'rolldown';
import config from './config.js';

const watcher = await watch(config);
watcher.on('event', (ev) => {
  console.log(ev.code);
});
