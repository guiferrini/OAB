import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Principal from './Page/Principal/index';
// import ModeloBT from './Page/ModeloBT/index'; // criar uma pagina modelo, so com blocos
import Vendas from './Pages/Venda/index'; // Sergio com header + video
// import VendasS from './Page/VendaS/index'; // back fom foto e video de frente, terminar...
// import OAB from './Page/OAB/index'; // pagina Roberto Nascimento
import Captura from './Pages/Captura/index'; // Captura Roberto Nascimento
// import Teste from './Page/Teste';

const Routes = () => {
  return (
      <Switch>
        {/* <Route component={Principal} path='/principal'/> */}
        {/* <Route component={ModeloBT} path='/modelo' /> */}
        <Route component={Vendas} path='/vendas' />
        {/* <Route component={VendasS} path='/vendasS' /> */}
        {/* <Route component={OAB} path='/oab' /> */}
        <Route component={Captura} path='/captura' />
        {/* <Route component={Teste} path='/teste' /> */}


      </Switch>
  )
};

export default Routes;