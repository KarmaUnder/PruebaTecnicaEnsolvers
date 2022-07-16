
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import styles from './view.module.css'
import axios from "axios";

export default function View(){
    const [item, setItem]=useState(null);
    const params = useParams();

    useEffect( ()=>{
        async function fetch(){
            const item = await axios.get(`http://localhost:3001/notes/${params.noteId}`)     
                const datos = item.data
                setItem(datos)
        }
        fetch()
    },[])

    if(!item){
        return <Layout>Item not Found</Layout>
    }
    

    return <Layout>
        <div className={styles.container}>       
                <h2>{item?.title}</h2>
                <div className={styles.content}>{item.content}</div>
        </div>
    </Layout>
}