import axios from "axios";
import { useEffect, useState } from "react";
import { DATABASE_URL } from "../pages/config";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);

  // Get all content
  async function refreshContent() {
    try {
      const response = await axios.get(
        `${DATABASE_URL}/api/v1/content/getContent`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setContents(response.data.content);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  }

  // Delete one content
  async function deleteContent(id: string) {
    try {
      await axios.delete(
        `${DATABASE_URL}/api/v1/content/deleteContent/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
          data:{
            contentId: id,
          }
        }
      );

      // Immediately remove it from UI
      setContents((prevContents) =>
        prevContents.filter((content) => content._id !== id)
      );

    } catch (error) {
      console.error("Error deleting content:", error);
    }
  }

  // Only fetch when component mounts
  useEffect(() => {
    refreshContent();
  }, []);

  return {
    contents,
    refreshContent,
    deleteContent,
  };
}