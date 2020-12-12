import React, { useEffect, useState } from 'react';
import getPostalCode from '../services/PostalCodeService';
import sendContact from '../services/ContactService';
import getProducts from '../services/ProductService';
import '../styles/addressForm.css';
import { faUser, faEnvelope, faPhoneAlt, faMapMarkerAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddressForm = (props) => {

    const [state, setState] = useState({
        names: '',
        lastNames: '',
        email: '',
        telephone: '',
        postalCode: '',
        colony: '',
        region: '',
        city: '',
        municipality: '',
        street: '',
        code: '11000',
    });


    const handleSubmit = (event) => {
        alert('A name was submitted: ' + state.names);
        event.preventDefault();
    };

    // useEffect(() => {
    //     getPostalCode(11000);
    // }, []);

    // useEffect(() => {
    //     sendContact();
    // }, []);

    return (
        <div className="contenedor">
            <div className="addressCard">
                <div className="addressTitle">
                    <h4 className="aTitle">DIRECCIÓN DE ENVÍO</h4>
                </div>
                <div className="cardContainerAddress">
                    <form onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faUser} /></div>
                                <input className="formInput" type="text" placeholder="Nombre" onChange={(e) => { setState({ names: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faUser} /></div>
                                <input className="formInput" type="text" placeholder="Apellidos" onChange={(e) => { setState({ lastNames: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faEnvelope} /></div>
                                <input className="formInput" type="text" placeholder="Correo electrónico" onChange={(e) => { setState({ email: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faPhoneAlt} /></div>
                                <input className="formInput" type="text" placeholder="Número de teléfono" onChange={(e) => { setState({ telephone: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className="formInput" type="text" placeholder="Código postal" onChange={(e) => { setState({ postalCode: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className="formInput" type="text" placeholder="Colonia" onChange={(e) => { setState({ colony: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className="formInput" type="text" placeholder="Estado/Región" onChange={(e) => { setState({ state: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className="formInput" type="text" placeholder="Ciudad" onChange={(e) => { setState({ city: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className="formInput" type="text" placeholder="Delegación o municipio" onChange={(e) => { setState({ municipality: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkedAlt} /></div>
                                <input className="formInput" type="text" placeholder="Calle" onChange={(e) => { setState({ street: e.target.value }) }} />
                            </div>
                        </div>
                        <button type="button"><h4 className="buttonText">Libreta de direcciones</h4></button>
                        &nbsp;
                        <button type="submit"><h4 className="buttonText">Guardar</h4></button>
                        <br></br><br></br>
                        <input type="checkbox" className="" /> <label>Utilizar como dirección de facturación</label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;