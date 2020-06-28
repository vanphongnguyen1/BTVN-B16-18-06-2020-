import React,{Fragment} from 'react';

import './style.scss';

const Task = (props) => (
    <div className="Task">
        {
            props.isEditing
            ? <div className="Task__editing">
                <input typr="text" className="Task__editor"
                defaultValue={props.task.get('content')}
                onChange={props.handleChangeTaskContent} />
                <div className="Task__editing-action">
                    <i className="fas fa-check" onClick={props.handleEdit}></i>
                    <i className="fas fa-ban" onClick={props.handleCancelEdit}></i>
                </div>
                <div className="Task__editing-bgr" onClick={props.handleCancelEdit}></div>
            </div>
            : <Fragment>
                <div className="Task__time">
                    <i className="far fa-calendar-alt"></i>{props.task.get('time')}
                </div>
                <div className="Task__main">
                    <div className="Task__content">
                        {props.task.get('content')}
                    </div>
                    <div className="Task__action">
                        <div className="Task__btn" onClick={props.handleChooseEditTask}>
                            <i className="far fa-edit"></i>
                        </div>
                        <div className="Task__btn" onClick={props.handleDeleteTask}>
                        <i className="far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            </Fragment>
        }
    </div>
)

export default Task;
