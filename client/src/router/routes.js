import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WeddingDress from '../components/content/Wedding-dress';
import Ornaments from '../components/content/ornaments'
const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={WeddingDress}/>
            <Route path="/WeddingDress" component={WeddingDress} />
            <Route path="/Ornaments" component={Ornaments} />
        </Switch>
    </main>
)

export default Routes
