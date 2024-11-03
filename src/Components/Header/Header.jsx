const Header = () => {
  return (
    <div className='h-100 bg-white flex flex-col text-center p-9'>
        <h1 className='text-4xl md:text-5xl p-3'>DarkWave Software</h1>
        <p className='text-slate-500 text-xl p-3'>Kullanıcı dostu ve mobil uyumlu bir web siteniz olsun. <br /> Bilişim Mühendisleri tarafından sektörde fark yaratabileceğiniz çözümler sunuyoruz.</p>
        <div className='mt-5'>
            <a href="" className='bg-blue-400 px-5 py-3 rounded-3xl text-white font-bold duration-100 hover:border-solid hover:border-2 hover:border-black hover:bg-white hover:text-black hover:shadow-xl'>İletişime Geç</a>
        </div>
    </div>
  )
}

export default Header