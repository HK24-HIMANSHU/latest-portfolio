import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function ClickMe(){

    const [msg,setMsg] = useState('');
    const [isFetched,setIsFetched] = useState(false);

    useEffect(()=>{
        fetchRandomFact()
    },[])

    const fetchRandomFact = async() =>{
        try{
            setIsFetched(false)
            const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
            const finalRes = await res.json();
            setMsg(finalRes.text);
            setIsFetched(true);
        }
        catch(ex){
            console.warn(ex);
            setMsg("Something Broke!!")
        }
    }

    return (
        <>
            <div className="windows__utilityBar md:w-[60vw] z-0 rounded-b-md border border-primaryBorder bg-primaryBg border-t-0 py-2">
                <p className="subtitle m-4">[clickMe.py]: Fun Fact Loaded</p>
                <p className="break-words text m-4">{isFetched ? msg:'Loading...'}</p>
                <Footer/>
            </div>
        </>
    );
}