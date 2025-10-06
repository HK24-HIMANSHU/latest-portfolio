import reachingOut from '../assets/snowman-reachingOut.png' 

export default function Footer(){
    return (
        <>
            <div className="footer__wrap heart-hover flex flex-col flex-wrap gap-8 items-center rounded-lg p-4">
                <img alt='reaching-out' width={120} height={120} src={reachingOut}/>
                <p className="text break-words whitespace-normal drop-shadow-md">
                    Making the web a little weirder since 2021
                </p>
            </div>
        </>
    );
}