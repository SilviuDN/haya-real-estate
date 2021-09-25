import { Switch, Route } from 'react-router';
import PropertiesPage from '../pages/PropertiesPage/PropertiesPage'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails';


const Routes = () => {

    return(
        <>
            <Switch>
                <Route path = '/properties' exact render = { () => <PropertiesPage /> } />
                <Route path = '/properties/details/:property_id' render = { props => <PropertyDetails {...props}/> } />
            </Switch>
        </>        
    )
}

export default Routes