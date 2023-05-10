import s from "./App.module.scss";
import { Sidebar, Tasks } from "./components";

function App() {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
