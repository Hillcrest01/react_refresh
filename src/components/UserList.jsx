import React from "react";


//Practice on Map Function
const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 20,
    },
    {
      id: 3,
      name: "Charlie",
      age: 15,
    },
  ];
  return <div>
    { users.map(({id, name, age}) =>(
        <ul key={id}>
            <li>Name: {name}</li>
            <li>Age: {age} </li>
            <li>Id: {id} </li>
        </ul>
    )) }
  </div>;
};

export default UserList;
