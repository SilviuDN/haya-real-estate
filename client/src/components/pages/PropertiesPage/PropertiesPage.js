import {Container, Button} from 'react-bootstrap'
import PropertiesList from './PropertiesList'

const PropertiesPage = () => {

    return(
        <Container>
            <h1>Properties list goes here</h1>
            <PropertiesList/>
            <p style={{marginBottom: '3rem'}}></p>
        </Container>
    )
}

export default PropertiesPage