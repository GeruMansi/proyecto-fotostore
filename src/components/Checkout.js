import React, { useContext, useState } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase/firebase";
import { cartContext } from "./CartProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
                        <form className="paymentForm">
                            <h3>Método de pago:</h3>
                            <div>                            
                                <input type={'radio'} id={'option1'} name={'option'}/>
                                <label htmlFor="'option1"><i className="fa-solid fa-credit-card"></i> Tarjeta de crédito/débito</label>
                            </div>

                            <div>                            
                                <input type={'radio'} id={'option2'} name={'option'}/>
                                <label htmlFor="'option2"><i className="fa-solid fa-building-columns"></i> Transferencia bancaria/MercadoPago</label>
                            </div>

                            <div>                            
                                <input type={'radio'} id={'option3'} name={'option'}/>
                                <label htmlFor="'option3"><i className="fa-solid fa-money-bill-1-wave"></i> Efectivo</label>
                            </div>
                        </form>
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
                            <button type="submit" className="primaryBtn finish">Finalizar</button>
                        </Form>
                    </div>
                )}
            </Formik>
            :
            <div style={{color: '#fff'}}>
                {orderId?
                    <div className="checkoutFormContainer">
                        <h1>¡Felicitaciones! Tu compra fue realizada con éxito.</h1>
                        <h3>Tu orden de compra fue ingresada con el id: {orderId}</h3>
                    </div>
                :
                    <h3>Cargando...</h3>}
            </div>
            }
        </>
    )
}