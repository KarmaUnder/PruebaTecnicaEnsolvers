import Layout from "../components/layout";
import { useAppContext } from "../store/store"
import Book from "../components/book";
import {useEffect} from 'react'


export default function Index(){

    useEffect(()=>{
        store.loadItems()
    },[])
    const store = useAppContext();

    const booksContainer ={
        display: 'flex',
        flexWrap: 'wrap',
        gap: '50px',
        marginBottom: '5px',
        alignItems: "center",
        justifyContent: "center",
    };

    return <Layout>
        <h1>My Notes</h1>
        <div style={booksContainer}>
        {store.items?.map((item)=>(
            <Book key={item.id} item={item}/>))}
        </div>
    </Layout>
}