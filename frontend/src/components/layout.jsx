import NavBar from "./navbar";

export default function Layout({children}){

    const containerStyle={
        width: "90%",
        margin: "50px auto",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    };

    const estilo={
        justifyContent: "center",
        alignItems: "center",
    }


    return <div style={estilo}>
        <NavBar/>
        <div style={containerStyle}>{children}</div>
    </div>
}