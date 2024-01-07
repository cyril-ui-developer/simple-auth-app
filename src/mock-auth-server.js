export const users = [
    {
      id: '1',
      email: 'john.thomas@test.com',
      firstName: 'John',
      lastName: 'Thomas',
      status: 'Active',
    },
    {
        id: '2',
        email: 'rebecca.grace@test.com',
        firstName: 'Rebecca',
        lastName: 'Grace',
        status: 'In-active',
      },
      {
          id: '3',
          email: 'peter.dan@test.com',
          firstName: 'Peter',
          lastName: 'Dan',
          status: 'Active',
        },
]
  

export const mockAuth = {
  getUsers() {
    return users;
  },
  login(email) {
    const user = users.find((u) => u.email === email);

    return user;
  },
  getUser(id) {
    const user = users.find((user) => user.id === id);
    return user;
  },
};

// function getUser(username) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       const user = users.find((u) => u.email === username);
//       console.log("user test", user)
//       if (user) return resolve(user);
//       return reject("Error: The user do not exist");
//     }, 1)
//   );
// }

// function getUsers() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (users.length > 0) return resolve(users);
//       return reject("Error: Failed to fetch users");
//     }, 1000)
//   );
// }

//export { getUser, getUsers};