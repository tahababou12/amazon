export function ProductGrid() {
  const products = [
    {
      title: "Today's Deals",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
      deal: "Up to 70% off",
    },
    {
      title: "New Arrivals in Toys",
      image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&q=80&w=500",
      deal: "Shop now",
    },
    {
      title: "Beauty picks",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500",
      deal: "See more",
    },
    {
      title: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=500",
      deal: "See more",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {products.map((product) => (
        <div key={product.title} className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <a href="#" className="text-[#007185] mt-2 inline-block hover:text-[#c7511f] hover:underline">
            {product.deal}
          </a>
        </div>
      ))}
    </div>
  )
}
