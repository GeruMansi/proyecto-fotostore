import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams()

    const [singleItem, setSingleItem] = useState({})

    useEffect(() => {

        const itemsArray = [
            {
                id: '001',
                category: 'accesorios',
                title: 'Filtro UV Marumi 52mm',
                price: 500,
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_789478-MLA31122813738_062019-O.jpg',
                description: 'Filtro UV de vidrio templado para protección del lente. Marca: Marumi. Tamaño: 52mm',
                stock: 5
            },
            {
                id: '002',
                category: 'tripodes-pies',
                title: 'Trípode Benro A2980T',
                price: 13499.99,
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_250815-MLA25314947063_012017-O.jpg',
                description: 'Trípode para fotografía con altura máxima de 1.73m y columna central ajustable. Carga máxima: 10kg. No incluye cabezal.',
                stock: 0
            },
            {
                id: '003',
                category: 'accesorios',
                title: 'Parasol pétalo 72mm',
                price: 949.99,
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_609202-MLA31044036597_062019-O.jpg',
                description: 'Parasol pétalo rígido de plástico para prevenir la entrada de luz no deseada al lente. Diámetro: 72mm',
                stock: 4
            },
            {
                id: '004',
                category: 'iluminacion',
                title: 'Chapaletas barndoor',
                price: 1499.99,
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_605008-MLA43507077446_092020-O.webp',
                description: 'Chapaletas barndoor con panal de abejas y filtros de colores incluidos, para uso con flash de estudio.',
                stock: 6
            },
            {
                id: '005',
                category: 'iluminacion',
                title: 'Snoot para montura Bowens',
                price: 1999.99,
                picUrl: 'https://http2.mlstatic.com/D_NQ_NP_838729-MLA31576036429_072019-O.webp',
                description: 'Cono Snoot para iluminación de estudio. Incluye panal de abejas y filtros de colores. Montura Bowens',
                stock: 4
            }
        ]
        
        setSingleItem(itemsArray.find(item => item.id === itemId))

    }, [itemId])

    return (
        <div className="itemDetailContainer">
            <Categories />
            <ItemDetail item={singleItem}/>
        </div>
    )
}