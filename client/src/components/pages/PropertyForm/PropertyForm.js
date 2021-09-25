import { Component, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import PropertiesService from '../../../services/properties.services'

const PropertyForm = (props) =>  {

    const [propertyInput, setPropertyInput] = useState({
            name: '',
            description: '',
            type: '',
            status: '',
            autonomousCommunity: '',
            city: '',
            size: '',
            rooms: '',
            bathrooms: '',
            price: '',
            discountedPrice: '',
            image: ''
    })

    const propertiesService = new PropertiesService()

    const handleInputChange = e => {
        const { name, value } = e.target

        // React SCHEDULES state updates, does not perform them instantly ==> if more updates scheduled, wrong state might be used
        // INSTEAD OF:

        // setPropertyInput({
        //     ...propertyInput,
        //     [name]: value
        // })

        // WE USE:

        setPropertyInput((prevPropertyInput) => {
            return { ...prevPropertyInput, [name]: value }
        } )

        // and React GUARANTEES the latest state will be used

        // IF STATE UPDATE DEPENDS ON THE PREVIOUS STATE, USE THE ARROW FUNCTION
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        propertiesService
            .saveProperty(propertyInput)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshCoasters()
                setPropertyInput({
                    name: '',
                    description: '',
                    type: '',
                    status: '',
                    autonomousCommunity: '',
                    city: '',
                    size: '',
                    rooms: '',
                    bathrooms: '',
                    price: '',
                    discountedPrice: '',
                    image: ''
                })
                this.props.history.push('/properties')
            })
            .catch(err => console.log(err))
    }


        return (
            <Container>

                <Form onSubmit={handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={propertyInput.name} onChange={handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={propertyInput.description} onChange={handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="inve">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" value={propertyInput.type} onChange={handleInputChange} name="type" />
                    </Form.Group>

                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" value={propertyInput.status} onChange={handleInputChange} name="status" />
                    </Form.Group>

                    <Form.Group controlId="autonomousCommunity">
                        <Form.Label>Autonomous Community</Form.Label>
                        <Form.Control type="text" value={propertyInput.autonomousCommunity} onChange={handleInputChange} name="autonomousCommunity" />
                    </Form.Group>

                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={propertyInput.city} onChange={handleInputChange} name="city" />
                    </Form.Group>

                    <Form.Group controlId="size">
                        <Form.Label>Size</Form.Label>
                        <Form.Control type="text" value={propertyInput.size} onChange={handleInputChange} name="size" />
                    </Form.Group>

                    <Form.Group controlId="rooms">
                        <Form.Label>Rooms</Form.Label>
                        <Form.Control type="text" value={propertyInput.rooms} onChange={handleInputChange} name="rooms" />
                    </Form.Group>

                    <Form.Group controlId="bathrooms">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control type="text" value={propertyInput.bathrooms} onChange={handleInputChange} name="bathrooms" />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={propertyInput.price} onChange={handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="discountedPrice">
                        <Form.Label>Discounted Price</Form.Label>
                        <Form.Control type="text" value={propertyInput.discountedPrice} onChange={handleInputChange} name="discountedPrice" />
                    </Form.Group>

                    <Form.Group controlId="image">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={propertyInput.image} onChange={handleInputChange} name="image" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create property</Button>

                </Form>

            </Container>
        )

}

export default PropertyForm