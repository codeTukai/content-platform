import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { DATABASE_URL } from "../../pages/config";



type TypeProps = "youtube" | "twitter"

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
  onContentAdded: () => void;
}

export function CreateContentModal({
  open,
  onClose,
  onContentAdded,
}: CreateContentModalProps) {
  const [type, setType] = useState<TypeProps>("youtube");

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) {
      alert("Please enter title and link");
      return false;
    }

    try {
      await axios.post(
        `${DATABASE_URL}/api/v1/content/addContent`,
        {
          title,
          type,
          link,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      return true;
    } catch (error) {
      console.error("Error adding content:", error);
      alert("Failed to add content");
      return false;
    }
  }

  async function handleSubmit() {
    const success = await addContent();

    if (success) {
      await onContentAdded();

      if (titleRef.current) {
        titleRef.current.value = "";
      }

      if (linkRef.current) {
        linkRef.current.value = "";
      }
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">

      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

    
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Add Content
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Save your favorite content
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          >
            <CrossIcon size="lg" />
          </button>

        </div>

      
        <div className="space-y-6 px-6 py-6">

        
          <div className="space-y-4">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>

              <InputBox
                ref={titleRef}
                placeholder="Enter content title"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Link
              </label>

              <InputBox
                ref={linkRef}
                placeholder="Paste YouTube or Twitter link"
              />
            </div>

          </div>

        
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              Content Type
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => setType("youtube")}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  type === "youtube"
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                YouTube
              </button>

              <button
                type="button"
                onClick={() => setType("twitter")}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  type === "twitter"
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Twitter
              </button>

            </div>
          </div>

       
          <div className="rounded-xl bg-gray-50 px-4 py-3">
            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Selected type
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold capitalize text-purple-700">
                {type}
              </span>

            </div>
          </div>

        </div>

      
        <div className="flex justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <Button
            onClick={handleSubmit}
            variant="primary"
            size="md"
            text="Add Content"
          />

        </div>

      </div>
    </div>
  );
}