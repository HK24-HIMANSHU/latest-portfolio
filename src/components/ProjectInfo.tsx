import { useState } from "react";
import { projectInfo } from "../data/projectInfo";
import PrimaryButton from "./common/PrimaryButton";
import { BowlFood, Fingerprint, GithubLogo, Globe, UserFocus } from "@phosphor-icons/react";
import SecondaryButton from "./common/SecondaryButton";

export default function ProjectInfo(){
    
    const [project,setProject] = useState("Bastian");
    const selectedProject = projectInfo.find((ele)=>ele.name===project);
    const iconsMap = {
        Fingerprint: Fingerprint,
        BowlFood: BowlFood,
        UserFocus: UserFocus,
    }

    return (
        <>
            <div className="projInfo__wrap px-6">
                <div className="projectInfo__proj pb-4 flex justify-start flex-wrap md:justify-between">
                    {projectInfo.map((ele) => {
                    const IconComponent = iconsMap[ele.icon as keyof typeof iconsMap];
                    return (
                        <div
                        key={ele.name}
                        onClick={() => setProject(ele.name)}
                        className="proj-wrap p-4 flex flex-col gap-3 items-center border border-transparent 
                                    rounded-lg hover:border hover:border-primaryBorder w-[120px] transition-colors duration-200 hover:cursor-pointer"
                        >
                        {IconComponent && <IconComponent className={project==ele.name?'text-white':'text'} size={32} weight="fill" />}
                        <p className={project==ele.name?'text-white text':'text'}>{ele.name}</p>
                        </div>
                    );
                })}

                </div>
                {
                    selectedProject && (
                    <div className="projectInfo__info min-h-[200px] h-full">
                        <p className="subtitle">{selectedProject.name}</p>
                        <p className="text my-2">{selectedProject.description}</p>
                        <div className="projectInfo__info__btn-wrap py-4 gap-12 flex flex-row flex-wrap items-center justify-around">
                            <PrimaryButton onClick={()=>window.open(selectedProject.live)} logo={<Globe className="text-white" size={32} />} label="Live"/>
                            <SecondaryButton onClick={()=>window.open(selectedProject.github)} logo={<GithubLogo className="text-white" size={32} />} label="Github"/>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
}