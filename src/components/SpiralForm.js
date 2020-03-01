import React from "react";

class SpiralForm extends React.Component{
    render (){
        return <form onSubmit={this.props.spiralMethod}>
            <p>Размер массива</p>
            <input type="number" name="x" min="2" />
            <input type="number" name="y" min="2" />
            <button>Ввод</button>
        </form>
    }
} 




export default SpiralForm;
