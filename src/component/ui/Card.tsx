import { PlusIcons } from "../../icons/PlusIcon"

export const Card = ()=>{
    return(
        <div>
        <div className="p-8 bg-white rounded-md shadow-md outline-gray-200">
            <div className="flex justify-between mb-2 gap-4">
                <div className="flex items-center text-shadow-md">
                    <PlusIcons size="md"/>
                    <span className="pl-2">
                        project ideas
                    </span>
                </div>
                <div className="flex items-center pl-10">
                    <div className="pr-2 bg-gray-300">
                         <PlusIcons size="lg"/>
                    </div>
                    <div className="bg-gray-300">
                         <PlusIcons size="lg"/>
                    </div>
                   
                    
                </div>
            </div>
        </div>
        </div>
    )
}