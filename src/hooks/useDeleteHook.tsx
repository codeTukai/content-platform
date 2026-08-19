// // import axios from "axios";
// import { useEffect, useState } from "react";
// import { DATABASE_URL } from "../pages/config";

// // interface Content {
// //   _id: string;
// //   title: string;
// //   link: string;
// //   type: "youtube" | "twitter";
// // }

// export function useDeleteContent(id:string) {

//   const [deletes, setDeletes] = useState([])
 

//   const backend = `${DATABASE_URL}/api/v1/content/deleteContent/${id}`

//   useEffect(()=>{
//         fetch(backend)
//         .then((res)=>{
//         if (!res.ok) throw new Error("Failed to fetch items");
//         return res.json();
//         })
//         .then((data)=>setDeletes(data))
//         .catch((err) => console.error(err));
//   },[])



//   async function deleteContent(id:string) {
//     try {
//       const res = await fetch(
//         `${backend}/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Failed to delete item");
//       }

//       // Remove deleted item immediately from frontend
//       setDeletes((prev) =>
//         prev.filter((item) => item._id !== id)
//       );

//     } catch (error) {
//       console.error("Error deleting content:", error);
//     }
//   }



//   return {
//     deletes,
//     deleteContent
//   };
// }