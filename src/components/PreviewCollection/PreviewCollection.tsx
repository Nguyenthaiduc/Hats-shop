import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './preview-collections.scss'


interface Props {
    title : string
    routeName: string
    items : Array<Items>

}
type Items = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

const PreviewCollection : React.FC<Props> = ({title,items,routeName}) => {
  return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className = "preview">
            {items
            .filter((item,idx : number)=> idx  < 4)
            .map((item) => (
                <CollectionItem 
                key = {item.id}
                name = {item.name}
                imageUrl = {item.imageUrl}
                price = {item.price}

                />
            ))}
        </div>
    </div>
  )
}

export default PreviewCollection