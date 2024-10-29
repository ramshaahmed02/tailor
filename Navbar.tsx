import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
     <nav className="bg-blue-600 p-4">
       <div className="max-w-7xl mx-auto flex items-center justify-between">
         <h1 className="text-white text-xl font-bold"></h1>
         <div className="space-x-4">
           <Link href="/" className="text-white hover:text-gray-200">Home</Link>
           <Link href="/Pages/About" className="text-white hover:text-gray-200">About</Link>
           <Link href="/Pages/About/Services" className="text-white hover:text-gray-200">Services</Link>
           <Link href="/Pages/About/Services/Contact" className="text-white hover:text-gray-200">Contact</Link>
         </div>
       </div>
   </nav>
</div>
  );
}
/* <nav className="bg-blue-600 p-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
  <h1 className="text-white text-2xl font-bold">Tailoring</h1>
  <div className="space-x-4">
    <a href="/" className="text-white hover:text-gray-200">Home</a>
    <a href="/about" className="text-white hover:text-gray-200">About</a>
    <a href="/services" className="text-white hover:text-gray-200">Services</a>
    <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
  </div>
</div>
</nav>
</div>
)
} */