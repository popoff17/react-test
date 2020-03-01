import React from "react";

class Menu extends React.Component{
    render (){
        return <div className="menu">
            <a href="/tree/">№1 - Обход дерева</a> 
            <a href="/calendar/">№2 - Календарь</a> 
            <a href="/array-spiral/">№3 - Заполнение по спирали</a> 
            <a href="/balance/">№4 - Баланс скобок</a> 
            <a href="/array-add/">№5 - Заполнение массива<br/> (не реализовано)</a> 
        </div>
    }
} 




export default Menu;
