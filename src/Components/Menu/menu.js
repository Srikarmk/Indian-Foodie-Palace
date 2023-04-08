import React, {useState} from 'react'
import "./style.css"
import Items from './menuApi'
import MenuCard from './menuCard'
import Navbar from './navbar'

const categories = [...new Set(Items.map((currElem)=> currElem.category)),"All"]
console.log("category",categories)

const Menu = () => {
    const [menuData,setMenuData]=useState(Items);
    const [menuList,setMenuList]=useState(categories);
    // console.log(menuData)
    const filterItem =(category)=>{
        if (category==="All"){
            setMenuData(Items)
            return;
        }
        const updatedList=Items.filter((currElem)=>{
            return currElem.category === category;
        })
        setMenuData(updatedList);
    }
  return (
    <div>
        <h1 className='head'>Indian Foodie Palace</h1>
        <Navbar filterItem={filterItem } menuList={menuList}></Navbar>
       <MenuCard menudata={menuData}></MenuCard>
    </div>
  )
}

export default Menu