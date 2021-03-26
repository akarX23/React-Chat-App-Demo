let users = [];

const addUser = (id, name, room) => {
  const exisistingUser = users.find(
    (user) => user.name === name && user.room === room
  );

  if (exisistingUser) {
    return { error: "User exists" };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  let removeUser;
  users = users.filter((user) => {
    if (user.id === id) removeUser = user;
    return user.id !== id;
  });

  return removeUser;
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
