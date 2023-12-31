 "use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';

import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import axios from 'axios';

interface CategoryProps {
  products: any[];
}



const Category: React.FC<CategoryProps> = ({ products }) => {
console.log(products,'products');

    const categoryID = products[0].id;
    const [items, setItems] = useState<any[]>([]);
    const [allItems, setAllItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState('All');
    const [filter, setFilter] = useState('Latest');
 
    useEffect(() => {
      axios
        .get(`http://localhost:8000/products/category/${categoryID}`)
        .then((res) => {
          const sortedProducts = res.data.sort((a: { rate: any }, b: { rate: any }) =>
            b.rate - a.rate
          );
          const topFourProducts = sortedProducts.slice(0, 4);
          setItems(topFourProducts);
          setAllItems(sortedProducts);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, [categoryID]);
    if (!products || products.length === 0) {
        return <p>Loading products...</p>;
      }
    
  const TabTitle = (newTitle:string) => {
    return (document.title = newTitle);
  };
  TabTitle(products[0].name);

const handleShowChange = (event: SelectChangeEvent<string>) => {
  setShow(event.target.value);
};

const handleFilterChange = (event: SelectChangeEvent<string>) => {
  setFilter(event.target.value);
};


  const handleShowMore = () => {
    setItems(allItems);
  };

  return (
    <div className="category__container">
    <div className="category">
      <div className="category__header__container">
        <div className="category__header__big">
          <div className="category__header">
            <h2>{products[0].name} s Fashion</h2>
          </div>
          <div className="category__header__line"></div>
        </div>
        <div className="category__sort">
          <div className="show__filter">
            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Show</InputLabel>
                <Select value={show} label="Show" onChange={handleShowChange}>
                  <MenuItem value={"All"}>All</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="filter__by">
            <div className="show__filter">
              <Box sx={{ width: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Filter by</InputLabel>
                  <Select
                    value={filter}
                    label="Filter"
                    onChange={handleFilterChange}
                  >
                    <MenuItem value={"Latest"}>Latest</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="category__card__container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="category__product__card">
            {/* {items.map((data) => (
              <ItemCard
                key={data.id}
                product={data}
                category={products[0].category}
              />
            ))} */}
            <div className="show__more__action">
              <Button
                variant="outlined"
                sx={[
                  {
                    width: "200px",
                    height: "50px",
                    borderRadius: "20px",
                    fontWeight: "700",
                    backgroundColor: "#FFE26E",
                    borderColor: "#FFE26E",
                    color: "black",
                  },
                  {
                    "&:hover": {
                      borderColor: "#FFE26E",
                      backgroundColor: "none",
                    },
                  },
                ]}
                onClick={handleShowMore} 
              >
                Show more
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Category;

// import React, { useState, useEffect } from 'react';
// import CategoryCard from '../../Card/FeaturedCard/CategoryCard';
// /import { useFeaturedCategories } from '../../../Context/FeaturedCategoryContext';

// interface Category {
//   id: number;
//   // Add other category properties as needed
// }

// const CategoriesPage = () => {
//   const { featuredCategories, updateFeaturedCategories } = useFeaturedCategories();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/categories');
//         const data: Category[] = await res.json();
//         updateFeaturedCategories(data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="featured__categories__container">
//       <div className="featured__categories">
//         <div className="featured__categories__header">
//           <h1 className="featured__header__big">Featured Categories</h1>
//           <div className="featured__categories__header__line"></div>
//         </div>
//         <div className="featured__categories__card__container">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             featuredCategories.map((category) => (
//               <CategoryCard key={category.id} category={category} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;
