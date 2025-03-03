/* 
  Notes:
    1. Put our elements and functionalities in a function; function-base.
    2. Elements are put in a return statement for them to render.
    3. Follows the PascalCasing.
*/

import "./App.css";
import {
  Starting,
  Welcome,
  ListRendering,
  ConditionalRendering,
  Hooks,
  Hooks2,
  LoginForm,
} from "./components";

const App = () => {
  const greeting = "Hello, welcome to React!";

  return (
    <div className="App">
      {/* <Starting /> */}
      <h1>{greeting}</h1>
      <p>React is a JS Library for building UIs.</p>
      {/* <Welcome name="John Doe" /> */}
      {/* <ListRendering /> */}
      {/* <ConditionalRendering /> */}
      {/* <Hooks /> */}
      {/* <Hooks2 /> */}
      <LoginForm />
    </div>
  );
};

export default App;
