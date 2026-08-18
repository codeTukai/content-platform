import { DeleteIcon } from "../../icons/DeleteIcon";
import { PlusIcons } from "../../icons/PlusIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  onDelete: () => void;
}

function getYoutubeId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);


    if (
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtube.com"
    ) {
      return parsedUrl.searchParams.get("v");
    }


    if (
      parsedUrl.hostname === "youtu.be" ||
      parsedUrl.hostname === "www.youtu.be"
    ) {
      return parsedUrl.pathname.substring(1).split("/")[0];
    }

    return null;
  } catch (error) {
    console.error("Invalid URL:", url);
    return null;
  }
}

export const Card = ({
  title,
  link,
  type,
  onDelete,
}: CardProps) => {
  const youtubeId =
    type === "youtube"
      ? getYoutubeId(link)
      : null;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

     
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3">

       
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
            <PlusIcons size="md" />
          </div>

          <h3
            className="truncate text-sm font-semibold text-gray-800"
            title={title}
          >
            {title}
          </h3>
        </div>

       
        <div className="flex shrink-0 gap-1">

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <ShareIcon size="md" />
          
          </a>

          <button
           onClick={onDelete}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <DeleteIcon size="md" />
          </button>

        </div>
      </div>

     
      {type === "youtube" && youtubeId && (
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}

      {type === "youtube" && !youtubeId && (
        <div className="flex aspect-video items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-500">
            Invalid YouTube URL
          </p>
        </div>
      )}

      {type === "twitter" && (
        <div className="p-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            View Twitter post →
          </a>
        </div>
      )}
    </div>
  );
};