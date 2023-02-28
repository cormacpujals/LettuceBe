import {Inventory} from "../models/inventory";

// async function getUser() {
//   const res = await fetch('http://localhost:3000/api/user');
//   if(!res.ok) {
//     console.log(res);
//   }
//   return res.json();
// }

const items : {name: string, dateAdded: number, dateExpires: number}[] = [
  {
    name: "Milk",
    dateAdded: 0,
    dateExpires: 10,
  },
  {
    name: "Brown Rice",
    dateAdded: 0,
    dateExpires: 10,
  },
  {
    name: "Beef",
    dateAdded: 0,
    dateExpires: 10,
  },
  {
    name: "Bananas",
    dateAdded: 0,
    dateExpires: 10,
  },
  {
    name: "Chicken",
    dateAdded: 0,
    dateExpires: 10,
  },
]
export default async function ShelfItem() {
  // const user : {name: string, inventory: Inventory} = await getUser();
  // const items : {name: string, dateAdded: number, dateExpires?: number}[] = user.inventory.items;
  return (
    // <ul>
    //   {items.map((item, idx)=>
    //     <li key={idx}><div>food item: {item.name} date added: {item.dateAdded} expires: {item.dateExpires}</div></li>
    //   )}
    // </ul>
      <div>
        {items.map((item, idx) =>
            <h1 key={idx}>{item.name}</h1>
        )}
      </div>
  )
}
