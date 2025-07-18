import React, {useState} from 'react'
import Cards from '../../components/Cards/Cards';

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
          //filtering and sorting
           <div>

           </div>
           //products card
           <div>
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
