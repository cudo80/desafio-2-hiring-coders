import * as React from 'react';
import { Client } from 'data/Classes/Order';
import { Address } from 'data/Classes/Order';

interface ClientCardProps {
  putNewClient: Function;
}

const ClientCard = ({ putNewClient }: ClientCardProps): JSX.Element => {
  const [formData, setFormData] = React.useState(new Client());

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    putNewClient(formData);
    M.toast({ html: 'Cliente cadastrado com sucesso' });
  };

  const handleInputChange = ({
    type,
    newValue,
  }: {
    type: string;
    newValue: string | undefined;
  }) => {
    setFormData((client: Client) => {
      const newClient = { ...client, [type]: newValue };
      const {
        id,
        full_name,
        email,
        phone_number,
        date_of_birth,
        addresses,
      } = newClient;
      return new Client(
        id,
        full_name,
        email,
        phone_number,
        date_of_birth,
        addresses
      );
    });
  };
  const handleAddressChange = ({
    type,
    newValue,
  }: {
    type: string;
    newValue: string | undefined;
  }) => {
    setFormData(
      ({
        id,
        full_name,
        email,
        phone_number,
        date_of_birth,
        addresses,
      }: Client) => {
        const address = addresses[0];
        const newAddress = { ...address, [type]: newValue };
        const {
          address_line_1,
          address_line_2,
          admin_area_1,
          admin_area_2,
          postal_code,
          country_code,
        } = newAddress;
        return new Client(id, full_name, email, phone_number, date_of_birth, [
          new Address(
            address_line_1,
            address_line_2,
            admin_area_1,
            admin_area_2,
            postal_code,
            country_code
          ),
        ]);
      }
    );
  };

  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <h5>Dados pessoais</h5>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input
            value={formData.full_name}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) => handleInputChange({ type: 'full_name', newValue: value })}
            id="icon_full_name"
            type="text"
            className="validate"
            autoComplete="name"
          />
          <label htmlFor="icon_full_name">Full Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input
            value={formData.email}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) => handleInputChange({ type: 'email', newValue: value })}
            id="icon_email"
            type="email"
            className="validate"
            autoComplete="email"
          />
          <label htmlFor="icon_email">Email</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">calendar_today</i>
          <input
            value={formData.date_of_birth?.toDateString()}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) => handleInputChange({ type: 'date_of_birth', newValue: value })}
            id="icon_date_of_birth"
            type="text"
            autoComplete="bday"
            className="datepicker"
          />

          <label htmlFor="icon_date_of_birth">Data de nascimento</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input
            value={formData.phone_number}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) => handleInputChange({ type: 'phone_number', newValue: value })}
            id="icon_telephone"
            type="tel"
            className="validate"
            autoComplete="tel"
          />
          <label htmlFor="icon_telephone">Telephone</label>
        </div>
        <h5>Endereco</h5>
        <div className="input-field col s5">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].address_line_1}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) =>
              handleAddressChange({ type: 'address_line_1', newValue: value })
            }
            id="icon_address_line_1"
            type="text"
            className="validate"
            autoComplete="street-address"
          />
          <label htmlFor="icon_address_line_1">Endereco</label>
        </div>
        <div className="input-field col s3">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].address_line_2}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) =>
              handleAddressChange({ type: 'address_line_2', newValue: value })
            }
            id="icon_address_line_2"
            type="text"
            className="validate"
            autoComplete="off"
          />
          <label htmlFor="icon_address_line_2">Complemento</label>
        </div>
        <div className="input-field col s3">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].postal_code}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) => handleAddressChange({ type: 'postal_code', newValue: value })}
            id="icon_postal_code"
            type="text"
            className="validate"
            autoComplete="postal-code"
          />
          <label htmlFor="icon_postal_code">CEP</label>
        </div>
        <div className="input-field col s4">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].admin_area_2}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) =>
              handleAddressChange({ type: 'admin_area_2', newValue: value })
            }
            id="icon_admin_area_2"
            type="text"
            className="validate"
            autoComplete="address-level2"
          />
          <label htmlFor="icon_admin_area_2">Cidade</label>
        </div>
        <div className="input-field col s2">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].admin_area_1}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) =>
              handleAddressChange({ type: 'admin_area_1', newValue: value })
            }
            id="icon_admin_area_1"
            type="text"
            className="validate"
            autoComplete="address-level1"
          />
          <label htmlFor="icon_admin_area_1">Estado</label>
        </div>
        <div className="input-field col s2">
          <i className="material-icons prefix"></i>
          <input
            value={formData.addresses[0].country_code}
            onChange={({
              target: { value } = {},
            }: {
              target: { value?: string };
            }) =>
              handleAddressChange({ type: 'country_code', newValue: value })
            }
            id="icon_country_code"
            type="text"
            className="validate"
            autoComplete="country"
          />
          <label htmlFor="icon_country_code">Pais</label>
        </div>
        <div className="input-field col s3 offset-s1">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Salvar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ClientCard;
