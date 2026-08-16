import BlogIcon from "../../icons/BlogIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import SidebarItems from "./SidebarItems";

export function SideBar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 border-r border-gray-200 bg-white">

     
      <div className="flex h-20 items-center gap-3 border-b border-gray-100 px-6">
        <BlogIcon />

        <h1 className="text-2xl font-bold text-gray-800">
          Brainly
        </h1>
      </div>

      
      <nav className="p-4">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Content
        </p>

        <div className="space-y-2">

          <SidebarItems
            icon={<TwitterIcon className="text-gray-700" />}
            text="Twitter"
          />

          <SidebarItems
            icon={<YouTubeIcon />}
            text="Youtube"
          />

        </div>
      </nav>

    </aside>
  );
}