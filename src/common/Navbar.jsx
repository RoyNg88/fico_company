import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import Icofont from 'react-icofont';
import DropDownTitle from '../common/DropDownTitle';

const url = "http://localhost/api/user"

class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		  name:'',
		  profilePicture:'',
	      isNavExpanded: false,
		  isAuthenticated: 1	
	    };
	}
	fetchClients() {
      fetch(url)
          .then(res => res.json())
          .then(json => this.setState({ listOfUsers: json }))
       
    }
    setIsNavExpanded = (isNavExpanded) => {
      this.setState({ isNavExpanded: isNavExpanded });
    }
    closeMenu = () => {
      this.setState({ isNavExpanded: false });
    }

    handleClick = (e) => {
      if (this.node.contains(e.target)) {
        // if clicked inside menu do something
      } else {
        // If clicked outside menu, close the navbar.
        this.setState({ isNavExpanded: false });
      }
    }
  
	componentDidMount() {
	    document.addEventListener('click', this.handleClick, false);
		this.fetchClients();
		      
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClick, false);
		this.setState({isAuthenticated: window.localStorage.getItem('isAuthenticated')})
	}
	logout(event){
        event.preventDefault();
        window.sessionStorage.setItem("isAuthenticated", 0);
        this.setState({isAuthenticated: window.sessionStorage.getItem('authenticated')})
        sessionStorage.removeItem('token');
        window.location.reload()
    }
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><Image src='/256x256-image-1631043133466.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/home">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
                        <Nav.Link title="Fundraiser" alignRight className="border-0"
						eventKey={1} as={NavLink} activeclassname="active" to="/fundraiser">Fundraiser
						</Nav.Link>	
                        <Nav.Link title="AboutUs" alignRight className="border-0"
						eventKey={2} as={NavLink} activeclassname="active" to="/aboutus">AboutUs
						</Nav.Link>	
                        <Nav.Link title="Support" alignRight className="border-0"
						eventKey={4} as={NavLink} activeclassname="active" to="/notfound">Support
						</Nav.Link>			    
			         </Nav>
			      </Navbar.Collapse>
                  <Nav className="border-0">
						{this.state.isAuthenticated === 1 &&
                        <>
                                <NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image= {this.state.profilePicture}
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title={this.state.name}
			            		/>
			            	}
			            >
						<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/UserPage/Profile"><Icofont icon='food-cart'/> Profile</NavDropdown.Item>
						<NavDropdown.Item eventKey={4.2} activeclassname="active" to="/" onClick={this.logout.bind(this)}><Icofont icon='sign-out'/> Logout</NavDropdown.Item>
			            </NavDropdown>
                        </>
                        } 
                        {this.state.isAuthenticated === 0 &&<>
						<Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/login"><Icofont icon='sign-in' /> Login </Nav.Link>
                        <Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/register"> Register </Nav.Link></> }
			            </Nav>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;