import { PlusIcons } from "../../icons/PlusIcon"

interface CardProps{
    title: string;
    link:string;
    type:"twitter" | "youtube"
}

export const Card = ({title, link, type}:CardProps) => {
    return(
        <div>
        <div className="p-8 bg-white rounded-md shadow-md outline-gray-200">
            <div className="flex justify-between mb-2 gap-4">
                <div className="flex items-center text-shadow-md">
                    <PlusIcons size="md"/>
                    <span className="pl-2">
                        {title}
                    </span>
                </div>
                <div className="flex items-center pl-10">
                    <div className="pr-2 bg-gray-300">
                        <a href={link} target="_blank">
                            <PlusIcons size="lg"/>
                        </a>
                    </div>
                    <div className="bg-gray-300">
                         <PlusIcons size="lg"/>
                    </div>
                   
                    
                </div>
            </div>
        </div>
        {type ==="youtube" && 
        <div>youtube Link</div>
        

        }
        {/* <div className="w-full">
            <iframe src="" title="youtube video player" frameBorder="0" allow="acceleremoter" autoplay:Clipboard-write encrypted-Media gyroscope picture-in-picture web-share >

            </iframe>
        </div> */}

        {type === "twitter" &&
        <div>
            twitter Link
        </div>
        
        }
        </div>
    )
}