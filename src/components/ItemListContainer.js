import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {

    const { catId } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {

        const productsArray = [
            {
                id: '001',
                category: 'accesorios',
                title: 'Filtro UV Marumi 52mm',
                price: '$500',
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_789478-MLA31122813738_062019-O.jpg',
                description: 'Filtro UV de vidrio templado para protección del lente. Marca: Marumi. Tamaño: 52mm'
            },
            {
                id: '002',
                category: 'tripodes-pies',
                title: 'Trípode Benro A2980T',
                price: '$13499.99',
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_250815-MLA25314947063_012017-O.jpg',
                description: 'Trípode para fotografía con altura máxima de 1.73m y columna central ajustable. Carga máxima: 10kg. No incluye cabezal.'
            },
            {
                id: '003',
                category: 'accesorios',
                title: 'Parasol pétalo 72mm',
                price: '$949.99',
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_609202-MLA31044036597_062019-O.jpg',
                description: 'Parasol pétalo rígido de plástico para prevenir la entrada de luz no deseada al lente. Diámetro: 72mm'
            },
            {
                id: '004',
                category: 'iluminacion',
                title: 'Chapaletas barndoor',
                price: '$1499.99',
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_605008-MLA43507077446_092020-O.webp',
                description: 'Chapaletas barndoor con panal de abejas y filtros de colores incluidos, para uso con flash de estudio.'
            },
            {
                id: '005',
                category: 'iluminacion',
                title: 'Snoot para montura Bowens',
                price: '$1999.99',
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_838729-MLA31576036429_072019-O.webp',
                description: 'Cono Snoot para iluminación de estudio. Incluye panal de abejas y filtros de colores. Montura Bowens'
            }
        ]

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsArray)
            }, 1000)
        })

        getItems.then((res) => {
            setProducts(res)
        })

    }, [catId])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={catId? products.filter(Item => Item.category == catId) : products} />
        </>
    )
}

export default ItemListContainer