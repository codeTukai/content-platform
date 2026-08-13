import { PlusIcons } from "./icons/PlusIcon";
import { Button } from "./component/ui/Button";
import "./index.css";
import { Card } from "./component/ui/Card";
function App() {
  return (
    <div className="flex pb-4 justify-between">
      <Card />
      <div className="flex items-center gap-3">

      <div>
        <Button
          startIcon={<PlusIcons size="md" />}
          variant="primary"
          size="lg"
          text="Add Content"
        />
      </div>
      <div className="pl-2">
        <Button
          startIcon={<PlusIcons size="md" />}
          variant="secondary"
          size="lg"
          text="Share"
        />
      </div>
      </div>
      
    </div>
  );
}

export default App;
