import * as path from 'path';
import { juggler } from '@loopback/repository';

const dsConfigPath = path.resolve('config', 'datasources.json');
const config = require(dsConfigPath);
export const db = new juggler.DataSource(config);