
import CatalogFilter from "../components/catalog/CatalogFilter";
import CatalogList from "../components/catalog/CatalogList";
import { Carousel } from 'flowbite-react';


function Catalogue() {
  return (
    <div className="space-y-6" >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div >
      <div className="grid grid-cols-2 gap-3 " >
        <CatalogFilter />
        <CatalogList />
      </div>
    </div>)
}

export default Catalogue;
