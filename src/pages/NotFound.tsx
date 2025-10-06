import selfSnowMan  from '../assets/selfSabotageSnowMan.png'

export default function NotFound() {
    return (
        <>
            <div className="windows__utilityBar z-0 rounded-b-md border md:w-[60vw] border-primaryBorder border-t-0 py-10 bg-primaryBg flex flex-col items-center gap-8">
                <img alt='404 not found' src={selfSnowMan} width={280} height={280}/>
                <p className='title'>404 Not Found</p>
            </div>
        </>
    );
}