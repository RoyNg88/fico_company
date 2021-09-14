import React from 'react';
import './user.css';

const UserApprove = props => {
  return (
    <section>
      <h2>Loaded User/Admin List</h2>
      <table id="customers">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>
          {props.users.map((p) => (       
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.dob}</td>
              {!p.isAdmin &&
              <td> Free Member</td>}
              {p.isAdmin &&
              <td> Administrator</td>}
               
              <td><button onClick={props.onApprove.bind(this, p.id)}>Approve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserApprove;