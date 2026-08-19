import type { ReactElement } from "react";

interface SidebarItemsProps {
  text: string;
  icon: ReactElement;
}

export function SidebarItems({
  text,
  icon,
}: SidebarItemsProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        w-full
        px-3
        py-2
        cursor-pointer
        rounded-lg
        text-gray-700
        font-medium
        transition-colors
        duration-200
        hover:bg-gray-100
        hover:text-gray-900
      "
    >
      
      <div className="flex h-8 w-8 items-center justify-center">
        {icon}
      </div>

    
      <span>{text}</span>
     
    </div>
  );
}

export default SidebarItems;