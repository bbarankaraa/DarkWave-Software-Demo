import Logo from '../../assets/darkwavefavico.png'
const Footer = () => {
    return (
        <div className="bg-gray-900 h-100 grid grid-cols-1 md:grid-cols-2 px-24 py-9">
            <div className="flex flex-col">
                <div className='flex items-center md:mb-0 mb-10'>
                    <img src={Logo} alt="logo" className='h-20 w-20 mr-5' />
                    <h1 className='text-white font-bold '>DarkWave Software</h1>
                </div>
                <p className='text-slate-400 md:mb-0 mb-10'>Web tasarımı projelerinizde profesyonel destek almak için uzman web yazılım ekibimizle iletişime geçin size özel tecrübe edilmiş ve başarılı olmuş çözüm önerileri sunalım. Unutmayın bilgi güçtür!</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-white text-3xl font-bold text-left'>Linkler</h1>
                <div className=''>
                <a href="" className='text-slate-500'>Ana Sayfa</a>
                </div>
                </div>
        </div>
    )
}

export default Footer