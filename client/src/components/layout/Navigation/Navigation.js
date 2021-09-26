import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand href="#home">Haya Real Estate</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/properties">Properties</Link>
                    <Link className="nav-link" to="/properties/new">New</Link>
                
                    {!false
                        ?
                        <>
                            <Link className="nav-link" to="/signup">SignUp</Link>
                            <Link className="nav-link" to="/login">LogIn</Link>
                        </>
                        :
                        <>
                            <span className="nav-link" >LogOut</span>
                        </>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation