// import Alert from "./components/Alert";
// import Button from './components/Button';
// import ListGroup from "./components/ListGroup";
import { useState } from 'react';
// import LikeButton from './components/LikeButton';
// import TransactionsList, 
// import TransactionsList, { transaction } from './components/TransactionsList';
// // import CheckingAccount from './components/CheckingAccount';
// // import MasterCard from './components/MasterCard';
// import SpendingYGraph from './components/SpendingYGraph';
import { ProductList } from './components/ProductList';



function App() {
  // const items = ["kira", "L", "Guts", "Thors", "canute"];
  // const handleSelectItem = (item: string) => {
    // console.log(item);
  // };
  // const [alertVisible, setAlertVisible]= useState(false);

  // const handleClick = ()=>{
  //   setAlertVisible(true)
  // }
  
 

//   const transactions: transaction[] = [{user: "tony markle",
//     otherUser: "Central Burger",
//     userTotalBalance: 10000,
//     amount: -189.36,
//     type: "Quick Transfer",
//     date: new Date(),
//     id: "dubqidg82392t38"
//   }, {user: "tony markle",
//   userTotalBalance: 10000,
//   otherUser: "The Market",
//   amount: -92.50,
//   type: "Groceries",
//   date: new Date(),
//   id: "uwqueufh72389kqd"
// },
// {user: "tony markle",
// userTotalBalance: 10000,
//     otherUser: "Quick Transfer",
//     amount: 350,
//     type: "Quick Transfer",
//     date: new Date(),
//     id: "dubqidg82392t38"
//   },
//   {user: "tony markle",
//   userTotalBalance: 10000,
//   otherUser: "The Market",
//   amount: -36,
//   type: "Groceries",
//   date: new Date(),
//   id: "dubqidg82392t38"
// },
// {user: "tony markle",
// userTotalBalance: 10000,
//     otherUser: "Central Burger",
//     amount: -18.40,
//     type: "Cafe and Resturant",
//     date: new Date(),
//     id: "dubqidg82392t38"
//   },
//   {user: "tony markle",
//   userTotalBalance: 10000,
//     otherUser: "Quick Transfer",
//     amount: 350,
//     type: "Cafe and Resturant",
//     date: new Date(),
//     id: "dubqidg82392t38"
//   }
// ]

const [category, setCategory] = useState('')


  return (
    <div>
      
      <select className='form-select' onChange={(event)=> setCategory(event.target.value)}>
        <option value="">All Products</option>
        <option value ="Electrical Appliance">Electrical Appliances</option>
        <option value="food">food</option>
        <option value="Gaming Console">Gaming Consoles</option>
      </select>
      <ProductList category={category}/>
    </div >
  );
}

export default App;
