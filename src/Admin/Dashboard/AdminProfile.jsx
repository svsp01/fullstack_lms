import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Members = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load existing users from localStorage on component mount
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  const handleEditUser = (index) => {
    const newName = prompt('Enter new name:');
    if (newName !== null) {
      const updatedUsers = [...users];
      if (newName !== '') {
        updatedUsers[index].name = newName;
      }
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
    }
    const newEmail = prompt('Enter new email:');
    if (newEmail !== null) {
      const updatedUsers = [...users];
      if (newEmail !== '') {
        updatedUsers[index].email = newEmail;
      }
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
    }
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const user = {
      id: document.getElementById('User').value.trim(),
      name: document.getElementById('Name').value.trim(),
      email: document.getElementById('Email').value.trim(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);

    // Clear input values
    document.getElementById('User').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleAddUser}>
          <TextField label="User ID" variant="outlined" type="tel" placeholder="Enter User ID" id="User" required />

          <TextField label="User Name" variant="outlined" type="text" placeholder="Enter User Name" id="Name" required />

          <TextField label="Email" variant="outlined" type="email" placeholder="Enter your Email" id="Email" required />

          <Button variant="contained" type="submit">Add</Button>
        </form>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>{user.time}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleEditUser(index)}>Edit</Button>
                  <Button variant="outlined" onClick={() => handleDeleteUser(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Members;