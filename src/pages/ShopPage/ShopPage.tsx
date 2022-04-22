import React, { useState } from 'react'
import { SHOP_DATA } from '../../data'
import './shop-page.scss'
const ShopPage: React.FC = () => {
    const [collections , setCollections] = useState(SHOP_DATA)
    return (
        <div>
        SHOP PAGE
        </div>
    )
}

export default ShopPage