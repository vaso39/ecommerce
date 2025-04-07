import "./App.css";
import Description from "./components/layout/Description";
import Nav from "./components/layout/Nav";
import ProductImage from "./components/layout/ProductImage";
import useMobileScreen from "./components/hook/useMobileScreen";

function App() {
  const mobileScreen = useMobileScreen();

  return (
    <>
      <Nav />
      <div className={`flex ${mobileScreen ? "flex-row" : "flex-col"}`}>
        <ProductImage />
        <Description />
      </div>
    </>
  );
}

export default App;
