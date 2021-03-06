import {TodoListApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TodoListApplication};

export async function main(options?: ApplicationConfig) {
  const app = new TodoListApplication(options);
  await app.boot();
  await app.start();
  return app;
}
