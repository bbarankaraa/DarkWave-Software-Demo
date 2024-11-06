import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import Zafervip1 from "../assets/zafervip/zafervip1.png"
import Zafervip2 from "../assets/zafervip/zafervip2.png"
import Zafervip3 from "../assets/zafervip/zafervip3.png"
import { useEffect } from 'react';
const Zafervip = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center my-10 px-28">
        <h1 className="py-10 text-4xl font-bold">Zafer Vip Transfer Site İçi Görseller</h1>
        <p className="">Zafer Vip Transfer ile sade kullanıcı dostu web site tasarımı  gerçekleştirdik. Kullanıcıların diğer kullanıcıların değerlendirmelerini görebileceği bir kısım ekledik ve bu sayede müşteri arttırma odaklı bir çalışma yaptık.</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center my-10">
          <img className="h-[500px] rounded-2xl" src={Zafervip1} alt="photo1" />
          <img className="h-[500px] rounded-2xl" src={Zafervip2} alt="photo2" />
          <img className="h-[500px] rounded-2xl" src={Zafervip3} alt="photo3" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Zafervip