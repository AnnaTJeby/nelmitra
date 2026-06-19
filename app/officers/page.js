const officers = [
  {
    id: 1,
    icon: "🧑🏾‍🌾",
    name: "Krishi Bhavan, Chalakudy",
    detail: "Agricultural Officer: Smt. Latha P.",
    hours: "Open 10am–5pm, Mon–Sat",
    showWhatsapp: true,
  },
  {
    id: 2,
    icon: "☎️",
    name: "Kisan Call Centre",
    detail: "Toll-free helpline · All India",
    hours: "6am–10pm, every day",
    showWhatsapp: false,
  },
  {
    id: 3,
    icon: "🧪",
    name: "Soil Testing Lab, Irinjalakuda",
    detail: "Pesticide & soil queries",
    hours: "12.4 km away",
    showWhatsapp: false,
  },
];

export default function Officers() {
  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Talk to an officer</h1>
        <p className="text-sm text-[#5C5448] mt-1">
          Krishi Bhavan & support, by panchayat
        </p>
      </div>

      <div className="px-5 mt-4 flex flex-col gap-3">
        {officers.map((officer) => (
          <div
            key={officer.id}
            className="bg-white border border-[#E3D8C0] rounded-2xl p-3.5 flex gap-3 items-start shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[#F4ECDA] border border-[#E3D8C0] flex items-center justify-center text-lg shrink-0">
              {officer.icon}
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">{officer.name}</div>
              <div className="text-xs text-[#5C5448] mt-1 leading-relaxed">
                {officer.detail}
                <br />
                {officer.hours}
              </div>

              <div className="flex gap-2 mt-2.5">
                <button className="flex-1 py-2 rounded-[9px] bg-[#2D5016] text-white text-xs font-bold flex items-center justify-center gap-1.5">
                  📞 Call
                </button>
                {officer.showWhatsapp && (
                  <button className="flex-1 py-2 rounded-[9px] border-[1.5px] border-[#2D5016] text-[#2D5016] text-xs font-bold flex items-center justify-center gap-1.5">
                    💬 WhatsApp
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}