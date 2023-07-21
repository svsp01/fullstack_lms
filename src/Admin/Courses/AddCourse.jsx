import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AddCourse = () => {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState('');
  const [userName, setUserName] = useState('');
  const [courseName, setCourseName] = useState('');

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
    const newName = prompt('Enter Class:');
    if (newName !== null) {
      const updatedUsers = [...users];
      if (newName !== '') {
        updatedUsers[index].name = newName;
      }
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
    }
    const newCourseName = prompt('Enter new course name:');
    if (newCourseName !== null) {
      const updatedUsers = [...users];
      if (newCourseName !== '') {
        updatedUsers[index].courseName = newCourseName;
      }
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
    }
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const user = {
      id: parseInt(userID),
      name: userName,
      courseName: courseName,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);

    // Clear input values
    setUserID('');
    setUserName('');
    setCourseName('');
  };

  return (
    <div>
      <div className="container mx-auto">
        <form onSubmit={handleAddUser} >
          <div className='d-flex justify-content-center mb-5 pb-5'>
          <TextField
            label="S.No"
            variant="outlined"
            className='me-4'
            type="number"
            placeholder="Enter S.No"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />

          <TextField
            label="Class"
            variant="outlined"
            className='me-4'
            type="text"
            placeholder="Class"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <TextField
            label="Course Name"
            variant="outlined"
            className='me-4'
            type="text"
            placeholder="Enter Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />

          <Button variant="outlined" type="submit">
            Add
          </Button>
          </div>
        </form>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {users.map((user, index) => (
            <Card key={index} sx={{ width: 300, margin: '10px' }}>
              <CardContent>
                <Typography variant="h6" component="div" >
                  S.No: {user.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  New Name: {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Course Name: {user.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {user.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Time: {user.time}
                </Typography>
                <Button variant="outlined" onClick={() => handleEditUser(index)}>
                  Edit
                </Button>
                <Button variant="outlined" onClick={() => handleDeleteUser(index)}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default AddCourse;