import React, {useState, useEffect, useCallback} from 'react';

import { Link } from 'react-router-dom';

import UserApprove from './UserApprove';


function UserList(props) {
    const [userDetail, setUserDetail] = useState([]);
    const [token, setToken] = useState('');
    const [isAdmin, setIsToggled] =useState();
    const toggle = useCallback(() => setIsToggled(!isAdmin));
    const filterUser = useCallback((user) => {
      setUserDetail(user);
    }, []);

    
  //get data from api
  const user = (id) => {
    fetch( `http://localhost:4001/api/user/`
    , {
      method: 'GET',
      headers: {
      }, 
    })   
      .then(response => response.json())
      .then(userDetail => {
            userDetail.filter(user => user.id !== id)
            console.log(userDetail)
            setUserDetail(userDetail)
        }      
        );
  }
  
  //delete data from api
      const Approve = (id) => {
        var message = window.confirm("Do you want to approve this user to admin?");
  
        if (message){
          fetch( `http://localhost:4001/api/user/${id}/status`
          , {
  
            method: 'PUT',
            headers: {
              'x-access-token': token,
            },
          })   
          .then(response => {
            setUserDetail(prevUser => [
          prevUser.filter(user => user._id !== id)
          ]);
        }).then(response => window.location.reload())
      }
    };
      useEffect(() => {
        setToken(sessionStorage.getItem('token'))
        user()
  
      }, []);

    return (
        <div>         
          <UserApprove users={userDetail}
          onApprove={Approve}/> 
        </div>
      );
}

export default UserList;