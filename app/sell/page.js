import { prisma } from "../../lib/prisma";

export default async function Sell() {
  const buyers = await prisma.buyer.findMany();

  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Sell your paddy</h1>
        <p className="text-sm text-[#5C5448] mt-1">
          Today's rates & buyers near you
        </p>
      </div>

      <div className="mx-5 mt-4 bg-[#C97F1E] text-[#2B1A06] rounded-2xl px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">📈</span>
          <div>
            <div className="font-semibold text-lg">₹28.50 / kg</div>
            <div className="text-[11px] opacity-85">Average paddy price today</div>
          </div>
        </div>
        <div className="text-[11px] text-right max-w-[110px] opacity-90 leading-snug">
          ↑ ₹0.50 from last week
        </div>
      </div>

      <div className="px-5 mt-5">
        <span className="text-xs uppercase tracking-wide text-[#5C5448] font-bold">
          Buyers accepting paddy
        </span>
      </div>

      <div className="px-5 mt-2.5 flex flex-col gap-3">
        {buyers.map((b) => (
          <div
            key={b.id}
            className="bg-white border border-[#E3D8C0] rounded-2xl p-3.5 flex gap-3 items-start shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[#F4ECDA] border border-[#E3D8C0] flex items-center justify-center text-lg shrink-0">
              🏭
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">{b.name}</div>
              <div className="text-xs text-[#5C5448] mt-1 leading-relaxed">
                {b.price} · {b.detail}
                <br />
                {b.status} · {b.location}
              </div>
            </div>
            <button className="w-10 h-10 rounded-[10px] bg-[#2D5016] text-white flex items-center justify-center text-base shrink-0">
              📞
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}