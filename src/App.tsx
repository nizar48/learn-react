import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
