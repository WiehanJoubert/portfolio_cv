import './tailwind.css';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl font-bold text-center">Hello, Tailwind CSS!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
};

export default App;
