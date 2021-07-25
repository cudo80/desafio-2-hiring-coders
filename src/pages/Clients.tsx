import * as React from 'react';
import M from 'materialize-css';

import Main from 'Components/Main';
import AppBody from 'Components/AppBody';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { useData } from 'data/useData';
import { Link } from 'react-router-dom';
import ClientCard from 'Components/ClientCard';
import Collapsible from 'Components/Collapsible';
import { Client } from 'data/Classes/Order';
import CollectionItem from 'Components/CollectionItem';

const Clients = () => {
  React.useEffect(() => M.AutoInit(), []);
  const [clients, _, { putNewClient }] = useData();

  return (
    <AppBody>
      <Header>
        <Link to="/" className="brand-logo">
          <i className="material-icons"></i>Desafio #2 | Hiring Coders
        </Link>
      </Header>
      <Main>
        <div className="center">
          <div className="row">
            <h4>Cadastro de clientes:</h4>
          </div>
        </div>
        <ClientCard putNewClient={putNewClient} />
        <div className="row">
          <div className="col s6">
            <Collapsible
              headerText="Clientes"
              materialIcon="people"
              badge={clients.length}
            >
              <ul className="collection">
                {clients.map((client: Client, index: number) => {
                  return (
                    <div key={index}>
                      <CollectionItem
                        description={client.full_name}
                        index={index}
                      />
                    </div>
                  );
                })}
              </ul>
            </Collapsible>
          </div>
        </div>
      </Main>
      <Footer title="">
      </Footer>
    </AppBody>
  );
};

export default Clients;
