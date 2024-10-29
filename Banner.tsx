import Link from 'next/link';

export default function Banner() {
  return (
    <div>

<div className="bg-blue-500 text-white py-20 px-4 text-center">
<h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
<p className="text-lg max-w-2xl mx-auto">
  Discover the best services tailored just for you. Start exploring today!
</p>
<button className="mt-6 px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
  Get Started
</button>
</div>
</div>
  )
}