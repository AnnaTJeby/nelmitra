"use client";
import { useLanguage } from "../lib/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FDF8ED]">
      <header className="bg-[#2D5016] text-[#FDF8ED] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            <span className="font-semibold text-lg">NelMitra</span>
          </div>
          <button
            onClick={() => setLanguage(language === "en" ? "ml" : "en")}
            className="bg-white/15 rounded-full px-3 py-1.5 text-sm font-bold flex items-center gap-1.5"
          >
            <span>🌐</span>
            <span>{language === "en" ? "EN" : "ML"}</span>
          </button>
        </div>
        <div className="text-sm opacity-90 mt-1">{t("welcome")}</div>
      </header>

      <div className="m-4 bg-white rounded-2xl p-4 border border-[#E3D8C0] shadow-sm">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-xs uppercase tracking-wide text-[#5C5448] font-semibold">
            {t("yourFieldToday")}
          </span>
          <span className="text-lg font-semibold text-[#2D5016]">
            {t("stageTillering")}
          </span>
        </div>

        <div className="h-1.5 bg-[#F4ECDA] rounded-full mb-3 relative">
          <div className="h-full w-[42%] bg-gradient-to-r from-[#4A7A2E] to-[#E8A33D] rounded-full" />
        </div>

        <div className="flex justify-between text-[10px] text-[#5C5448]">
          <div className="text-center flex-1">
            <div className="w-2 h-2 rounded-full bg-[#4A7A2E] mx-auto mb-1" />
            {t("stageSowing")}
          </div>
          <div className="text-center flex-1 font-bold text-black">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8A33D] mx-auto mb-1 ring-3 ring-[#E8A33D]/25" />
            {t("stageGrowing")}
          </div>
          <div className="text-center flex-1">
            <div className="w-2 h-2 rounded-full bg-[#E3D8C0] mx-auto mb-1" />
            {t("stageFlowering")}
          </div>
          <div className="text-center flex-1">
            <div className="w-2 h-2 rounded-full bg-[#E3D8C0] mx-auto mb-1" />
            {t("stageHarvest")}
          </div>
          <div className="text-center flex-1">
            <div className="w-2 h-2 rounded-full bg-[#E3D8C0] mx-auto mb-1" />
            {t("stageAfterHarvest")}
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <span className="text-xs uppercase tracking-wide text-[#5C5448] font-bold">
          {t("whatYouNeedNow")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 px-5 mt-2.5">
        <Link href="/variety" className="bg-white border border-[#E3D8C0] rounded-2xl p-4 text-left active:scale-95 transition-transform block">
          <div className="w-9 h-9 rounded-[10px] bg-[#E5EEDB] flex items-center justify-center text-lg mb-2">
            🌱
          </div>
          <div className="font-bold text-sm">{t("varietyTitle")}</div>
          <div className="text-xs text-[#5C5448] mt-0.5">{t("varietySub")}</div>
        </Link>

        <Link href="/harvest" className="bg-white border border-[#E3D8C0] rounded-2xl p-4 text-left active:scale-95 transition-transform block">
          <div className="w-9 h-9 rounded-[10px] bg-[#EBE0D2] flex items-center justify-center text-lg mb-2">
            🚜
          </div>
          <div className="font-bold text-sm">{t("harvestCardTitle")}</div>
          <div className="text-xs text-[#5C5448] mt-0.5">{t("harvestCardSub")}</div>
        </Link>

        <Link href="/sell" className="bg-white border border-[#E3D8C0] rounded-2xl p-4 text-left active:scale-95 transition-transform block">
          <div className="w-9 h-9 rounded-[10px] bg-[#FBE9CC] flex items-center justify-center text-lg mb-2">
            💰
          </div>
          <div className="font-bold text-sm">{t("sellTitle")}</div>
          <div className="text-xs text-[#5C5448] mt-0.5">{t("sellSub")}</div>
        </Link>

        <Link href="/officers" className="bg-white border border-[#E3D8C0] rounded-2xl p-4 text-left active:scale-95 transition-transform block">
          <div className="w-9 h-9 rounded-[10px] bg-[#F6DAD4] flex items-center justify-center text-lg mb-2">
            📞
          </div>
          <div className="font-bold text-sm">{t("officerTitle")}</div>
          <div className="text-xs text-[#5C5448] mt-0.5">{t("officerSub")}</div>
        </Link>

        <Link href="/hay" className="col-span-2 bg-white border border-[#E3D8C0] rounded-2xl p-4 text-left active:scale-95 transition-transform block">
          <div className="w-9 h-9 rounded-[10px] bg-[#EBE0D2] flex items-center justify-center text-lg mb-2">
            🌿
          </div>
          <div className="font-bold text-sm">{t("hayTitle")}</div>
          <div className="text-xs text-[#5C5448] mt-0.5">{t("haySub")}</div>
        </Link>
      </div>
    </div>
  );
}