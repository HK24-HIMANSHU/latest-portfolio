import { FileMd, FilePy, Folder, FolderOpen } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

export default function DesktopIcon(){
  const { pathname } = useLocation();
    return (
        <>
            <div className="flex flex-row md:flex-col desktopIcon col py-8 px-4 w-fit gap-8">
                <Link to='/projects'>
                    <div className="desktopIcon__resume flex flex-col items-center">
                        {
                            pathname==='/projects' ? <FolderOpen className='text' size={32} weight="duotone" /> : <Folder className='text' size={32} weight="duotone" />
                        }
                        <p className='text'>Projects</p>
                    </div>
                </Link>
                <Link to ='/resume'>
                    <div className="desktopIcon__resume flex flex-col items-center">
                        <FileMd className='text' size={32} />
                        <p className='text'>Resume.md</p>
                    </div>
                </Link>
                {/* <Link to='/about'>
                    <div className="desktopIcon__resume flex flex-col items-center">
                        <div className="icon bg-gray-400 w-10 h-10"></div>
                        <p className='text'>aboutMe.mp4</p>
                    </div>
                </Link> */}
                <Link to='/got-you'>
                    <div className="desktopIcon__resume flex flex-col items-center">
                        <FilePy className='text' size={32} />
                        <p className='text'>clickMe.py</p>
                    </div>
                </Link>
            </div>
        </>
    );
}