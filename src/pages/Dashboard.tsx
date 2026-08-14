import { PlusIcons } from "../icons/PlusIcon";
import { Button } from "../component/ui/Button";
import { Card } from "../component/ui/Card";
import {CreateContentModal} from "../component/ui/CreateContentModal";
import { useState } from "react";
import {SideBar} from "../component/ui/SideBar";
function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);

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

          <div className="flex gap-4">
            {/* watch 1:42:20 */}
            <Card
              type="twitter"
              title="First Tweet"
              link="https://x.com/TUKAIGH90041966/status/1726897683154206972/photo/1"
            />
            <Card
              type="youtube"
              title="First video"
              link="https://www.youtube.com/watch?v=VrSbJ8-G7xU"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;