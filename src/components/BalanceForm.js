import React from "react";



class BalanceForm extends React.Component{
    render (){
        return <form onSubmit={this.props.balanceMethod}>
            <p> Введите выражение для проверки: </p>
            <input type="text" name="balance"  />
            <button>Проверить</button>
        </form>
    }
} 




export default BalanceForm;
