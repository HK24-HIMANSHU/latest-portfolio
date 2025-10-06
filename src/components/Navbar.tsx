import { useEffect, useState } from "react";

export default function Navbar(){
    const hobbyItems = [
        "📺 Watching: Hajime No Ippo",
        "🎵 Listening: The Local Train",
        "📺 Watching: Inception",
        "🎮 Playing FIFA",
        "🎵 Listening: Arijit Singh",
        "⚽ Playing Football"
    ];
    const [hobby,setHobby] = useState(0);
    useEffect(()=>{
        const ref = setInterval(()=>{
            setHobby((prev)=>(prev+1)%hobbyItems.length);
        },4000)
        return ()=> clearInterval(ref);
    })

    return(
        <>
            <div className="navbar__wrap flex flex-col items-center justify-between md:items-center md:flex-row w-full px-4 md:px-16 py-4 bg-primary">
                <p className="text-lg font-bold text text-white font-funnel">Himanshu Kumar</p>
                <p className="navfont text-white truncate">{hobbyItems[hobby]}</p>
            </div>
        </>
    );
}