import users from '../mocks/user.mock.ts';
import { CreateUser, UpdateUser ,User } from '../types/user.type.ts';

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
    id : number,
    {name, email, password}: UpdateUser
 ) {
   const user = findUserById(id);
   
    if (name !== undefined && '') users.name = name;
    if (email !== undefined && '') users.email = name;
    if (password !== undefined && '') users.password = name; 
}

export function removeUser(id: number) {
    findUserById(id);


    for (let i = 0; i < users.length ; i++) {
        if (id === users[i].id) users.slice(i, 1);
        
    }
}


   
