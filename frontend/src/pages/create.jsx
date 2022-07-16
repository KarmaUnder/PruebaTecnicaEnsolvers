import { useState } from "react"
import { useAppContext } from "../store/store"
import Layout from "../components/layout"
import { useNavigate } from "react-router-dom"
export default function Create(){

    const [iCategories,setICategories]=useState([])
    const [title, setTitle] = useState("")
    const [description, setAuthor] = useState("")
    const [achived, setAchived] = useState(false)
    const [content, setReview] = useState("")

    const categories = ['Personal','Business','Issues','Important','Urgent','ToDo','Memo']
    const store = useAppContext();
    const navigate = useNavigate();

    const inputStyles = {
        formContainer: {
            width:"400px",
            margin: "0 auto",
        },
        container: {
            display:"flex",
            flexDirection: "column",
            gap: "5px",
            margin: "15px 0",
        },
        title: {
            fontSize: "16px",
            textAlign: "left",
            color: "black",
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            color: "black",
        },
        chekbox: {
           position: "left",
           marginRight: "370px",
           marginTop:"15px"

        }
    };

    const buttonStyle = {
        padding: "15px 20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1e9638",
        color: "white",
        fontWeigth: "bolder",
        fontSize: "18px",
        marginTop: "40px",
        cursor: "pointer"
    };



    function handleChange(e){
        const name = e.target.name;

        switch(name){
            default:
                break;
            case 'title':
                setTitle(e.target.value)
                break;
            case 'description':
                setAuthor(e.target.value)
                break;
            case 'content':
                setReview(e.target.value)
                break;
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBook ={
            id: crypto.randomUUID(),
            title,
            description,
            achived,
            content,
        };
        store.createItem(newBook);
        navigate("/");
    }

    function handleSelect(e){
       const temp = [...iCategories]
       if(temp.find(el=>el===e.target.value)){
           setICategories(temp.filter(el=>el!==e.target.value))
       }
       else{
           temp.push(e.target.value)
           setICategories(temp)
       }
    }

    function handleDeleteCat(e, el){
        e.preventDefault();
        const temp = [...iCategories]
        setICategories(temp.filter(element=>element!==el))
    }

    return <Layout>
        <h1>Create Note</h1>
        <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
            <div style={inputStyles.container}>
                <div style={inputStyles.title}>Title</div>
                <input required style={inputStyles.input} type="text" name="title" onChange={handleChange} value={title}/>
            </div>
            <div style={inputStyles.container}>
                <div style={inputStyles.title}> Little description</div>
                <input required style={inputStyles.input} type="text" name="description" onChange={handleChange} value={description}/>
            </div>
            <div style={inputStyles.container}>
                <div style={inputStyles.title}>Content</div>
                <input required style={inputStyles.input} type="text" name="content" onChange={handleChange} value={content}/>
            </div>
            <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Categories: </div>
                    <select style={inputStyles.input} onChange={handleSelect} >
                    {
                        categories.map((el,i) => (
                            <option key={i} value={el}>{el}</option>
                        ))
                    }
                    </select>
                </div>

                <div>
                    {
                        iCategories.map( (el, i) => (
                            <div key ={i}>
                                <label>{el}</label>
                                <button  onClick={(e) => handleDeleteCat(e, el)}>X</button>
                            </div>
                        ))
                    }
                </div>
            <input style={buttonStyle} type="submit" value="New Note" />
        </form>
    </Layout>
}