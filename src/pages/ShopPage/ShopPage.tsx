import React, { useState } from 'react'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
import { SHOP_DATA } from '../../data'
import './shop-page.scss'
const ShopPage: React.FC = () => {
    const [collections , setCollections] = useState(SHOP_DATA)
    return (
        <div className="shop-page">
       {collections.map((collection) =>(
           <PreviewCollection 
           key = {collection.id} 
           title={collection.title}
           routeName={collection.routeName}
           items = {collection.items}


           />
       ))}
        </div>
    )
}

export default ShopPage