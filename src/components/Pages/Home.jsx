import React, {useEffect} from "react";
import Navbar from "../Navbar";
import Blocks from "../Blocks";
import Main from "../Main";
import Footer from "../Footer";

export default function Home () {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div>
            <Navbar/>
            <Main/>
            <Blocks/>
            <Footer/>
        </div>
    )
}
