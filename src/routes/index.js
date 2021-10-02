import { Route, Switch } from "react-router"
import { Customers, Dashboard, Vendors } from "../constants/Routes";
import DashboardApp from "./Dashboard"
import VendorsApp from "./Vendors"
import CustomersApp from "./Customers"

const RootRoute = () => {
    console.log('yes');
    return <Switch>
        <Route exact path={Dashboard} component={DashboardApp}/>
        <Route exact path={Vendors} component={VendorsApp}/>
        <Route exact path={Customers} component={CustomersApp}/>
    </Switch>
}


export default RootRoute;