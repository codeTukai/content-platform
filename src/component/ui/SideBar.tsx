import BlogIcon from "../../icons/BlogIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YouTubeIcon } from "../../icons/YoutubeIcon"
import SidebarItems from "./SidebarItems"


export function SideBar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-4 top-0">
        <h1 className="flex gap-2 p-4 font-medium left-1.5 items-center text-4xl">
            <BlogIcon />
            Brainly
        </h1>
        <div className="pt-4">
            <SidebarItems icon={<TwitterIcon className="text-gray-700"/>} text="Twitter"/>
            <SidebarItems icon={<YouTubeIcon />} text="Youtube"/>
        </div>
    </div>
  )
}

