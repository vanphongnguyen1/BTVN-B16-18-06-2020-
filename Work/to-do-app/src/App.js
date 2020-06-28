import React, { Component } from 'react';
import { fromJS } from 'immutable';

import './style.scss';
import Column from './components/Column';
import AddNewModal from './components/AddNewModal';
import Task from './components/Task';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { v4 as uuidv4 } from 'uuid'

class App extends Component {

    state = {
        displayModal: false,
        taskContent:'',
        editingTaskId: null,
        columns: fromJS([
            { id: 'td', title: 'TO DO', tasks: [] },
            { id: 'ip', title: 'IN PROGRESS', tasks: [] },
            { id: 'de', title: 'DONE', tasks: [] }
        ])
    }
    handleToggleModal = (choosenColumn = '') =>() => {
        this.setState(prevState => ({
            displayModal: !prevState.displayModal,
            selectedColumn: choosenColumn
        }));
    }
    handleChangeSelectedColumn = (selectedColumn) => () => {
        this.setState({ selectedColumn: selectedColumn})
    }
    handleChangeTaskContent = (e) => this.setState({ taskContent: e.target.value })
    handleAddNewTask = () =>{
        // nấy nội  dung  task từ state
        const {taskContent} = this.state
        // ktra xem noi dung có rỗng hay k
        if(taskContent.trim() === '') {
            return toastr.warning('Please enter your task', 'Notice',{timeOut: 2000});
        }
        // lấy id cột muốn thêm taskContent
        const {selectedColumn, columns} = this.state;
        // tạo task mới với đầy đủ thông tin là id, d và time tạo
        const newTask = fromJS({
            id: uuidv4(),
            content: taskContent,
            time: new Date().toLocaleString()
        });
        // lấy vị trí cột đó trong state
        const columnIndex = columns.findIndex(column => column.get('id')===selectedColumn);
        //lưu lại task vào cột
        const updatedColumn = columns.updateIn(
            [columnIndex, 'tasks'],
            tasks => tasks.push(newTask)
        );
        // cập nhật lại state và reset state của modal
        // như đóng modal và clear nội dung task, cột được chọn
        this.setState({
            displayModal:false,
            selectedColumn:'',
            taskContent:'',
            columns: fromJS(updatedColumn)
        })
    }
    // xóa task 
    handleDeleteTask = (columnIndex, taskIndex) => () => {
        // thông báo xóa hay k
        const result = window.confirm('Bạn có muốn xóa Task k???');
        if(result) {
            const {columns} = this.state;
            const updatedColumn = columns.updateIn(
                [columnIndex, 'tasks'],
                tasks => tasks.remove(taskIndex)
            );
            this.setState({ columns: fromJS(updatedColumn)},() => {
                toastr.success('Xoá thành công', 'Notice', {timeOut: 2000});
            });
        }
    }
    handleChooseEditTask = (columnIndex, taskIndex, taskId) => () => {
        console.log('abc')
        this.setState ({
            editingColumnIndex: columnIndex,
            editingTaskIndex: taskIndex,
            editingTaskId: taskId
        })
    }
    handleCancelEdit = () => {
        this.setState({
            editingTaskId: null,
            taskContent: ''
        });
    }
    handleEdit = () => {
        const {columns, editingColumnIndex, taskContent, editingTaskIndex} = this.state;
        const updatedColumn = columns.updateIn(
            [editingColumnIndex, 'tasks'],
            tasks => tasks.setIn([editingTaskIndex, 'content'],taskContent)
        );
        this.setState({
            editingTaskId: null,
            taskContent: '',
            editingColumnIndex: '',
            editingTaskIndex: null,
            columns: fromJS(updatedColumn)
        });
    }
    render() {
        const { columns, displayModal, taskContent, editingTaskId } = this.state;
        return (
            <div className="App">
                <h1 className="App__title">TO DO LIST</h1>
                <div className="App__content">
                    {
                        columns.map((column, columnIndex) => (
                            <Column key={column.get('id')}
                                column={column}
                                handleAddNewTask={this.handleToggleModal}>
                                <div style={{ minHeight: '300px' }}>
                                    {
                                        column.get('tasks').map((task, taskIndex) => (
                                            <Task key={task.get('id')}
                                            task={task}
                                            handleDeleteTask={this.handleDeleteTask(columnIndex, taskIndex)}
                                            isEditing={task.get('id') === editingTaskId}
                                            handleCancelEdit={this.handleCancelEdit}
                                            handleChooseEditTask={this.handleChooseEditTask(columnIndex, taskIndex,task.get('id'))}
                                            handleEdit={this.handleEdit}
                                            handleChangeTaskContent={this.handleChangeTaskContent}
                                            />
                                        ))
                                    }
                                </div>
                            </Column>
                        ))
                    }
                </div>
                {displayModal &&
                <AddNewModal
                handleToggleModal = {this.handleToggleModal()}
                selectedColumn = {this.state.selectedColumn}
                handleChangeSelectedColumn = {this.handleChangeSelectedColumn}
                taskContent = {taskContent}
                handleChangeTaskContent = {this.handleChangeTaskContent}
                handleAddNewTask = {this.handleAddNewTask}
                />
                }
            </div>
        );
    }
}
export default App;
