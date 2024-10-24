import logo from '../../assets/darkwave.png'
const About = () => {
  return (
    <div className='mt-28 bg-gray-300 py-16'>
        <h1 className='text-center text-4xl font-bold text-black'>Biz Kimiz ?</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:px-48 px-10 items-center py-12'>
        <div className='flex justify-center sm:justify-start'>
            <img src={logo} alt="logo" className='rounded-full sm:h-[250px] sm:w-[250px] h-[200px] w-[200px] sm:my-0 my-10' />
        </div>
        <div className='flex flex-col gap-5'>
            <h2 className='text-3xl text-slate-500'>DarkWave Software</h2>
            <p className='text-black'>Dakware Software olarak, yenilikçi web yazılım çözümleri sunarak işletmelerin dijital dönüşüm süreçlerine katkıda bulunmayı hedefliyoruz. Müşteri odaklı yaklaşımımız ve teknik uzmanlığımız ile sektördeki en güncel teknolojileri kullanarak, iş süreçlerinizi daha verimli hale getiren tasarımlar ve uygulamalar geliştirmekteyiz.</p>
            <a href="" className='bg-blue-400 px-5 py-3 rounded-3xl text-white font-bold duration-100 hover:border-solid hover:border-2 hover:border-black hover:bg-white hover:text-black hover:shadow-xl w-[140px]'>İletişime Geç</a>
        </div>
        </div>
    </div>
  )
}

export default About