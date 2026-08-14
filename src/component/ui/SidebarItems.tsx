import type { ReactElement } from "react";


export function SidebarItems({text,icon}:{
    text:string;
    icon: ReactElement
}) {
  return (
    <div className="flex">
        {icon}
        {text}
    </div>
  )
}

export default SidebarItems