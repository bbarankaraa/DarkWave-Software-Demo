import { links } from "./Mylinks";
const Navlinks = () => {
    return (
        <div className='flex gap-8'>
            {links.map((link) => (
                <div key={link.id}>
                    <div className="group">
                        <h1 className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-3xl md:text-sm font-bold cursor-pointer'>
                            {link.name}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Navlinks