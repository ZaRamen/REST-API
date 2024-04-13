import { v4 as uuidv4} from 'uuid';

export const getUser = (req, res) => {
    res.send(users);
}
export const getUsersFromID = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}
export const updateUser = (req, res) => {
  const {id} = req.params;
  const {firstName, lastName, email, password} = req.body;
  const user = users.find((user) => user.id === id);

  if (id) user.id = id;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;
  if (password) user.password = password;

  res.send(`User with id ${id} updated in the database`);
}
export const deleteUser = (req, res) => {
  const {id} = req.params;
  // if it's equal to the id then the user is removed from the database
  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} deleted from the database`);
}
export const createUser = (req, res) => {
  const user = req.body;
  const userID = uuidv4();

  const userWithID = {...user, id: userID}
  users.push(userWithID)
  res.send(`User with name ${user.firstName} added to the database`);
}