function Navbar() {
  return (
    <div className=" h-[12vh] flex justify-center items-center bg-slate-800 text-slate-300">
        <ul className="flex gap-20">
            <li className="hover:text-orange-400 hover:cursor-pointer">Home</li>
            <li className="hover:text-orange-400 hover:cursor-pointer">About</li>
            <li className="hover:text-orange-400 hover:cursor-pointer">Contact</li>
            <li className="hover:text-orange-400 hover:cursor-pointer">Services</li>
        </ul>
    </div>
  )
}

export default Navbar