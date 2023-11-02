
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import fetchData from '../utils/fetchData';
import ProductCard from "./ProductCard";

const TrendingProducts = async() => {
  const products:ProductType[]=await fetchData(`*[_type == 'product' && likes > 10] {
    name,
    slug,
    category,
    price,
    likes,
    stock,
    sale,
    'imageUrls':image[].asset._ref,
  }
  `)
  console.log(products)
  return <div>
    <h2 className="font-semibold text-white my-4 text-3xl">Trending Products</h2>
    <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-4 max-md:grid-cols-3">
    {products.map((product)=>{
      return <ProductCard product={product} key={product._id}/>
    })}{products.map((product)=>{
      return <ProductCard product={product} key={product._id}/>
    })}{products.map((product)=>{
      return <ProductCard product={product} key={product._id}/>
    })}{products.map((product)=>{
      return <ProductCard product={product} key={product._id}/>
    })}
    </div>
  </div>
}

export default TrendingProducts
