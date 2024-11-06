import { useEffect } from 'react';
import karenvip from '../../assets/karenvip.jpg'
import zafervip from '../../assets/zafervip.png'
import { Link } from 'react-router-dom'


const Reference = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const referanslar = [
        {
            name: "Karen Vip Transfer",
            logo: karenvip,
            id: 1,
            link: "/karenvip"
        },
        {
            name: "Zafer Vip Transfer",
            logo: zafervip,
            id: 2,
            link: "/zafervip"
        }
    ]
    return (
        <div className='py-16'>
            <h1 className='text-center text-4xl font-bold text-black'>Referanslarımız</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:px-48 px-10 items-center py-12 gap-10 sm:gap-0'>
                {referanslar.map((referans) => (
                    <div key={referans.id} className='flex justify-center flex-col items-center '>
                        <Link to={referans.link}><img src={referans.logo} alt="logo" className='h-60 w-60 transition duration-300 hover:scale-110' /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reference