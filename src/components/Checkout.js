import React, { useContext, useState } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase/firebase";
import { cartContext } from "./CartProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function Checkout() {

    const { cart, cartTotal, clearCart } = useContext(cartContext)

    const [orderId, setOrderId] = useState('')
    const [showForm, setShowForm] = useState(true)

    const db = getFirestore()
    const orders = db.collection('orders')

    function changeStock(item) {
        const itemRef = db.collection('items').doc(item.id)
        
        itemRef.get()
            .then((doc) => {
                itemRef.update({
                    stock: (doc.data().stock - item.count)
                })
            })
    }


    return (        
        <>
            {
                showForm?
                <Formik
                    initialValues={{
                        nombre: '',
                        apellido: '',
                        email: '',
                        domicilio: ''
                    }}
                    validate={(values) => {
                        let errores = {}
        
                        if (!values.name) {
                            errores.name = 'Por favor, ingresá un nombre'
                        }
        
                        if (!values.lastName) {
                            errores.lastName = 'Por favor, ingresá un apellido'
                        }
        
                        if (!values.email) {
                            errores.email = 'Por favor, ingresá un email'
                        }
        
                        if (!values.adress) {
                            errores.adress = 'Por favor, ingresá un domicilio'
                        }
        
                        return errores
                    }}
                    onSubmit={(values) => {
        
                        const myOrder = {
                            buyer: {
                                name: values.name,
                                lastName: values.lastName,
                                email: values.email,
                                adress: values.adress,
                                paymentMethod: values.payment
                            },
                            items: cart,
                            total: cartTotal,
                            date: firebase.firestore.Timestamp.fromDate(new Date())
                        }
        
                        orders.add(myOrder)
                            .then(({id}) => {
                                setOrderId(id)
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                        
                        setShowForm(false)
                        cart.forEach(item => changeStock(item))
                        clearCart()
                    }}
            >
                {({ errors }) => (
                    <div className="checkoutFormContainer">
                        <Form className="checkoutForm">
                            <div className="inputContainer">
                                <label htmlFor="inputName">Nombre</label>
                                <Field id="inputName" type="text" name="name"/>
                                <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="inputLName">Apellido</label>
                                <Field id="inputLName" type="text" name="lastName"/>
                                <ErrorMessage name="lastName" component={() => (<div className="error">{errors.lastName}</div>)}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="inputMail">E-mail</label>
                                <Field id="inputMail" type="email" name="email"/>
                                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="inputAdress">Domicilio</label>
                                <Field id="inputAdress" type="text" name="adress"/>
                                <ErrorMessage name="adress" component={() => (<div className="error">{errors.adress}</div>)}/>
                            </div>
                            <div className="paymentForm">
                                <h3>Método de pago:</h3>
                                <label>
                                    <Field type="radio" name="payment" value="crédito/débito"/><i className="fa-solid fa-credit-card"></i> Tarjeta de crédito/débito
                                </label>
                                <label>
                                    <Field type="radio" name="payment" value="transferencia"/><i className="fa-solid fa-building-columns"></i> Transferencia bancaria/MercadoPago
                                </label>
                                <label>
                                    <Field type="radio" name="payment" value="efectivo"/><i className="fa-solid fa-money-bill-1-wave"></i> Efectivo
                                </label>
                            </div>
                            <button type="submit" className="primaryBtn finish">Finalizar</button>
                        </Form>
                    </div>
                )}
            </Formik>
            :
            <div style={{color: '#fff'}}>
                {orderId?
                    <div className="checkoutFormContainer" style={{textAlign: 'center'}}>
                        <h1 style={{marginBottom: '30px'}}>¡Felicitaciones! Tu compra fue realizada con éxito.</h1>
                        <h3 style={{marginBottom: '15px'}}>Tu orden de compra fue ingresada con el id: {orderId}</h3>
                        <Link to={'/'} className="outlineBtn">Volver</Link>
                    </div>
                :
                    <div className="loaderContainer">
                        <div className="loader">
                            <i className="fa-solid fa-spinner"></i>
                        </div>                        
                        <h3 style={{color: '#fff'}}>Cargando...</h3>
                    </div>}
            </div>
            }
        </>
    )
}