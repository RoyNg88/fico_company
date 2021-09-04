import React, { Component } from 'react';


class UserNameAvatar extends Component{
        render(){
            return(
                <div id = "UserNameAvatar">
                  <div className ="userName">
                   <p>UserName</p>
                   </div>
                   <div className = "avatar_css">
                       <img className ="userAvatar" src="https://znews-photo.zadn.vn/w660/Uploaded/ngogtn/2021_04_25/avatar_movie_Cropped.jpg" ></img>
                   </div>

                </div>
                
            );

        }

}

export default UserNameAvatar;