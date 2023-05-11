import { Toaster } from "sonner";
import { Sidebar, Tasks } from "./features";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.wrapper}>
      <Toaster richColors />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
