import {DefaultCrudRepository} from '@loopback/repository';
import {Todo} from '../models';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: any) {
    super(Todo, datasource);
  }
}
