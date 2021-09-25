import './PropertiesPage.css';

import { Col, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'


const PropertyCard = ({name, description, image, _id}) => {

    return(
        <Col md={4}>
            <article className="propertyCard">
                <img src={image} alt={name}/>
                <h4>{name}</h4>
                <p>{description.slice(0, 70)}...</p>
                <Link to={`/properties/details/${_id}`}>
                    <Button className="btnBlock">Details</Button>
                </Link>
            </article>
        </Col>
    )

}

export default PropertyCard