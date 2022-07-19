import React from 'react';

import { Route, Switch } from 'react-router'; 
import StrainDetail from '../components/StrainDetail';
const Routes = () => {
  return (
    <Switch>
        <Route 
            path='/:id'
            component={StrainDetail} 
        />   
    </Switch>
  );
}

export default Routes