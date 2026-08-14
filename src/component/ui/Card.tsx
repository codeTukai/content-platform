import { PlusIcons } from "../../icons/PlusIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
      <div className="p-8 bg-white rounded-md shadow-md outline-gray-200 max-w-72 min-h-42 min-w-72">
        <div className="flex gap-2">
          <div className="flex items-center text-shadow-md">
            <PlusIcons size="md" />
            <span className="pl-2">{title}</span>
          </div>
          <div className="flex items-center pl-8">
            <div className="pr-2 bg-gray-300">
              <a href={link} target="_blank">
                <PlusIcons size="lg" />
              </a>
            </div>
            <div className="bg-gray-300">
              <PlusIcons size="lg" />
            </div>
          </div>
        </div>
    
      {type === "youtube" && 
          <iframe
          className="p-8"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
       
      }

      {type === "twitter" && <blockquote className="twitter-tweet">
         <a href={link.replace("x.com", "twitter.com")}></a>
      </blockquote>
       
      }
    </div>
  );
};
