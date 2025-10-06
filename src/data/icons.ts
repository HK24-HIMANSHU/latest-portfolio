import { BowlFood, Fingerprint, UserFocus } from "@phosphor-icons/react";

export const projectIcons: Record<string, React.ComponentType<any>> = {
  BowlFood,
  Fingerprint,
  UserFocus
};


// {
//     projectInfo.map((ele)=>(
//         <div key={ele.name} onClick={()=>setProject(ele.name)} className="proj-wrap p-4 flex flex-col items-center border border-transparent 
//         rounded-lg hover:border hover:border-primaryBorder w-[120px] transition-colors duration-200 hover:cursor-pointer">
//             {/* <div className="icon bg-gray-400 w-10 h-10"></div> */}
//             <p className="text">{ele.name}</p>
//         </div>
//     ))
// }