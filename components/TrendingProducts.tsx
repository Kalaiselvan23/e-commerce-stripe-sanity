
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import fetchData from '../utils/fetchData';
import ProductCard from "./ProductCard";
import GetProductLists from "./GetProductLists";

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
  return <div>
    <h2 className="font-semibold text-white my-4 text-3xl">Trending Products</h2>
    <GetProductLists productList={products}/>
  </div>
}

export default TrendingProducts
