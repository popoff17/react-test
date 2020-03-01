import React, { Component } from 'react';
import CalendarForm from './CalendarForm';

class Calendar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            date_y: null,
            date_m: null,
            date_d: null,
        }
    }  

    getCalendarFromInput = async (e) => {
        e.preventDefault();
        if(e.target.elements.date.value == ""){
            var da = new Date();
            e.target.elements.date.value = da.getFullYear() + "-" + ('0' + (da.getMonth() + 1)).slice(-2) + "-" + ('0' + (da.getDate())).slice(-2);
        }
        const date = new Date(e.target.elements.date.value);
        //const date = new Date(da.getFullYear(), da.getMonth()+1, da.getDay());
        this.setState({
            date: date,
            date_y: date.getFullYear(),
            date_m: date.getMonth()+1,
            date_d: date.getDate(),
        })
        //document.getElementById("calendar").innerHTML = this.buildCalendar(date.getDate(), date.getMonth()+1, date.getFullYear());
    };

    getCalendarFromDiv = async (y,m,d) => {
        const date = new Date(y,m,d);
        this.setState({
            date: date,
            date_y: date.getFullYear(),
            date_m: date.getMonth()+1,
            date_d: date.getDate(),
        })
    };


/*
    построение таблицы-календаря. 
    входные параметры указывается в человекопонятном виде: д.м.гггг 
*/
    buildCalendar = (d=null,m=null,y=null) => {


        /* небольшая проверка-корректировка входных параметров */
        if(d && m && y){
            if(d < 1){ d = 1;}
            if(m < 1){ m = 1;}
            if(m > 12){ m = 12;}
            m = m-1;
            var date = new Date(y,m,d); /* дата */
            //console.log(date);
        }else{
            var date = new Date(); /* дата */
        }
        console.log(date);

        /* получение количества дней в месяце */
        Date.prototype.daysInMonth = function( math=0 ) { 
            return 32 - new Date(this.getFullYear(), this.getMonth() + math, 32).getDate();
        };

        let this_day = date.getDate(); /* текущий день */
        let this_month = date.getMonth(); /* текущий месяц */
        let this_year = date.getFullYear(); /* текущий год */
        let this_week = date.getDay(); /* текущий день недели */
        let days_in_month = date.daysInMonth(); /* дней в текущем месяце */
        let week_of_first_day = new Date(this_year, this_month, 1).getDay(); /* день недели первого числа текущего месяца */
        if(week_of_first_day == 0){ week_of_first_day = 7; } /* небольшая корректировка, чтобы воскресенье возвращало 7, а не 0 */
        let days_in_prev_month = date.daysInMonth(-1); /* дней в предыдущем месяце */
        let days_in_next_month = date.daysInMonth(1); /* дней в следующем месяце */





        let max_rows= 6; /* максимум строк */
        let days_in_row = 7; /* дней в строке */
        let numeric = 0; /* вспомогательная переменная для вывода даты */
        let numeric_next = 1; /* вспомогательная переменная для вывода дат следующего месяца */
        let arrMonthNames = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];

        /* построение таблицы */
        let rows = [];
        for(let i=0; i < max_rows; i++){
            let cells = [];
            for(let d=0; d < days_in_row; d++){
                week_of_first_day--;
                if(week_of_first_day > 0){
                    let day = days_in_prev_month-week_of_first_day+1;
                    cells.push(<td class='main-table-td prev-month'  onClick={()=>this.getCalendarFromDiv(this_year,this_month-1,day)} >{day}</td>);
                }else if(numeric < days_in_month){
                    numeric++;
                    if(numeric == this_day){
                        cells.push(<td class='main-table-td this-month active'>{numeric}</td>);
                    }else{
                        cells.push(<td class='main-table-td this-month'>{numeric}</td>);
                    }
                    
                }else{
                    cells.push(<td class='main-table-td next-month' onClick={()=>this.getCalendarFromDiv(this_year,this_month+1,numeric_next)} >{numeric_next}</td>);
                    numeric_next++;
                }
            }
            rows.push(<tr>{cells}</tr>);
        }





        return <div class='main-calendar'>
            <div class='main-calendar-month-name'>
                <span class='prev' onClick={()=>this.getCalendarFromDiv(this_year,this_month-1,1)}></span>
                {arrMonthNames[this_month]}, {this_year}
                <span class='next' onClick={()=>this.getCalendarFromDiv(this_year,this_month+1,1)}></span>
            </div>
            <table class='main-calendar-table'>
               <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    };

    
    

    render (){
        const calendar = this.state.date != null ? <div>{this.buildCalendar(this.state.date_d, this.state.date_m, this.state.date_y)}</div> : "";


        return <div >
                <h1>Календарь</h1>

                <CalendarForm  calendarMethod={this.getCalendarFromInput}/>
                <div className="calendar" id="calendar">{calendar}</div>

                <p></p>
                <p></p>
                <p></p>
                <p><strong>Задача:</strong></p>
                <p>Нарисовать календарь для месяца, в котором находится заданная дата. </p>
                <p><strong>Примечание:</strong></p>
                <p>Внешний вид и функционал постарался подогнать под календарь Windows. т.е. отобразить не только месяц указанной даты, но и предыдущий и следующий месяц. а так же переключение между ними по клику на стрелочки и на даты предыдущего и следующего месяцев </p>
                <p><strong>Инструкция:</strong></p>
                <p>Ввести необходимую дату в поле ввода, нажать "Ввод"</p>
                <p>В заголовке календаря кнопки позволяют переключаться между месяцами</p>
                <p>Так же нажатие на даты предыдущего и следующего месяцев перерисовывют календарь в соответствии с выбранным днем</p>
                <p>Клик по активным датам (датам выбранного месяца) не вызывает никаких событий. Теоритически тут может быть заложен какой-то другой функционал</p>
                <p><strong>Как можно улучшить реализацию:</strong></p>
                <p>1. по идее получается некоторая тафталогия: чтобы нарисовать календарь нужно выбрать дату из календаря. По правильному бы заменить поле типа date на поле типа text и наложить маску ввода на поле</p>
                <p>2. Сейчас нет проверки и обработки введенных данных в поле</p>
                <p>3. Организовать анимацию при смене месяцев, для этого отрисовывать не один месяц, а сразу 3 (предыдущий, текущий и следующий) </p>
                <p>4. Это моя первая работа на реакте, поэтому возможно (или даже скорей всего) сама архитектура компонента выполнена несколько громоздко </p>
                <p>5. в плане рефакторинга - тут явно есть лишние переменные, да и методы getCalendarFromInput и getCalendarFromDiv можно объединить </p>
            </div>
    }
} 




export default Calendar;
