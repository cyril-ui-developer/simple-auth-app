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
  login(email) {
    console.log("auth email", email);
    const user = users.find((u) => u.email === email);

    return user;
  },
};