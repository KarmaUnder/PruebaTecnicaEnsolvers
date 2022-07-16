import { createContext, useContext, useState } from "react"
import axios from 'axios'

const AppContext = createContext({
    items: [],
    createItem: (item)=>{},
    getItem: (id)=>{},
    updateItem: (item)=>{},
    loadItems: ()=>{},
    deleteItem: (id)=>{},
    filterItems:(items)=>{},
});

export default function Store({children}){

    const [items, setItems] = useState([]);

    function filterItems(items){
        setItems(items)
    }

    async function loadItems(){
        const datos = await axios.get("http://localhost:3001/notes")
            setItems(datos.data);      
    }

    async function deleteItem(item){
        await axios.delete(`http://localhost:3001/notes/${item._id}`)
        const temp = items.filter((cadaitem)=>cadaitem.id!==item.id);
        setItems(temp);
    }

    function createItem(item){
        axios.post("http://localhost:3001/notes", item)
        .then( ()=>{
            const temp = [...items];
            temp.push(item);
            setItems(temp)
        }
        )
    }

    async function getItem(id){
      const item = await axios.get(`http://localhost:3001/notes/${id}`)
      const datos = item.data
        return datos
    } 

    async function updateItem(item){

        await axios.put(`http://localhost:3001/notes/${item._id}`,item)
        const index = items.findIndex((i)=>i.id===item.id)
        const temp = [...items];

        temp[index]= {...item};
        setItems(temp);
    }

    return <AppContext.Provider value={{
        items,
        createItem,
        getItem,
        updateItem,
        loadItems,
        deleteItem,
        filterItems,
    }}>
        {children}
        </AppContext.Provider>
}

export function useAppContext(){
    return useContext(AppContext)
}