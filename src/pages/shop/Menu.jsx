import React, {useState} from 'react'
import Cards from '../../components/Card';

const Menu = () => {
  const [Menu, setMenu]= useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectesCategory, setSelectedCategory] = useState('All');
  const[sortOption, setSortOption] = useState('default');

  //load menu data
  useState(() => {
    // Fetch menu data from an API or local JSON file
    const fetchMenuData = async () => {
      try{
        const response = await fetch('/menu.json');
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilteredItems(data);
      }catch(error) {
        console.error('Error fetching menu data:', error);
      }
    }
    //call the function
    fetchMenuData();
  }
  , []);

  // Filter items based on selected category
  const filterItems = (category) => {
    const filtered = category === 'All' ? Menu : Menu.filter(item => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  }
  //show all data
  const showAll= () => {
    setFilteredItems(Menu);
    setSelectedCategory('All');
  }
  //sorting based on A-Z, Z-A, and low to high price
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    
    switch(option) {
      case 'A-Z':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedItems.sort((a,b) => b.name.localeCompare(a.name));
        break;
      case 'low-to-high':
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
  }
    setFilteredItems(sortedItems);
}
  return (
    <div>
        <div>
            <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% tO-[#FCFCFC] to-100%'>
                  <div className='py-48 flex flex-col  justify-center items-center gap-8'>
                    {/* text */}
                    <div className='text-center space-y-7 px-4'>
                      <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious <span className='text-green-600'>Food</span></h2>
                      <p className='text-xl text-black md:w-4/5'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate craftsmanship</p>
                      <button className='btn bg-green-500 px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>
                    
            
            
                  </div>
                </div>
        </div>
        <div className='section-container'>
          {/* filtering and sorting */}
           <div>
             <div className='flex justify-between items-center mb-6'>
                <div className='flex gap-4'>
                  <button onClick={() => showAll()} className={`btn ${selectesCategory === 'All' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>All</button>
                  <button onClick={() => filterItems('salad')} className={`btn ${selectesCategory === 'salad' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>Salad</button>
                  <button onClick={() => filterItems('pizza')} className={`btn ${selectesCategory === 'pizza' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>Pizza</button>
                  <button onClick={() => filterItems('soup')} className={`btn ${selectesCategory === 'soup' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>Soups</button>
                  <button onClick={() => filterItems('dessert')} className={`btn ${selectesCategory === 'dessert' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>Desserts</button>
                  <button onClick={() => filterItems('drinks')} className={`btn ${selectesCategory === 'drinks' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}>Drinks</button>

                </div>
                <div>
                  <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)} className='select select-bordered border-black w-full max-w-xs bg-white text-black'>
                    <option value="default">Sort By</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="low-to-high">Price: Low to High</option>
                  </select>
                </div>
              </div>
           </div>
           {/* products card */}
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              filteredItems.map((item) => (
                <Cards key={item.id} item={item}/>
              ))
            }
           </div>
        </div>
    </div>
  )
}

export default Menu
