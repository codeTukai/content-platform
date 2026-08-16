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

  async function getContent() {
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

  async function deleteContent(id: string) {
    try {
      await axios.delete(
        `${DATABASE_URL}/api/v1/content/deleteContent/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      // Remove deleted item immediately from frontend
      setContents((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {
      console.error("Error deleting content:", error);
    }
  }

  useEffect(() => {
    getContent();
  }, []);

  return {
    contents,
    deleteContent,
    getContent,
  };
}