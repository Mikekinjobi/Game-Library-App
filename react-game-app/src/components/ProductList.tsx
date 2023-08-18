import { useState, useEffect} from "react";

interface Product {
  id: number;
  name: string;
  type: string;
}

interface Props {
  category: string;
}


const items: Product[] = [{
    id: 1,
    name: "Clothing Iron",
    type: "Electrical Appliance"
  },
  {
    id: 2,
    name: "Peak Milk",
    type: "food"
  },
  {
    id: 3,
    name: "Jango Milk",
    type: "food"
  },
  {
    id: 4,
    name: "Bass Guitar",
    type: "Electrical Appliance"
  },
  {
    id: 5,
    name: "Pizza in 5",
    type: "food"
  },
  {
    id: 6,
    name: "PlayStation 5",
    type: "Gaming Console"
  },
  {
    id: 7,
    name: "PlayStation 4",
    type: "Gaming Console"
  },
  {
    id: 8,
    name: "X-Box One",
    type: "Gaming Console"
  }
]


export function ProductList({category}:Props) {

    const [products, setProducts]= useState<Product[]>([])

    useEffect(()=>{

        setProducts(items);
        if(category){
        setProducts(items.filter(item=> item.type == category));
        }
    }, [category] );

  return (
    
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
