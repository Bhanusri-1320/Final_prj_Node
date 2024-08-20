import { Users } from "../entities/users.entity.js";

async function createUser(user) {
  await Users.create(user).go();
}
async function getUserByuserName(username) {
  return await Users.get({ userName: username }).go();
}

export { createUser, getUserByuserName };
