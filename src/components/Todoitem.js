import React from "react";
import swal from 'sweetalert';
class Todoitem extends React.Component {
    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
    }
    tick() {
        this.props.tickItem(this.props.item)
    }
    delete() {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this todo?",
            icon: "warning",
            dangerMode: true,
            buttons: {
                cancel: true,
                confirm: true,
            }
        })
            .then(willDelete => {
                if (willDelete) {
                    this.props.deleteItem(this.props.item)
                    swal("Deleted!", "Your todo list has been deleted!", "success");
                }
            });
    }
    edit() {
        swal("Edit your todo", {
            content: "input",
            buttons: {
                cancel: true,
                confirm: true,
            }
        })
            .then((value) => {
                if (value) {
                    this.props.editedItem(this.props.item, value)
                    swal("Edited!", "Your todo has been edited!", "success");
                }
            });
    }
    render() {
        const style = {
            textDecoration: "line-through",
            opacity: .5,
            fontStyle: "italic"
        }, secondStyle = {
            backgroundColor: "#90EE90",
        }
        const editSvg=<svg x="0px" y="0px" viewBox="0 0 468.134 468.134" style={{enableBackground:"new 0 0 468.134 468.134"}}>
        <path style={{fill:"#DC8744"}} d="M28.06,363.046L9.317,423.983l-8.763,28.468c-2.859,9.288,5.842,17.989,15.13,15.129l28.467-8.763  l60.939-18.743L28.06,363.046z"/>
        <path style={{fill:"#3A556A"}} d="M44.151,458.817l-28.467,8.763c-9.288,2.859-17.988-5.841-15.129-15.129l8.763-28.468L44.151,458.817  z"/>
        <rect x="-19.151" y="194.604" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 511.5694 231.7721)" style={{fill:"#FCD462"}} width="453.868" height="54.465"/>
        <rect x="19.36" y="233.116" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 604.5447 270.2841)" style={{fill:"#F6C358"}} width="453.868" height="54.465"/>
        <path style={{fill:"#E56353"}} d="M426.039,119.122L349.01,42.094l38.436-38.436c4.877-4.877,12.784-4.877,17.66,0l59.368,59.368  c4.877,4.877,4.877,12.784,0,17.66L426.039,119.122z"/>
        <g><rect x="352.212" y="52.373" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 692.3092 -73.0846)" style={{fill:"#EBF0F3"}} width="18.157" height="108.937"/><rect x="326.525" y="78.036" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 666.604 -11.1108)" style={{fill:"#EBF0F3"}} width="18.157" height="108.937"/></g></svg>
        return (
            <>
                <li className="todo-item" id={this.props.id}>
                    <input id={this.props.id} type="checkbox" checked={this.props.item.checked} onChange={() => this.props.handleChange(this.props.item.id)} />
                    <label id={this.props.id} className="tick js-tick" onClick={this.tick} style={this.props.item.checked ? secondStyle : null}></label>
                    <span id={this.props.id} style={this.props.item.checked ? style : null} >{this.props.item.text}</span>
                    <button onClick={this.edit} id={this.props.id} className="delete-todo js-delete-todo">
                        <span>{editSvg}</span>
                    </button>
                    <button onClick={this.delete} id={this.props.id} className="delete-todo js-delete-todo">
                        <svg>
                            <use href="#delete-icon"></use>
                        </svg>
                    </button>
                </li>
            </>
        )
    }
}
export default Todoitem;