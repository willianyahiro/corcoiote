import type { Request, Response } from 'express';
import {
  findAllUsers,
  findUserById,
  insertUser,
  modifyUser,
  removeUser
} from '../services/user.service.ts';
import type { CreateUser, UpdateUser } from '../types/user.type.ts';

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

  const user = insertUser({ name, email, password });

  response.status(201).json(user);
}

export function updateUser(request: Request, response: Response) {
  const id = +request.params.id;
  const data = request.body as UpdateUser;

  const user = modifyUser(id, data);

  response.status(200).json(user);
}

export function deleteUser(request: Request, response: Response) {
  const id = +request.params.id;

  removeUser(id);

  response.status(204).send();
}