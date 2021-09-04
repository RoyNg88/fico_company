import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class UserComment extends Component{
        render(){
            return(

                <div id = "content_cmt">
                    <div className="avatar_css">
                    <img className="avatar_user" src="https://znews-photo.zadn.vn/w660/Uploaded/ngogtn/2021_04_25/avatar_movie_Cropped.jpg" >
                    </img>
                    </div>
                    <div className="username_css">
                    <p>Andrei Bui</p>
                    </div>
                    <div className="date_css">
                        <p>Tue, 22 May 2020</p>
                    </div>
                    <div className="cmt_css">
                        <p>Inspired by functional drinks from the Far East, Dietrich Mateschitz founded Red Bull in the mid-1980s. He developed not only a new product but also a unique marketing concept and launched Red Bull Energy Drink in Austria on April 1, 1987. A completely new product category was born</p>
                        <div className="btn_edit">
                        <Button className="btn_css" variant="primary">👍 856K</Button>
                        <Button className="btn_css" variant="primary">👎 156K</Button>
                        </div>
                    </div>
                </div>
            );

        }

}

export default UserComment;