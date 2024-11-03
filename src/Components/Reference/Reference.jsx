import karenvip from '../../assets/karenvip.jpg'
import zafervip from '../../assets/zafervip.png'
import { Link } from 'react-router-dom'

const Reference = () => {
    const referanslar = [
        {
            name: "Karen Vip Transfer",
            logo: karenvip,
            id: 1,
            link : "/zafervip"
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:px-48 px-10 items-center py-12'>
                {referanslar.map((referans) => (
                    <div key={referans.id} className='flex justify-center flex-col items-center'>
                        <img src={referans.logo} alt="logo" className='h-60 w-60 transition duration-300 hover:scale-110' />
                        <Link to={referans.link}>Site Görselleri</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reference