import { X } from "@phosphor-icons/react";
import { type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Home from "../pages/Home";

type WindowsSkeletonProps = {
  children: ReactNode;
};

export default function WindowsSkeleton({children}: WindowsSkeletonProps){
    const navigate = useNavigate();
    const {pathname} = useLocation();
    // const [max,setMax] = useState(false);

    // const resizeWindow = () => {
    //     setMax((prev)=>!prev);
    // }
    
    return (
        <>
            {
                // pathname ==='/home' ? (<Home/>):
                // (
                    <div className="windows__options my-8">
                        {
                            !(pathname==='/home') && 
                            <div className="windows__topBar w-full h-[40px] bg-primaryBg border border-primaryBorder px-2 rounded-t-sm flex gap-2 justify-end items-center">
                                {/* {
                                    max ?
                                    <ArrowsOutSimple onClick={()=>resizeWindow()} size={24} className="text-gray-700 hover:cursor-pointer" weight="regular" />:
                                    <ArrowsInSimple onClick={()=>resizeWindow()} size={24} className="text-gray-700 hover:cursor-pointer" weight="regular" />
                                } */}
                                <X size={24} onClick={()=>navigate('/home')}  className="text-gray-200 hover:cursor-pointer" weight="regular" />
                            </div>
                        }
                        <div className="windows__topBar__childwrap z-0 shadow-lg">
                            {children}
                        </div>
                    </div>
                // )
            }
        </>
    );
}