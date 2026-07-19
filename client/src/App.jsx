import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductForm from "./components/ProductForm";
import OutputSection from "./components/OutputSection";

function App() {
  const [campaign, setCampaign] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <ProductForm setCampaign={setCampaign} />

      <OutputSection campaign={campaign} />
    </div>
  );
}

export default App;