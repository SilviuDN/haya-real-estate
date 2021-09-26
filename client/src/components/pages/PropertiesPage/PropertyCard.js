import './PropertiesPage.css';

import { Col, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'


const PropertyCard = ({name, description, image, _id, owner, loggedUser}) => {

    return(
        <Col md={4}>
            <article className="propertyCard">
                <img src={image} alt={name}/>
                <h5>{name}</h5>
                <p>{description.slice(0, 70)}...</p>
                <Link to={`/properties/details/${_id}`}>
                    <Button className="btnBlock">Details</Button>
                    { ( loggedUser.role === 'agent' && owner === loggedUser._id ) || loggedUser.role === 'admin'
                    ?
                    <Button className="btnBlock">Edit</Button>
                    :
                    null
                    }
                    { loggedUser.role === 'admin'
                    ?
                    <Button className="btnBlock">Delete</Button> 
                    :
                    null
                    }


                </Link>
            </article>
        </Col>
    )

}

export default PropertyCard