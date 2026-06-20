import { createHayListing } from "./actions";

export default function PostHay() {
  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Post to the hay board</h1>
        <p className="text-sm text-[#5C5448] mt-1">Takes less than a minute</p>
      </div>

      <form action={createHayListing} className="p-5 flex flex-col gap-4">
        <div>
          <label className="block text-xs font-bold mb-1.5">I am...</label>
          <select
            name="type"
            required
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          >
            <option value="selling">Selling hay</option>
            <option value="buying">Buying hay</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">Your name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Thomas Varghese"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">Phone number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="e.g. 9847012345"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">Your location</label>
          <input
            type="text"
            name="location"
            required
            placeholder="Village / Panchayat"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">
            Quantity (approximate is fine)
          </label>
          <input
            type="text"
            name="quantity"
            required
            placeholder="e.g. 3 acres worth, or 200 bundles"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">Purpose (optional)</label>
          <input
            type="text"
            name="purpose"
            placeholder="e.g. Cattle feed"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5">
            Price expectation (optional)
          </label>
          <input
            type="text"
            name="price"
            placeholder="e.g. negotiable, or ₹2,000/acre"
            className="w-full p-2.5 rounded-lg border-[1.5px] border-[#E3D8C0]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#2D5016] text-white font-bold py-3 rounded-xl mt-2"
        >
          Post listing
        </button>
      </form>
    </div>
  );
}