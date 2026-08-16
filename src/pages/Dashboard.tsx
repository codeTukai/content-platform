import { useState } from "react";
import { PlusIcons } from "../icons/PlusIcon";
import { Button } from "../component/ui/Button";
import { Card } from "../component/ui/Card";
import { CreateContentModal } from "../component/ui/CreateContentModal";
import { SideBar } from "../component/ui/SideBar";
import { useContent } from "../hooks/useContent";

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);

  const { contents, refreshContent, deleteContent } = useContent();
  

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleContentAdded = async () => {
    await refreshContent();
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">

    
      <SideBar />

    
      <main className="ml-72 min-h-screen px-8 py-6">

     
        <header className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Content
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and organize your saved content
            </p>
          </div>

        
          <div className="flex items-center gap-3">

            <Button
              startIcon={<PlusIcons size="md" />}
              variant="primary"
              size="md"
              text="Add Content"
              onClick={() => setModalOpen(true)}
            />

            <Button
              startIcon={<PlusIcons size="md" />}
              variant="secondary"
              size="md"
              text="Share"
            />

          </div>
        </header>

       
        <CreateContentModal
          open={modalOpen}
          onClose={closeModal}
          onContentAdded={handleContentAdded}
        />

       
        {contents.length === 0 ? (

          <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">

            <div className="text-center">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <PlusIcons size="lg" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                No content yet
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Start saving your favorite content.
              </p>

              <div className="mt-5">
                <Button
                  startIcon={<PlusIcons size="md" />}
                  variant="primary"
                  size="md"
                  text="Add Content"
                  onClick={() => setModalOpen(true)}
                />
              </div>

            </div>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

            {contents.map(({ _id, type, link, title }) => (
              <Card
                key={_id}
                type={type}
                title={title}
                link={link}
                onDelete={()=> deleteContent(_id)}
              />
            ))}

          </div>

        )}

      </main>
    </div>
  );
}

export default DashBoard;