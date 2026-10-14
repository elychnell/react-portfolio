function Devcard() {
  return (
    <div className="flex h-full w-full max-w-lg min-w-0 flex-col rounded-[1.35rem] border border-[#5364ed]/15 bg-[#fbfbfd] p-5 sm:p-7">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#ff746c]"></span>
        <span className="size-2.5 rounded-full bg-[#ffce69]"></span>
        <span className="size-2.5 rounded-full bg-[#6fd59a]"></span>
      </div>
      <div className="flex flex-1 items-center justify-center p-2">
        <div className="relative w-full max-w-md">
        <img
        src="/img/Emil_Lychnell2.webp"
        alt="Bild på Emil"
        className="w-full rounded-lg"
        />
          <div className="absolute -bottom-3 -right-4 rounded-full border-4 border-[#fbfbfd] bg-[#151824] px-4 py-2 font-mono text-xs text-white">&lt;/&gt;</div>
          </div>
          </div>
          <div className="flex items-end justify-between border-t border-[#151824]/8 pt-4">
          <span className="font-mono text-xs text-[#6E7281]">emil.dev</span>
          <span className="flex items-center gap-2 text-xs font-semibold">
            <span className="size-2 rounded-full bg-[#43b97b]"></span>Tillgänglig för praktik</span>
            </div>
            </div>
  )
}

export default Devcard