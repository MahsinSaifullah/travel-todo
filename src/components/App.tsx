import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export const App = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleFormSubmit} />
      <PackingList />
      <Stats />
    </div>
  );
};
