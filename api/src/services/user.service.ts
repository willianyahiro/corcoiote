import users from '../mocks/user.mock.ts';
import type { CreateUser, UpdateUser, User } from '../types/user.type.ts';

export function findAllUsers() {
  return users;
}

export function findUserById(id: number) {
  const user = users.find(user => user.id === id);

  if (!user)
    throw new Error(`Usuário de id ${id} não encontrado.`);

  return user;
}

export function insertUser({ name, email, password }: CreateUser) {
  const id = users[users.length - 1].id + 1;

  const user: User = {
    id,
    name,
    email,
    password
  };

  users[users.length] = user;

  return user;
}

export function modifyUser(
  id: number,
  { name, email, password }: UpdateUser
) {
  const user = findUserById(id);

  if (name !== undefined && name !== '') user.name = name;
  if (email !== undefined && email !== '') user.email = email;
  if (password !== undefined && password !== '') user.password = password;

  return user;
}

export function removeProduct(id: number) {
  findUserById(id);

  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) users.slice(i, 1);
  } 
}

export function modifyPro(
  id: number,
  { name, email, password }: UpdateUser
) {
  const user = findUserById(id);

  if (name !== undefined && name !== '') user.name = name;
  if (email !== undefined && email !== '') user.email = email;
  if (password !== undefined && password !== '') user.password = password;

  return user;
}

export function removeUser(id: number) {
  findUserById(id);

  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) users.slice(i, 1);
  } 
}