import { prisma } from "../../lib/prisma";

export default async function Harvest() {
  const machineryOwners = await prisma.machineryOwner.findMany();

  return (
    <div className="min-h-screen bg-[#FDF8ED] pb-10">
      <div className="p-5 bg-white border-b border-[#E3D8C0]">
        <h1 className="text-xl font-semibold">Harvest help</h1>
        <p className="text-sm text-[#5C5448] mt-1">
          Owners near Chalakudy · Call directly to arrange
        </p>
      </div>

      <div className="px-5 mt-4 flex flex-col gap-3">
        {machineryOwners.map((owner) => (
          <div
            key={owner.id}
            className="bg-white border border-[#E3D8C0] rounded-2xl p-3.5 flex gap-3 items-start shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[#F4ECDA] border border-[#E3D8C0] flex items-center justify-center text-lg shrink-0">
              👨🏾
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm">{owner.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E5EEDB] text-[#2D5016]">
                  {owner.status}
                </span>
              </div>
              <div className="text-xs text-[#5C5448] mt-1 leading-relaxed">
                {owner.type}
                <br />
                {owner.location}
              </div>
            </div>
            <button className="w-10 h-10 rounded-[10px] bg-[#2D5016] text-white flex items-center justify-center text-base shrink-0">
              📞
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#5C5448] px-5 mt-4">
        Owners set their own availability and booking order. NelMitra only helps you find and call them.
      </p>
    </div>
  );
}