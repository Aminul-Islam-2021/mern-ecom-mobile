import ProductCard from './ProductCard'



const products = [
  {
  id:1,
  name: "Wireless Headphones",
  price: 49.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm-DcNVARYKROyxkEzdFZ4k3w7Lyj-8FBrg&usqp=CAU"
},
 {
  id:2,
  name: "Wireless Headphones",
  price: 49.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm-DcNVARYKROyxkEzdFZ4k3w7Lyj-8FBrg&usqp=CAU"
},
 {
  id:3,
  name: "Wireless Headphones",
  price: 49.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm-DcNVARYKROyxkEzdFZ4k3w7Lyj-8FBrg&usqp=CAU"
},
{
  id:4,
  name: "Wireless Headphones",
  price: 49.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm-DcNVARYKROyxkEzdFZ4k3w7Lyj-8FBrg&usqp=CAU"
},
]

const App = () => {
  return (
    <div className="grid grid-cols-2 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
  );
};

export default App;