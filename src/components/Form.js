import React from "react";

class Form extends React.Component{
    render (){
        return <form onSubmit={this.props.calendarMethod}>
            <input type="date" name="date" />
            <button>Ввод</button>
        </form>
    }
} 




export default Form;
