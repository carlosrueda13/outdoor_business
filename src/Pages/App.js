import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import FirstPage from './first_page'
import Glamping from './glamping'
import Bicicletas from './bicicletas'
import CotizacionesBicicletas from './cotizaciones_bicicleta'
import CotizacionesGlamping from './cotizaciones_glamping'
const App = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/main" component={FirstPage}/>
    <Route exact path="/main/bike" component={Bicicletas}/>
    <Route exact path="/main/glamping" component={Glamping}/>
    <Route exact path="/main/glamping/cotizacion" component={CotizacionesGlamping}/>
    <Route exact path="/main/bike/cotizacion" component={CotizacionesBicicletas}/>
    </Switch>
        </BrowserRouter>
)

export default App
