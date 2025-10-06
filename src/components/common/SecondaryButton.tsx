import type { ReactNode } from "react";

type primaryBtnProp = {
    label:string,
    logo: ReactNode,
    onClick?: () => void;
}

export default function SecondaryButton({label,logo,onClick}:primaryBtnProp){
    return (
        <>
            <button onClick={onClick} className="primary border border-primaryBg justify-center items-center gap-2 flex-1 px-8 py-2 rounded-md 
                shadow-[0_4px_0_0_rgba(97,101,111,0.4)] 
                transition-transform duration-150
                hover: cursor-pointer
                hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(97,101,111,0.4)]
                active:translate-y-0 active:shadow-[0_4px_0_0_rgba(97,101,111,0.4)]
                flex flex-row flex-wrap bg-backGround"
            >
                {logo}
                <p className="subtitle text-white">{label}</p>
            </button>
        </>
    );
}