import React from 'react';
import {Button} from 'react-bootstrap';
import './user.css';

const UserApprove = props => {
  return (
    <section>
      <h2>Approve Admin authorization</h2>
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
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.dob}</td>
              {!p.isAdmin &&
              <td> Free Member</td>}
              {p.isAdmin &&
              <td> Administrator</td>}
               {!p.isAdmin &&
              <td><Button variant="warning" onClick={props.onApprove.bind(this, p._id)} onChange={p=> p.isAdmin}>Approve</Button></td>}
              {p.isAdmin &&
              <td><Button variant="dark" onClick={props.onApprove.bind(this, p._id)} onChange={p=> p.isAdmin}>Reject</Button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserApprove;