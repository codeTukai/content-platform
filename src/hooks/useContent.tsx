import axios from "axios";
import { useEffect, useState } from "react";
import { DATABASE_URL } from "../pages/config";

export function useContent(){
    const [contents,setContents] = useState([])

        useEffect(()=>{
           axios.get(`${DATABASE_URL}/api/v1/content/addContent`,{
            headers:{
                token: localStorage.getItem("token")
            }
           })
           .then((response)=>{
            setContents(response.data.content)
           })
          
        },[])

    return contents
}