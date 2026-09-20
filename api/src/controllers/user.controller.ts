import type { Request, Response } from 'express';
import {
  findAllUsers,
  findUserById,
  insertUser,
  modifyUser
} from '../services/user.service.ts';
import type { CreateUser } from '../types/user.type.ts';

export function getAllUsers(request: Request, response: Response) {
  const users = findAllUsers();

  response.status(200).json(users);
}

export function getUserById(request: Request, response: Response) {
  const id = request.params.id;

  const user = findUserById(Number(id));

  response.status(200).json(user);
}

export function createUser(request: Request, response: Response) {
  const { name, email, password } = request.body as CreateUser;

  insertUser({ name, email, password });
}

export function UpdateUser(request: Request, response: Response)  {
  const id = +request.params.id
  const data = request.body as UpdateUser;

  const user = modifyUser(id , data); 

  response.status(200).json(user);
}

export function deleteUsers(request: Request, response: Response) {
  const id = +request.params.id;

  removeUser(id);

  response.status(204).send();
}