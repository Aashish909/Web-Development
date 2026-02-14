import React, { useEffect } from 'react'

const ResMenu = () => {

  const [menuData, setMenuData] = React.useState([]);
  console.log("menudata:", menuData)
  async function fetchMenu(){
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=1046204&catalog_qa=undefined&submitAction=ENTER`,
    );
    const data = await response.json();
    setMenuData(data);
  }
  useEffect(()=>{
    fetchMenu()
  },[])
  return (
    <div>ResMenu</div>
  )
}

export default ResMenu

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=1046204&catalog_qa=undefined&submitAction=ENTER