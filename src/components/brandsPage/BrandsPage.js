import React from "react";
import { useParams } from "react-router-dom";
import { brandsProducts } from "../../data/brandsData";

const BrandsPage = () => {
  const { brandName } = useParams();

  
  const allBrandProducts = brandsProducts.flatMap(item => item.brandPorducts || []);

  
  const filteredProducts = allBrandProducts.filter(product =>
    product.brandProductName.toLowerCase().includes(brandName.toLowerCase())
  );

  const uniqueBrandName = filteredProducts.filter((product, index, self) => index === self.findIndex(p => p.brandProductName === product.brandProductName))

  return (
    <div className="w-full flex justify-center items-center py-10">
       
        <div className="flex flex-col gap-4">

          <div className="">
            {
              uniqueBrandName.map((product, index) => (
                <div key={index} className="">{product.brandProductName}</div>
              ))
            }
          </div>

        </div>

    </div>
  );
};

export default BrandsPage;
