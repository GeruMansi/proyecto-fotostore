import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";
import Categories from "./Categories";

function ItemListContainer() {

    const { catId } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const itemCollection = (catId? db.collection('items').where('category', '==', catId) : db.collection('items'))

        itemCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No hay coincidencias')
                    return
                }

                setProducts(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
        

    }, [catId])

    return (
        <>
            <Categories />
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer