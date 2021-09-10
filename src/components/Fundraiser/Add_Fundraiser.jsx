import React, { Component } from "react";
// import "./AddRecipe.css";
// import './w3style.css';
// import PageTitle from '../../common/Title/PageTitle';

const url = "http://localhost:4001/api/fundraiser";

class AddFundraiser extends Component {
  constructor(props){
    super(props);
    this.state = {
      fundraiser: [],
      title: '',
      address: '',
      category: '',
      namePost: '',
      information: '',
      donate: '',
      image: null,
    };
  }
 

//   fetchData(){    
//     fetch(url, {mode: "cors"})
//         .then(response => response.json())
//         .then(json => this.setState({fundraiser: json}))
//         .catch(err => console.log(err))                     
//   }

//   componentDidMount(){
//     this.fetchData();
//   }
  handleChange(e) {
    e.preventDefault();
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(
      obj)
}
  onImageChange = event => {
    this.setState({
      image: window.URL.createObjectURL(event.target.files[0])
  })
  };

  saveFundraiser(e){
    let formData = new FormData();
    let image = document.querySelector('#image');
    formData.append("title", this.state.title);
    formData.append("category", this.state.category);
    formData.append("namePost", this.state.namePost)
    formData.append("address", this.state.address)
    formData.append("donate", this.state.donate)
    formData.append("information", this.state.information)
    formData.append("image", image.files[0])
    e.preventDefault();
      fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
          "Authorization" : `Bearer ${this.state.token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      })   
      .then(() => {
        alert('create recipe successfully')
        setTimeout(this.fetchData(), 10000)
        window.location.reload()


    })
    .catch(error => {
        if (error.response) {
            console.log(error.responderEnd);
        }
    });
  }
 
  // addNewRecipe = () => {
  //   this.setState({title: '', difficulty: '', body: '', ingredients: '', guide: '', image: null})
  // }

  render() {
    return (
     <>
     {/* <PageTitle 
	    			title="Add a post"
	    			subTitle="Recipe #25102589748"
	    		/> */}
    {/* //Page Container */}
      <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>

        {/* The Form  */}
        <form>
            <div className="w3-row-padding">
            {/* Left Colum */}
            <div className="w3-third">
                <div className=" w3-container w3-white w3-text-grey w3-card-4"> 
                <img src='./img/food.jpg' alt="" style={{width: '100%', background:'cover'}} />
                          {/* Input Image */}
                          <input type="file" name="image" id="image"
                          onChange={this.onImageChange.bind(this)} />                   
                      {/* Input title */}
                    <div className="input-section">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="off" 
                            required
                            value={this.state.title}
                            onChange={this.handleChange.bind(this)}
                            />

                            <label className="label-name">
                              <span className="content-name">
                                Food Name
                              </span>
                            </label>
                      </div>  
                      <div className="w3-container w3-padding">
                            <div className="col-40">
                                <label >
                                  Level of Difficulty
                                </label>
                              </div>
                              <div className="col-60">
                                <select  id="category" name="category" 
                                required
                                value={this.state.category}
                                onChange={this.handleChange.bind(this)}>
                                    <option>Medical</option>
                                    <option>Food</option>
                                    <option>Advance</option>
                                </select>
                              </div>
                        </div>
                  </div>

                  <div className=" w3-container w3-card w3-white w3-margin-top">
                    <div className="textarea-section">
                        <textarea
                          type="text"
                          name="address"
                          placeholder="Please Write Food Description..."
                          autoComplete="off" required
                          id="address"
                          value={this.state.address}
                          onChange={this.handleChange.bind(this)}
                          />
                        <label  className="label-name">    
                            <span className="content-name">
                              <i className="fa fa-pencil-square-o w3-padding"></i>
                              Description
                            </span>
                        </label>
                    </div>
                  </div>
                  <div className=" w3-container w3-card w3-white w3-margin-top">
                    <div className="textarea-section">
                        <textarea
                          type="text"
                          name="namePost"
                          placeholder="Please Write Food Description..."
                          autoComplete="off" required
                          id="namePost"
                          value={this.state.namePost}
                          onChange={this.handleChange.bind(this)}
                          />
                        <label  className="label-name">    
                            <span className="content-name">
                              <i className="fa fa-pencil-square-o w3-padding"></i>
                              Description
                            </span>
                        </label>
                    </div>
                  </div>
                  <div className=" w3-container w3-card w3-white w3-margin-top">
                  <div className="textarea-section" style={{height: '0px'}}>
                    <label className="label-name"><span className="content-name">
                      <i className="fa fa-pencil-square-o w3-padding"></i>
                      Select Image</span> 
                      </label>
                      </div>       
                    </div> 
            </div>

            {/* Right Colum */}
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="textarea-section">
                          <textarea
                            type="text"
                            name="information"
                            id="information"
                            placeholder="Please Write information here..."
                            autoComplete="off" required
                            value={this.state.information}
                            onChange={this.handleChange.bind(this)}
                            />
                          <label className="label-name" >    
                              <span className="content-name">
                                <i className="fa fa-shopping-basket w3-padding"></i>
                                information
                              </span>
                          </label>
                      </div>
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="textarea-section" style={{height: 500}}>
                          <textarea
                            type="text"
                            name="donate"
                            placeholder="Please Write The Recipe here..."
                            autoComplete="off" required
                            value={this.state.donate}
                            id="donate"
                            onChange={this.handleChange.bind(this)}
                            />
                          <label  className="label-name" style={{bottom:'90%'}}>    
                              <span className="content-name">
                                <i className="fa fa-glass w3-padding"></i>
                                Recipe 
                              </span>
                          </label>
                      </div>
                      <div className="w3-padding-16">
                          <button type="submit" value="submit" className="w3-button w3-black" onClick={this.saveFundraiser.bind(this)}>Save Fundraiser</button>
                      </div>
                  </div>
              </div>
            </div>
        </form>
        
       </div>
    </div>
    </>
    );
  }
}


export default AddFundraiser;
