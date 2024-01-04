import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={() => {}} />
      <PackingList />
      <Stats />
    </div>
  );
};
