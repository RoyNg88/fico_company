/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-useless-concat */
import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, Link } from 'react-router-dom'
// import Add_co from './Add_course.jsx'
import axios from 'axios';

const url = "http://localhost:4001/api/user"

export default class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            id: '',
            name: '',
            username: '',
            email:'',
            password:'',
            user_Photo: null,
            grid_view: false,
            isAuthenticated: 0,
            token: '',
            norm:true,
            code:true,
            fname:false,
            keyword:''
        }
    }
    fetchData() {
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ user: json }))
    }
    componentDidMount() {
        this.fetchData()
    }
    componentWillMount(){
        this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')}, () => console.log(this.state.isAuthenticated))
        this.setState({token: window.sessionStorage.getItem('token')})
    }
    handleChange(e) {
        e.preventDefault();
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    handleImageChange(event) {
        this.setState({
            Student_Photo: window.URL.createObjectURL(event.target.files[0])
        })

    }
    save(event) {
        event.preventDefault();
        this.setState({ modalIsOpen: false });
        var method = 'POST'
        var formData = new FormData();
        var photo = document.querySelector('#addstudent');
        formData.append('id', this.state.id);
        formData.append('name', this.state.name);
        formData.append('year', this.state.year);
        formData.append('Student_Photo', photo.files[0]);
        axios({
            url: url,
            method: 'POST',
            headers: {
                "Authorization" : `Bearer ${this.state.token}`,
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then(() => {
                alert('create student successfully')
                setTimeout(this.fetchData(), 10000)

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.responderEnd);
                }
            });
    }
    Update() {

        var url = 'http://localhost:4001/api/user' + '/' + this.state.id
        this.setState({ modalIsOpen: false });
        var method = 'POST'
        var formData = new FormData();
        var photo = document.querySelector('#updatestudent');
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('Student_Photo', photo.files[0]);
        axios({
            url: url,
            method: 'PUT',
            headers: {
                "Authorization" : `Bearer ${this.state.token}`,
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then(() => {
                alert('update student successfully')

                setTimeout(this.fetchData(), 10000)

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.responderEnd);
                }
            });
    }
    delete(id) {
        if (window.confirm('Are you sure you want to delete this student ')) {
            fetch(url + "/" + id, {
                headers: {
                    "Authorization" : `Bearer ${this.state.token}`
                },
                method: 'delete',
            }).then(res => res.json())
                .then(json => this.fetchData())
        }
    }
    edit(id) {
        this.setState({ id: id })
    }
    list_view(event) {
        this.setState({ grid_view: false })
    }
    grid_view(event) {
        this.setState({ grid_view: true })
        console.log('it worked')
    }
    Searchresult(e){
        e.preventDefault();
        this.state.keyword = this.state.keyword.toLowerCase();
        this.setState({keyword: this.state.keyword});
        var list=[];
        fetch(url)
        .then(res => res.json())
        .then(json=>{
            var filter_list = [];
            if (this.state.norm === true && this.state.keyword !== ''){
                console.log(json)
                 list = json.filter(s => s.name.toString().toLowerCase().includes(this.state.keyword.toString().toLowerCase() ),
                this.setState({courses:list}),)                
            } else if(this.state.code === true && this.state.keyword !==""){
                list = json.filter(s => s.id.toString().toLowerCase().includes(this.state.keyword.toString().toLowerCase()))
            }
            this.setState({user:list})
        })
    }
    render() {
        let user = this.state.user
        return (
            <div>
                <BrowserRouter>
                    <div id="btnContainer">
                    {this.state.isAuthenticated === 1 && <button type="button" className="btn btn-primary btn-primary-edit" data-toggle="modal" data-target="#add_student_modal" ><i className="fas fa-plus"></i> Add user</button>}
                    <form class="form-inline md-form form-sm active-cyan active-cyan-2 mt-3">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3" type="text" name="keyword" value={this.state.keyword} placeholder="Enter student's name"
                        aria-label="Search" onChange={this.handleChange.bind(this)} />
                    <i class="fa fa-list-alt ml-3" aria-hidden="true"></i>
                    <div class='divider' />
                    <div class='divider' />
                   
                    <div class='divider' />
                    <button class='btn btn-primary' type ='submit' onClick ={this.Searchresult.bind(this)} >Submit</button>

                   
                </form>

                    </div>

                    <div>
                        {/*the form for displaying student list*/}

                        {user.map(s =>
                            <div>
                                <div className="media move-media" >
                                    <div class="move-avatar">
                                        <img src={'http://localhost:4001/api' + s.user_Photo} class="avatar mr-3" />
                                    </div>
                                    <div className="media-body">
                                        <h5 className="card-title">Name: {s.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Student's ID: {s.id}</h6>
                                        <p className="card-text">RMIT's Student</p>
                                        {this.state.isAuthenticated == 1 && <button type='button' className='btn btn-danger' onClick={this.delete.bind(this, s.id)} >Delete</button>}
                                        <div className='divider' />
                                        {this.state.isAuthenticated == 1 && <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#update_student_modal" onClick={this.edit.bind(this, s.id)} >Update Student</button>}
                                    </div>
                                </div>

                            </div>
                        )}
                        {/*Modal for updating user*/}
                        <div className="modal fade" id="update_student_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                            <div className="modal-dialog modal-dialog-centered"  >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLongTitle">Update user</h3>
                                    </div>
                                    <div className="modal-body">
                                        <div class="form-group">
                                            <label >Full name</label>
                                            <input type="Text" class="form-control" name='name' placeholder="Type your Student name"
                                                value={this.state.name} onChange={this.handleChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label >Username</label>
                                            <input type="Text" className="form-control" name='username' placeholder="Type your StudentYear"
                                                value={this.state.username} onChange={this.handleChange.bind(this)} />
                                        </div>
                                        <label for="file-upload" class="custom-file-upload">
                                                <i class="fa fa-cloud-upload"></i> Upload Image
</label>
                                            <input type="file" id="updatestudent" onChange={this.handleImageChange.bind(this)}></input> {this.state.Student_Photo ? <img height="200" width="200" src={this.state.Student_Photo} alt="Image preview..." /> : ''}
                                    </div>
                                    <div class='modal-footer'>
                                        <button type="submit" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                                        <button type='button' className='btn btn-danger' onClick={this.Update.bind(this)} data-dismiss="modal">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/*Modal for adding user*/}
                            <div className="modal fade" id="add_student_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                                <div className="modal-dialog modal-dialog-centered"  >
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title" id="exampleModalLongTitle">Add user</h3>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label >Id of this user</label>
                                                <input type="text" class="form-control" name='id' placeholder="Enter student id" value={this.state.id}
                                                    onChange={this.handleChange.bind(this)} />
                                            </div>
                                            <div class="form-group">
                                                <label >Student name</label>
                                                <input type="Text" class="form-control" name='name' placeholder="Type your Student name"
                                                    value={this.state.name} onChange={this.handleChange.bind(this)} />
                                            </div>
                                            <div className="form-group">
                                                <label >Student year</label>
                                                <input type="Text" className="form-control" name='year' placeholder="Type your StudentYear"
                                                    value={this.state.year} onChange={this.handleChange.bind(this)} />
                                            </div>
                                            <label for="file-upload" class="custom-file-upload">
                                                <i class="fa fa-cloud-upload"></i> Upload Image
                                           </label>
                                            <input  type="file" id="addstudent" onChange={this.handleImageChange.bind(this)}></input> {this.state.Student_Photo ? <img height="200" width="200" src={this.state.Student_Photo} alt="Image preview..." /> : ''}
                                        </div>
                                        <div class='modal-footer'>
                                            <button type="submit" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                                            <button type='button' className='btn btn-danger' onClick={this.save.bind(this)} data-dismiss="modal">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}