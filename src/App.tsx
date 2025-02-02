import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-[1500px] mx-auto px-4">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
