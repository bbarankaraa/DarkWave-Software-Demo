const Prices = () => {
  return (
    <div className="mt-11">
        <h1 className="text-center font-bold text-5xl">Fiyatlandırma</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-20 place-items-center gap-10">
        <div className="shadow-xl border border-gray-300 rounded-3xl py-5 px-5 w-[300px] h-[500px]">
            <h1 className="text-[18px] font-semibold">Standart Web Sitesi</h1>
            <p className="text-base text-slate-500 mt-4">Küçük işletmeler için idealdir.</p>
            <h1 className="text-4xl font-bold mt-6">4000₺</h1>
            <div className="mt-4 mb-10">
            <p className="text-slate-400">4 Sayfa</p>
            <p className="text-slate-400">3 Günde Teslim</p>
            <p className="text-slate-400">Ücretsiz Domain + Hosting</p>
            <p className="text-slate-400">Mobil Uyumlu Yapı</p>
            <p className="text-slate-400">Sınırsız Revize Hakkı</p>
            </div>
            <button className="bg-slate-800 py-2 px-3 rounded-md text-white font-bold duration-100 hover:border-solid hover:border-2 hover:border-black hover:bg-white hover:text-black hover:shadow-xl w-64">İletişime Geç</button>
        </div>
        <div className="shadow-xl border-2 border-purple-700 rounded-3xl py-5 px-5 w-[300px] h-[500px]">
            <h1 className="text-[18px] font-semibold">Premium Web Sitesi <br /><span className="text-slate-500 text-sm">(Tercih Edilen)</span></h1>
            <p className="text-base text-slate-500 mt-4">Orta işletmeler için idealdir.</p>
            <h1 className="text-4xl font-bold mt-6">6000₺</h1>
            <div className="mt-4 mb-10">
            <p className="text-slate-400">Sınırsız Sayfa</p>
            <p className="text-slate-400">Sayfa Sayısına Göre Teslim Süresi</p>
            <p className="text-slate-400">Ücretsiz Domain + Hosting</p>
            <p className="text-slate-400">Mobil Uyumlu Yapı</p>
            <p className="text-slate-400">Sınırsız Revize Hakkı</p>
            </div>
            <button className="bg-slate-800 py-2 px-3 rounded-md text-white font-bold duration-100 hover:border-solid hover:border-2 hover:border-black hover:bg-white hover:text-black hover:shadow-xl w-64">İletişime Geç</button>
        </div>
    </div>
    </div>
  )
}

export default Prices