import { PlusIcons } from "../icons/PlusIcon";
import { Button } from "../component/ui/Button";
import { Card } from "../component/ui/Card";
import {CreateContentModal} from "../component/ui/CreateContentModal";
import { useState } from "react";
import {SideBar} from "../component/ui/SideBar";
import { useContent } from "../hooks/useContent";

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent()

  const onButtonChange = () => {
    setModalOpen((modalOpen) => !modalOpen);
  };
  return (
    <>
      <div className="w-full">
        <div>
          <SideBar />
        </div>

        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
          <div className="flex p-4 justify-end">
            <CreateContentModal onClose={onButtonChange} open={modalOpen} />
            <div className="flex items-center gap-3 justify-end">
              <Button
                startIcon={<PlusIcons size="md" />}
                variant="primary"
                size="lg"
                text="Add Content"
                onClick={() => {
                  setModalOpen(true);
                }}
              />

              <Button
                startIcon={<PlusIcons size="md" />}
                variant="secondary"
                size="lg"
                text="Share"
              />
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            {content.map(({type,link,title})=>
             <Card
              type={type}
              title={title}
              link={link}
            />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;