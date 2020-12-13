import React, { useEffect, useState } from 'react';
import getPostalCode from '../services/PostalCodeService';
import sendContact from '../services/ContactService';
import '../styles/addressForm.css';
import { faUser, faEnvelope, faPhoneAlt, faMapMarkerAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';

const AddressForm = (props) => {

    const [state, setState] = useState({
        names: '',
        lastNames: '',
        email: '',
        telephone: '',
        colonies: ['Colonia'],
        colony: '',
        state: '',
        city: '',
        municipality: '',
        street: '',
        saveAddress: false,
        loading : false,
        isValidTelephone: false,
    });

    const [postalCode, setPostalCode] = useState('')

    const [colony, setColony] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // sendContact({
        //     name: state.names,
        //     lastName: state.lastNames,
        //     telephone: state.telephone,
        //     email: state.email,
        //     region: state.region,
        //     colony: colony,
        //     state: state.state,
        //     city: state.city,
        //     municipality: state.municipality,
        //     street: state.street,
        //     postalCode: postalCode,
        //     saveAddress: state.saveAddress,
        // }).then(response => {
            swal("Dirección de envío", "Tus datos han sido enviados!", "success");
            setState({
                names: '',
                lastNames: '',
                email: '',
                telephone: '',
                colonies: ['Colonia'],
                colony: '',
                state: '',
                city: '',
                municipality: '',
                street: '',
                saveAddress: false,
                loading : false,
                isValidTelephone: false,
            });
        // });
    };

    useEffect(() => {
        if (postalCode!==null && postalCode!=="null" && postalCode!=='' ){
        //     // if (state.postalCode!==null && state.postalCode!=="null" && state.postalCode!=='' ){

            
            getPostalCode(postalCode).then(response => {
                setState({
                    names: state.names,
                    lastNames: state.lastNames,
                    email:  state.email,
                    telephone: state.telephone,
                    colonies: response.colonies,
                    colony: state.colony,
                    state: response.state,
                    city: response.city,
                    municipality: response.town,
                    street: state.street,
                });
                setColony('')
            });
        }
    }, [postalCode]);

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
                                <input className={state.names!==undefined ? state.names.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.names} placeholder="Nombre" onChange={(e) => { setState({...state, names: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faUser} /></div>
                                <input className={state.lastNames!==undefined ? state.lastNames.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.lastNames} placeholder="Apellidos" onChange={(e) => { setState({...state, lastNames: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faEnvelope} /></div>
                                <input className={(state.email!==undefined && state.email.includes('@') && state.email.includes('.')) ? state.email.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.email} placeholder="Correo electrónico" onChange={(e) => { setState({...state, email: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faPhoneAlt} /></div>
                                <input className={(state.telephone!==undefined && state.telephone!==null && state.telephone!=='' )? "formInput" : "formInputInvalid"} type="number" value={state.telephone} placeholder="Número de teléfono" onChange={(e) => { setState({...state, telephone: e.target.value }); }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                {/* <select className="formInput selectHeight" placeholder="Código postal" onChange={(e) => {setState({ postalCode: e.target.value });}}> */}
                                <select className={postalCode!==undefined ? postalCode.length>4 ? "formInput selectHeight" : "formInputInvalid selectHeight" : "formInputInvalid selectHeight"} placeholder="Código postal" onChange={(e) => {setPostalCode(e.target.value);
                                }}>
                                <option style={{color:"gray"}} value="null">Código postal</option>
                                <option key="11000" value="11000">11000</option>
                                <option key="89000" value="89000">89000</option>
                                </select>
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                {state.colonies.length!==1? <select className={(colony!==undefined && colony!=='') ? colony.length>4 ? "formInput selectHeight" : "formInputInvalid selectHeight" : "formInputInvalid selectHeight"} placeholder="Colonia" onChange={(e) => {setColony(e.target.value);}}>
                                <option style={{color:"gray"}} value="null">Colonia</option>
                                {state.colonies.map((item) => (
                                <option key={item} value={item}>{item}</option>
                                ))}
                                </select>: <input className={(state.colonies[0]!==undefined && state.colonies[0]!== 'Colonia') ? state.colonies[0].length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" placeholder="Colonia" value={state.colonies[0] !=='Colonia' ? state.colonies[0] : ''} onChange={(e) => { setState({ ...state, colony: e.target.value }) }} />}
                                {/* <input className="formInput" type="text" placeholder="Colonia" onChange={(e) => { setState({ colony: e.target.value }) }} /> */}
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className={state.state!==undefined ? state.state.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.state} placeholder="Estado/Región" onChange={(e) => { setState({...state, state: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className={state.city!==undefined ? state.city.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.city} placeholder="Ciudad" onChange={(e) => { setState({...state, city: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} /></div>
                                <input className={state.municipality!==undefined ? state.municipality.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.municipality} placeholder="Delegación o municipio" onChange={(e) => { setState({...state, municipality: e.target.value }) }} />
                                <span></span>
                            </div>
                            <div className="formGroup1">
                                <div className="icon"><FontAwesomeIcon className="fa" icon={faMapMarkedAlt} /></div>
                                <input className={state.street!==undefined ? state.street.length>4 ? "formInput" : "formInputInvalid" : "formInputInvalid"} type="text" value={state.street} placeholder="Calle" onChange={(e) => { setState({...state, street: e.target.value }) }} />
                            </div>
                        </div>
                        <button type="button"><h4 className="buttonText">Libreta de direcciones</h4></button>
                        &nbsp;
                        <button type="submit" disabled={state.names==undefined || state.names.length<4 || state.lastNames==undefined || state.lastNames.length<4 || state.email==undefined || !state.email.includes('@') || !state.email.includes('.') ||  state.email.length<4 || state.telephone==undefined || state.telephone==null || state.telephone=='' || postalCode==undefined || postalCode.length<4 || (state.colonies.length!==1 ? (colony==undefined || colony=='') : (state.colonies[0]==undefined || state.colonies[0]== 'Colonia' || state.colonies[0].length<4)) || state.state==undefined || state.state.length<4 || state.city==undefined || state.city.length<4 || state.municipality==undefined || state.municipality.length<4 || state.street==undefined || state.street.length<4}><h4 className="buttonText">Guardar</h4></button>
                        <br></br><br></br>
                        <div className="checkInput">
                        <input type="checkbox" value={state.saveAddress} id="checkInput" name="check"  onChange={(e) => { setState({...state, saveAddress: e.target.value });}}/>
                        <label htmlFor="checkInput"></label><h4 className="buttonText checkText">Utilizar como dirección de facturación</h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;