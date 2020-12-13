import React, { useEffect, useState } from 'react';
import getProducts from '../services/ProductService';
import '../styles/orderSummary.css';

const OrderSummary = () => {


    const [productos, setProductos] = useState([
        {
            name: '',
            image: '',
            price: '',
        }
    ]);

    const [total, setTotal] = useState('');

    useEffect(() => {
        getProducts().then(response => {
            setProductos(response.data);
            let total = 0
            productos.forEach(element => {
                total = total + +element.price;
            });
            setTotal(total.toString())
        });
        
    }, [total]);

    return (

        <div className="contenedor">
            <div className="shopCard">
                <div className="shopTitle">
                    <h4 className="aTitle">RESUMEN DE LA ORDEN</h4>
                </div>
                {productos.map((item) => (
                    <div className="cardContainer">
                        <img className="img" src={item.image} alt={item.name} />
                        <h4 className="name">{item.name}</h4>
                        <h4 className="price">{'$' + item.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                    </div>
                    
                ))}
                <div className="cardContainer right">
                    <div className="buttons">
                        <button type="button" className="editButton"><h4 className="buttonText">Editar</h4></button>
                    </div>
                </div>
                <div className="shopSummary">
                    <div className="textGroup">
                    <h4 className="textFinal">SUBTOTAL</h4>
                    <h4 className="textFinal">{'$' + total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                </div>
                    <div className="textGroup">
                    <h4 className="textFinal">ENVÍO</h4>
                    <h4 className="textFinal">A calcular</h4>
                    </div>
                </div>
                <div className="shopEnd">
                    <div className="textGroup">
                    <h4 className="textFinal">TOTAL</h4>
                    <h4 className="textFinal">{'$' + total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;