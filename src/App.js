import React from 'react';
import './App.css'
import axios from 'axios'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      file: '',
      number: '',
      age: '',
      gender: '',
      hobbies: {duathuyen: false, dabong: false, caulong: false},
      note: ''
    }
  }

  handldeChange = (event) => {
    const {name,type} = event.target
    let value = type === 'checkbox' ? event.target.checked : event.target.value;
    // if (type === 'checkbox') {
    //   const checkbox = this.state[name]
    //   checkbox[value] = !checkbox[value]
    //   this.setState({
    //     [name]: checkbox,
    //   })
    //   return
    //   }

    this.setState ({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      file: this.state.file,
      number: this.state.number,
      age: this.state.age,
      gender: this.state.gender,
      hobbies: this.state.hobbies,
      note: this.state.note
    }
    console.log(data)
    // const axios = require('axios');
    // axios.post('/http://167.99.77.218/api/reactjs', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   data
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    return(
      <div className="container">
        <div className="content">
          <h1>Đăng ký thành viên</h1>
          <form action="" onSubmit={this.handleSubmit}>
            <table>
              <thead>
                <tr align="center">
                    <th>Nội dung</th>
                    <th>Giá trị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Họ tên:</td>
                    <td>
                      <input type="text" name="name"
                        value={this.state.name}
                        onChange={this.handldeChange}
                        placeholder="Họ và Tên"/>
                    </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input type="email" name="email"
                      value={this.state.email}
                      onChange={this.handldeChange}
                      placeholder="Nhập Email"/>
                  </td>
                </tr>
                <tr>
                  <td>Mật khẩu:</td>
                  <td>
                    <input type="password" name="password"
                      value={this.state.password}
                      onChange={this.handldeChange}
                      placeholder="Nhập Password"/>
                  </td>
                </tr>
                <tr>
                  <td>Avatar:</td>
                  <td>
                    <input type="file" name="file"
                      value={this.state.file}
                      onChange={this.handldeChange}
                      multiple="multiple"/>
                  </td>
                </tr>
                <tr>
                  <td>Số điện thoại:</td>
                  <td>
                      <input type="number" name="number"
                        value={this.state.number}
                        onChange={this.handldeChange}
                        placeholder="Nhập số điện thoại"/>
                  </td>
                </tr>
                <tr>
                  <td>Tuổi:</td>
                  <td>
                      <select name="age" value={this.state.age} onChange={this.handldeChange}>
                          <option value="age:1">1 tuổi</option>
                          <option value="age:2">2 tuổi</option>
                          <option value="age:3">3 tuổi</option>
                          <option value="age:4">4 tuổi</option>
                          <option value="age:5">5 tuổi</option>
                  </select>
                  </td>
                </tr>
                <tr>
                  <td>Giới tính:</td>
                  <td>
                      <input type="radio" name="gender" value="male"
                        onChange={this.handldeChange}
                        checked={this.state.gender === 'male'} />
                          Male <br/>
                      <input type="radio" name="gender" value="female"
                        onChange={this.handldeChange}
                        checked={this.state.gender === 'female'} />
                          Female
                  </td>
                </tr>
                <tr>
                  <td>Sở thích:</td>
                  <td>
                      <input type="checkbox" name="hobbies"
                        value={this.state.hobbies.duathuyen}
                        onChange ={this.handldeChange}/>
                          Đua thuyền <br/>
                      <input type="checkbox" name="hobbies"
                        value={this.state.hobbies.dabong}
                        onChange ={this.handldeChange} />
                          Đá bóng <br/>
                      <input type="checkbox" name="hobbies"
                        value={this.state.hobbies.caulong}
                        onChange ={this.handldeChange} />
                          Cầu lông <br/>
                  </td>
                </tr>
                <tr>
                  <td>Ghi chú:</td>
                  <td>
                      <textarea name="note" cols="20" rows="2"
                        value={this.state.note}
                        onChange={this.handldeChange}
                        placeholder="Hello">
                      </textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Đăng ký"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
