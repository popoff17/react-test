import React from "react";
import BalanceForm from './BalanceForm';

class Balance extends React.Component{
    getBalanceFormInput = async (e) => {
        e.preventDefault();
        if(e.target.elements.balance.value == ""){
            alert("Поле не должно быть пустым");
            return false;
        }

        var str = e.target.elements.balance.value;
        /* в массивах open_arr и close_arr храним открывающие и закрывающие скобки, которые проверяем  */
        var open_arr = ["(", "[", "{"]; 
        var close_arr = [")", "]", "}"];
        var balance = [0,0,0]; /* переменная для проверки. будем ее увеличивать и уменьшать в зависимости от того, какая скобочка. если баланс соблюден, то в конце перебора должен быть 0 */
        var error = false; /*флаг ошибки*/        


        /*
            перебор строки посимвольно. если встречается скобка, то увеличиваем или уменьшаем соответсвующий ее ключу элемент в массиве balance
            таким образом удастся отследить баланс между разными скобками, например [} 
         */
        for(var i=0; i<str.length; i++){
            if(open_arr.indexOf(str[i]) >= 0 ){
                balance[open_arr.indexOf(str[i])]++;
            }
            if(close_arr.indexOf(str[i]) >= 0){
                balance[close_arr.indexOf(str[i])]--;
            }
            
            /* если в какой-то момент число закрывающих скобок станет больше, то явно в балансе ошибка */
            balance.forEach(function(b){
                if(b < 0){
                    error = true;
                }
            })
            if( error ){
                break;
            }
        }

        var status = "соблюден";
        if(error){
            status = "<strong>не соблюден</strong>";
        }

        document.getElementById("balance").innerHTML = "В строке: <br/><strong>"+ str +"</strong><br/> баланс скобок "+ status +"! ";

    };



    render (){
        let v = "({)}";
        return <div >
                <BalanceForm balanceMethod={this.getBalanceFormInput}/>
                <div className="balance" id="balance"></div>
                <p></p>
                <p></p>
                <p></p>
                <p><strong>Задача:</strong></p>
                <p>Проверить сбалансированность скобочной структуры в произвольном выражении. </p>
                <p><strong>Инструкция:</strong></p>
                <p>Ввести в поле ввода выражение, нажать "Ввод"</p>
                <p><strong>Как можно улучшить реализацию:</strong></p>
                <p>1. Уже перед отправкой, при последней проверке обнаружил недоработку: выражение <strong>{v}</strong> будет принято как верное. правильнее было бы найти последнюю открытую скобку и от нее влево-вправо делать проверку. таким образом можно проверить не только баланс, как в текущей реализации, но и правильность последовательности скобок  </p>
            </div>
    }
} 




export default Balance;
