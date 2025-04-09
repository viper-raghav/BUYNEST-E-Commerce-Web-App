import Hero from "./components/Hero";
import ProductsList from "./components/ProductsList";

export default function Home() {
  return (
    <div>
      <Hero/>

      <div className="pd-10 md:px-36 lg:px-48">
        <ProductsList/>
      </div>
    </div>
  );
}
