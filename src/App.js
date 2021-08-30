import "./app.scss";
import Header from "./components/header/index.jsx";
import HeadLine from "./components/headLines";
const temArr = [
  {
    fName: "joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onLineStatus: true,
  },
];
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          temArr={temArr}
          header="Posts"
          desc="Click the button to render posts"
        />
      </section>
    </div>
  );
}

export default App;
