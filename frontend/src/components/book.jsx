import { Link } from "react-router-dom"
import styles from './noteCard.module.css'
import { useAppContext } from "../store/store"

export default function Book({ item }) {
    
    const bookInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        textDecoration: 'none',
    };

    const store = useAppContext();
    
        function handleDelete(){
        store.deleteItem(item);
        store.loadItems();
    }

    function handleArchive(){
        item.achived=(!item.achived)
        store.updateItem(item)
    }


    return <div className={styles.snote}>
        <div style={bookInfoStyle} >
            <span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={handleDelete} className={styles.btndlt}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                    <p>Delete</p>
                </button>
                <button onClick={handleArchive} className={styles.btnAchive}>
                    {item.achived? <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512"><path d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z"/></svg>
                    <p>Unarchive</p>
                    </div>
                    :
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16"><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>                    <p>Archive</p>
                    </div>
                }
                </button>
                <Link to={`/view/${item._id}`}>
                <button className={styles.btnDetails}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 192 512"><path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"/></svg>
                    <p>View Details</p>
                </button>
                </Link>
            </span>
        </div>
    </div>


}