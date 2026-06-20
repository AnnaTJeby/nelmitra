import { prisma } from "../../lib/prisma";

export default async function Hay() {
  const listings = await prisma.hayListing.findMany();

  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Straw & hay board</h1>
        <p className="text-sm text-[#5C5448] mt-1">
          Post what you have or what you need
        </p>
      </div>

      <div className="px-5 mt-4 flex flex-col gap-3">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white border border-[#E3D8C0] rounded-2xl p-3.5 flex gap-3 items-start shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[#F4ECDA] border border-[#E3D8C0] flex items-center justify-center text-lg shrink-0">
              {listing.type === "buying" ? "🐄" : "🧑🏾‍🌾"}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm">{listing.name}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    listing.type === "buying"
                      ? "bg-[#DCE7F2] text-[#2A5478]"
                      : "bg-[#FBE9CC] text-[#C97F1E]"
                  }`}
                >
                  {listing.type === "buying" ? "Buying" : "Selling"}
                </span>
              </div>
              <div className="text-xs text-[#5C5448] mt-1 leading-relaxed">
                {listing.quantity}
                {listing.purpose && ` · ${listing.purpose}`}
                {listing.price && ` · ${listing.price}`}
                <br />
                {listing.location}
              </div>
            </div>
            <button className="w-10 h-10 rounded-[10px] bg-[#2D5016] text-white flex items-center justify-center text-base shrink-0">
              📞
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#5C5448] px-5 mt-4">
        Listings expire after 30 days. Contact people directly — NelMitra does not handle payment or delivery.
      </p>
    </div>
  );
}