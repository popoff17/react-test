import React, { Component } from 'react';

class Tree extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        myJson : {"Value": "0",
                "Children": [
                    {"Value": "1", "Children": [
                        {"Value": "4", "Children": [ 
                            {"Value": "5", "Children": [] } ]
                        },

                    ]},
                    {"Value": "2", "Children": [
                        {"Value": "6", "Children": [ 
                            {"Value": "7", "Children": [] } ]
                        },

                    ]},
                    {"Value": "3", "Children": [
                        {"Value": "8", "Children": [ 
                            {"Value": "9", "Children": [
                                {"Value": "10", "Children": [] },
                                {"Value": "11", "Children": [] } 
                            ] } ]
                        },

                    ]},
                ]
            },




        }
    }  

    getTreeVertical = () => {
        let myJson = this.state.myJson;
        
        let res = []; // массив результата
        let tmpNode = []; // сюда временно помещаем дочерние элементы
        tmpNode.push({Children: myJson.Children, index: 0});
        res.push(<div className="arrayElement">{myJson.Value}</div>);
        
        while(tmpNode.length) { 
            let Node = tmpNode[tmpNode.length - 1];

            if(Node.index === Node.Children.length) {
                tmpNode.length--;
            } else {
                let item = Node.Children[Node.index++];
                res.push(<div className="arrayElement">{item.Value}</div>);

                if(item.Children){
                    tmpNode.push({Children: item.Children, index: 0});
                }
            }
        }
        return <div className="arrayElements">{res}</div>;
    };


    getTreeHorizontal = () => {
        let myJson = this.state.myJson;
        
        let res = []; // массив результата
        let tmpNode = []; // сюда временно помещаем дочерние элементы
        
        if(myJson.Children.length){
            myJson.Children.forEach(element => {
                tmpNode.push(element);
            });
        }

        res.push(myJson.Value);


        let i=0;
        let count = tmpNode.length;
        while(true) {
            res.push(<div className="arrayElement">{tmpNode[i].Value}</div>);
            
            if(tmpNode.length){
                tmpNode[i].Children.forEach(child => {
                    tmpNode.push(child);
                });
            }
            i++;

            if(i>tmpNode.length-1){
                break;
            }
        }

        console.log(res);
        return <div className="arrayElements">{res}</div>;
    };
    
    

    render (){


        return <div>
                <h1>Обход дерева</h1>
                <div className="treeResultBlock">
                    <div className="element">
                        <p><strong>Пример массива:</strong></p>
                        <img src="/json.png" />
                    </div>
                    <div className="element">
                        <p><strong>по вертикали:</strong></p>
                        {this.getTreeVertical()}
                    </div>
                    <div className="element">
                        <p><strong>по горизонтали:</strong></p>
                        {this.getTreeHorizontal()}
                    </div>
                </div>

                <p></p>
                <p></p>
                <p></p>
                <p><strong>Задача:</strong></p>
                <p>Написать две процедуры обхода дерева – в глубину и в ширину.</p>
                <p><strong>Инструкция:</strong></p>
                <p>Нет. Тестовый массив вшит в код. результат выполнения появляется сразу при открытии страницы </p>
                <p><strong>Как можно улучшить реализацию:</strong></p>
                <p>1. задача выполнена не динамически. т.е. нет возможности для тестирования указать задать свое дерево. т.ч. первая логичная доработка- поле ввода json массива</p>
            </div>
    }
} 




export default Tree;
