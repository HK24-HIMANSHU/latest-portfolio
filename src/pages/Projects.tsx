import Footer from "../components/Footer";
import ProjectInfo from "../components/ProjectInfo";

export default function Projects() {
    return (
        <>
            <div className="windows__options bg-primaryBg">
                <div className="windows__utilityBar w-full md:w-[60vw] rounded-b-md border border-primaryBorder border-t-0 py-2 h-full">
                    <ProjectInfo/>
                    <Footer/>
                </div>
            </div>
        </>
    );
}