import { useState } from "react";
import API from "../services/api";

function ProductForm({ setCampaign }) {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    audience: "",
    goal: "Brand Awareness",
    tone: "Professional",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await API.post(
        "/campaign/generate",
        formData
      );

      console.log("✅ Response from backend:");
      setCampaign(response.data.campaign);

    } catch (error) {
      console.error("❌ Error:", error);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

        <h2 className="mb-8 text-3xl font-bold">
          Product Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Product Name
            </label>

            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="CampaignPilot AI"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Product Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Audience */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Target Audience
            </label>

            <input
              type="text"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              placeholder="Students, Founders..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Goal */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Campaign Goal
            </label>

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            >
              <option>Brand Awareness</option>
              <option>Lead Generation</option>
              <option>Sales</option>
              <option>App Downloads</option>
              <option>Website Traffic</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Tone
            </label>

            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            >
              <option>Professional</option>
              <option>Friendly</option>
              <option>Funny</option>
              <option>Luxury</option>
              <option>Minimal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold hover:bg-blue-700 transition"
          >
            Generate Campaign 🚀
          </button>

        </form>

      </div>
    </section>
  );
}

export default ProductForm;