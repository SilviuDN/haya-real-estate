import { Switch, Route } from 'react-router';
import IndexPage from '../pages/IndexPage/IndexPage';
import PropertiesPage from '../pages/PropertiesPage/PropertiesPage'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails'
import PropertyForm from '../pages/PropertyForm/PropertyForm';
import SignUp from '../pages/SignUp/SignUp';


const Routes = () => {

    return(
        <>
            <Switch>
                <Route path = '/' exact render = { () => <IndexPage/>} />
                <Route path = '/properties' exact render = { () => <PropertiesPage /> } />
                <Route path = '/properties/details/:property_id' render = { props => <PropertyDetails {...props}/> } />
                <Route path = '/properties/new' render = { (props) => <PropertyForm {...props}/> } />
                <Route path = '/signup' render = { (props) => <SignUp {...props} /> } />
                {/* <Route path = '/login' render = { (props) => <LogIn {...props} storeUser={storeUser} /> } /> */}
            </Switch>
        </>        
    )
}

export default Routes