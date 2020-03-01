import React from "react";
import SpiralForm from "./SpiralForm";

class ArraySpiral extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            M: null,
            M_max: null,
            N: null,
            N_max: null,
        }
    }  

    

    getSpiralFromInput = async (e) => {
        e.preventDefault();
        if(e.target.elements.x.value == "" || e.target.elements.y.value == ""){
            alert("Укажите размер массива");
        }else{
            this.setState({
                M: e.target.elements.x.value-1,
                M_max: e.target.elements.x.value-1,
                N: e.target.elements.y.value-1,
                N_max: e.target.elements.y.value-1,
            })
        }
    }
    

    buildSpiral = () => {
        if(this.state.M != null && this.state.M_max != null && this.state.N != null && this.state.N_max != null){
            let spiral_arr = this.make([], 0, 0, 0, 0, 0);
            
            console.clear();
            console.log(spiral_arr);

            let rows = [];
            spiral_arr.forEach(row => {
                let cells = [];
                row.forEach(cell => {
                    cells.push(<td class='spiral-table-td'>{cell}</td>);
                });
                rows.push(<tr>{cells}</tr>);
            });

            return <div class='spiral-block'>
                        <p>Тут отображено визуальное представление в виде таблицы.</p><p>Сам массив выведен в консоль</p>
                        <table class='main-spiral-table'>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
        }
    }


    make = (mas, start_x, start_y, check, total, prohod) => {

        if(prohod === 0){
            for (var i = 0; i <= this.state.N_max; i++){
                mas[i] = [];
                for (var j = 0; j <= this.state.M_max; j++){
                    total++;
                    mas[i][j] = 11;
                }
            }
        }


        for (var i = start_x; i <= this.state.M_max; i++){
            if(check<total){
                mas[start_y][i] = check;
                check++;
            }else{
                return mas;
            }
        }
        start_x = i-1;
        start_y++;

        for (var i = start_y; i <= this.state.N_max; i++){
            if(check<total){
                mas[i][start_x] = check;
                check++;
            }else{
                return mas;
            }
        }
        start_y = i-1;
        start_x--;
        
        for (var i = start_x; i >= prohod; i--){
            if(check<total){
                mas[start_y][i] = check;
                check++;
            }else{
                return mas;
            }
        }
        start_x = i+1;
        start_y--;
        
        for (var i = start_y; i >= prohod+1; i--){
            if(check<total){
                mas[i][start_x] = check;
                check++;
            }else{
                return mas;
            }
        }
        start_y = i+1;
        start_x++;
        this.state.M_max--;
        this.state.N_max--;

        prohod++;
        if(check<total){
            return this.make (mas, start_x, start_y, check, total, prohod);
        }else{
            return mas;
        }
    }
    



    render (){
        const spiral = (this.state.M != null && this.state.M_max != null && this.state.N != null && this.state.N_max != null) ? <div>{this.buildSpiral()}</div> : "";

        return <div >
                <h1>Заполнение массива по спирали   </h1>
                <SpiralForm spiralMethod={this.getSpiralFromInput}/>
                <div className="spiral" id="spiral">{spiral}</div>
                <p></p>
                <p></p>
                <p></p>
                <p><strong>Задача:</strong></p>
                <p>Заполнить 2-мерный массив размером N * M числами 1, 2, 3, 4, …, N * M с обходом по спирали к центру.  </p>
                <p><strong>Инструкция:</strong></p>
                <p>Для запуска указать желаемый размер массива в полях ввода, нажать "ввод"</p>
                <p><strong>Ограничения реализации:</strong></p>
                <p>Не предусмотренна проверка и обработка вводимых в форму данных, реализация работает только с положительными целыми числами, поэтому поля ввода сделаны с типом "num"</p>
                <p><strong>Как можно улучшить реализацию:</strong></p>
                <p>1. провести рефакторинг, второпях код получился несколько "грязным"</p>
                <p>2. задача реализована только в одном направлении - по часовой стрелке, начиная с верхнего левого угла. Поэтому в качестве улучшения можно произвести доработку в плане задания направления и угла начала заполнения </p>
                <p>3. мб пересмотреть сам алгоритм создания массива. сейчас за один проход собирается все 4 стороны таблицы (визуально). Возможно правильнее было бы собирать массив по одной стороне, а не сразу по четыре. Но такая такая реализация мне сразу показалась долгой (в пане затраченного на нее времени) поэтому сделал так. </p>
            </div>
    }
} 




export default ArraySpiral;
