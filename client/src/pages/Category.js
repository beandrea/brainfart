import React from 'react';
import CategoryComponent from "../components/Category/CategoryComponent";
import SidebarComponent from "../components/Sidebar/sidebar";

const items =[
    {name:'Math', label:"Math"},
    {name:"Computer Science", label:"Computer Science"},
    {name:'History', label:"History"},
    {name:'English', label:"English"},
    {name:'Spanish', label:"Spanish"},
    {name:'Geography', label:"Geography"},

]
function Category(){
    return(
        <div>
            <div>
                <SidebarComponent items={items}/>
            </div>
            <CategoryComponent/>
        
        </div>
    )
}

export default Category