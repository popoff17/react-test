import React from "react";



/*
* TODO: тут у меня упущение, нужно было у поля ввода тип не "дата", а "текст" и обрабатывать вводимые данные. или, как вариант,  сделат маску ввода. 
* потому что генерация календаря из поля, которое предоставляет выбор даты из календаря, смотрится как-то нелогично. Хотя мб я ошибаюсь.  
*/
class CalendarForm extends React.Component{
    render (){
        return <form onSubmit={this.props.calendarMethod}>
            <input type="date" name="date" />
            <button>Ввод</button>
        </form>
    }
} 




export default CalendarForm;
