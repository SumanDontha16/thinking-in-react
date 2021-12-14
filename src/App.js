import Header from "./components/header";
import FilterableProductTable from "./Pages/FilterableProductTable";
import { PRODUCTS } from "./products";

function App() {
  return (
    <div className="container py-4">
      <Header />
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
