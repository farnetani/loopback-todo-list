import { repository } from '@loopback/repository';
import { TodoRepository } from '../repositories';
import { Todo } from '../models';
import {
  HttpErrors,
  post,
  param,
  requestBody,
  get,
  put,
  patch,
  del,
} from '@loopback/rest';

export class TodoController {
  constructor(
    @repository(TodoRepository) protected todoRepo: TodoRepository,
  ) { }

  @post('/todos')
  async createTodo(@requestBody() todo: Todo) {
    if (!todo.title) {
      throw new HttpErrors.BadRequest('title is required');
    }
    return await this.todoRepo.create(todo);
  }

  @get('/todos/{id}')
  async findTodoById(@param.path.number('id') id: number): Promise<Todo> {
    return await this.todoRepo.findById(id);
  }

  @get('/todos')
  async findTodos(): Promise<Todo[]> {
    return await this.todoRepo.find();
  }

  @put('/todos/{id}')
  async replaceTodo(
    @param.path.number('id') id: number,
    @requestBody() todo: Todo,
  ): Promise<boolean> {
    // REST adapter does not coerce parameter values coming from string sources
    // like path & query, so we cast the value to a number ourselves.
    id = +id;
    return await this.todoRepo.replaceById(id, todo);
  }

  @patch('/todos/{id}')
  async updateTodo(
    @param.path.number('id') id: number,
    @requestBody() todo: Todo,
  ): Promise<boolean> {
    id = +id;
    return await this.todoRepo.updateById(id, todo);
  }

  @del('/todos/{id}')
  async deleteTodo(@param.path.number('id') id: number): Promise<boolean> {
    return await this.todoRepo.deleteById(id);
  }
}