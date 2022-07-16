import { Link } from "react-router-dom";
import { useAppContext } from "../store/store"

export default function NavBar(){

    const linkStyle={
        padding: "10px",
        display: "block",
        fontSize: "18px",
        color: "white",
        textDecoration: "none",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",

    };
    const navContainerStyle ={
        backgroundColor: "#181d27",
        padding: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    };

    const store = useAppContext();

    function handleClick(){
        const temp = store.items.filter((item)=>item.achived===true)
        store.filterItems(temp)
    }
    function handleLoad(){
        store.loadItems();
    }

    return <div style={navContainerStyle}>
        <Link onClick={handleLoad} to="/" style={linkStyle}>My Notes</Link>
        <Link onClick={handleClick} to="/" style={linkStyle}>Archived Notes</Link>
        <Link to="/create" style={linkStyle}>Create Note</Link>
    </div>
}