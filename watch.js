import { watch } from 'rolldown';

const watcher = await watch({ input: "main.js" });
watcher.on('event', (ev) => {
  console.log(ev.code);
});
