const varieties = [
  {
    id: 1,
    name: "Uma (MO 16)",
    tag: "Best match for your soil & water record",
    fit: 94,
    duration: "115–120d",
    yield: "6.5 t/ha",
    pestRisk: "Medium",
    availableAt: "Kerala Seed Dev. Authority, Irinjalakuda · 6.5 km",

  },
  {
    id: 2,
    name: "Jyothi",
    tag: "Strong choice if rain comes early",
    fit: 87,
    duration: "125–130d",
    yield: "5.8 t/ha",
    pestRisk: "Low",
    availableAt: "Kerala Seed Dev. Authority, Irinjalakuda · 6.5 km",

  },
  {
    id: 3,
    name: "Kanchana",
    tag: "Good for flood-prone low fields",
    fit: 79,
    duration: "130–135d",
    yield: "5.2 t/ha",
    pestRisk: "Low",
    availableAt: "Krishi Bhavan, Chalakudy · 2.0 km",

  },
];

export default function Variety() {
  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Find a variety</h1>
        <p className="text-sm text-[#5C5448] mt-1">
          Matched to Chalakudy · Irrigated · Mundakan season
        </p>
      </div>

      <div className="px-5 mt-4 flex flex-col gap-3">
        {varieties.map((v) => (
          <div
            key={v.id}
            className="bg-white border border-[#E3D8C0] rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="p-3.5 flex justify-between items-start">
              <div>
                <div className="font-semibold text-[17px]">{v.name}</div>
                <div className="text-xs text-[#5C5448] mt-0.5">{v.tag}</div>
              </div>
              <div className="text-center shrink-0 ml-3">
                <div className="text-xl font-bold text-[#2D5016]">{v.fit}%</div>
                <div className="text-[9px] uppercase tracking-wide text-[#5C5448]">Fit</div>
              </div>
            </div>

            <div className="flex border-t border-[#E3D8C0]">
              <div className="flex-1 text-center py-2 border-r border-[#E3D8C0]">
                <div className="font-bold text-[13px]">{v.duration}</div>
                <div className="text-[10px] text-[#5C5448]">Duration</div>
              </div>
              <div className="flex-1 text-center py-2 border-r border-[#E3D8C0]">
                <div className="font-bold text-[13px]">{v.yield}</div>
                <div className="text-[10px] text-[#5C5448]">Avg yield</div>
              </div>
              <div className="flex-1 text-center py-2">
                <div className="font-bold text-[13px]">{v.pestRisk}</div>
                <div className="text-[10px] text-[#5C5448]">Pest risk</div>   
              </div>
              <div className="flex-1 text-center py-2">
                <div className="font-bold text-[13px]">{v.pestRisk}</div>
                <div className="text-[10px] text-[#5C5448]">Pest risk</div>
              </div>
            </div>

            <div className="border-t border-[#E3D8C0] px-3.5 py-2.5 flex items-center justify-between gap-2">
              <div className="text-xs">
                <span className="text-[#5C5448]">Available at: </span>
                <span className="font-semibold">{v.availableAt}</span>
              </div>
              <button className="w-9 h-9 rounded-[10px] bg-[#2D5016] text-white flex items-center justify-center text-sm shrink-0">
                📞
              </button>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}