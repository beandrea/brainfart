import React from 'react';
import CategoryComponent from "../components/Category/CategoryComponent";
// import SidebarComponent from "../components/Sidebar/sidebar";
import QuizComponent from "../components/Quiz/QuizComponent"

// const items = [
//     {name:'Math', label:"Math"},
//     {name:"Computer Science", label:"Computer Science"},
//     {name:'History', label:"History"},
//     {name:'English', label:"English"},
//     {name:'Spanish', label:"Spanish"},
//     {name:'Geography', label:"Geography"},
// ]


function Category(props){
    const reqParam = props.match.params.id;

    console.log(reqParam)

    return(
        <div>
            {/* <div>
                <SidebarComponent items={items}/>
            </div> */}
            <CategoryComponent id={reqParam}/>
            <QuizComponent id={reqParam}/>
        </div>
    )
}

export default Category