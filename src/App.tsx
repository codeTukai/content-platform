import { PlusIcons } from "./component/icons/PlusIcon";
import { Button } from "./component/ui/Button";
import "./index.css";
function App() {
  return (
    <div className="flex pb-4">
      <div>
        <Button
          startIcon={<PlusIcons size="md" />}
          endIcon={<PlusIcons size="lg" />}
          variant="primary"
          size="lg"
          text="share"
        />
      </div>
      <div className="pl-2">
        <Button
          startIcon={<PlusIcons size="md" />}
          endIcon={<PlusIcons size="lg" />}
          variant="secondary"
          size="lg"
          text="Add Content"
        />
      </div>
      {/* <div><Button variant="primary" size="md" text="Add content" /></div>
<span><Button variant="primary" size="lg" text="Button" /></span> */}
    </div>
  );
}

export default App;
