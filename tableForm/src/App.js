import React from 'react';
import './App.css'

const hobbies = [
  "cầu lông " , "đá cầu " , "đua thuyền"
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      file: '',
      number: '',
      age: '',
      gender: '',
      checkedBox: new Set(),
      note: '',
    }
  }

  checkBoxHobbies = () => {
    const supject = hobbies.map((value,key) => {
      return <label key={key}> <input type="checkbox" name="hobbies"  value={value} onChange={()=> this.checkedHobbies(value)} checked={this.state.checkedBox.has(value)}/> {value} </label>
    });
    return supject
  }

  componentWillMount() {
    this.checkedBox = new Set();
  }

  checkedHobbies = (st) => {
    if(this.checkedBox.has(st)){
      this.checkedBox.delete(st) ;
    }
    else{
      this.checkedBox.add(st) ;
    }
    this.setState({
      checkedBox: this.checkedBox
    });
  }

  handleChange = (event) => {
    const nickname = event.target.name
    const value = event.target.value
    this.setState ({
      [nickname]: value
    });
  }

  handleChangeFile = (event) => {
    this.setState({
      file: event.target.files[0].name
    });
  }

  handleClearForm = (event) => {
    event.preventDefault()
    this.setState({
        name: '',
        email: '',
        password: '',
        file: '',
        number: '',
        age: '',
        gender: '',
        checkedBox: new Set(),
        note: '',
    })
    console.log('Name: ', this.state.name)
    console.log('Email: ',  this.state.email)
    console.log('Password: ', this.state.password)
    console.log('File: ', this.state.file)
    console.log('Sdt: ',  this.state.tel)
    console.log('Tuổi: ', this.state.age)
    console.log('Giới tính: ',  this.state.gender)
    console.log('Sở thích: ', this.state.checkedBox)
    console.log('Note: ', this.state.note)
  }

  render() {
    return(
      <div className = "Form">
        <div className= "content">
          <h1>Đăng ký thành viên</h1>
          <form>
            <table>
              <tr>
                <th>
                  Nội dung
                </th>
                <th>
                  Giá trị
                </th>
              </tr>
              <tr>
                <td>Họ tên:</td>
                <td>
                  <input type="text" name="name" id=""
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Họ và Tên"
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Nhập Email"
                  />
                </td>
              </tr>
              <tr>
                <td>Mật khẩu:</td>
                <td>
                  <input type="password" name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Nhập Password"
                  />
                </td>
              </tr>
              <tr>
                <td>Avatar:</td>
                <td>
                  <input type="file" name="file"
                    value={this.state.file}
                    onChange={this.handleChangeFile}
                  />
                </td>
              </tr>
              <tr>
                  <td>Số điện thoại:</td>
                  <td>
                      <input type="tel" name="tel"
                        value={this.state.tel}
                        onChange={this.handleChange}
                        placeholder="Nhập số điện thoại"
                      />
                  </td>
              </tr>
              <tr>
                <td>Tuổi:</td>
                <td>
                  <select name="age" value={this.state.age} onChange={this.handleChange}>
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
                    checked={this.state.gender === 'male'}
                    onChange={this.handleChange} />Male<br/>
                  <input type="radio" name="gender" value="female"
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange} />Female
                </td>
              </tr>
              <tr>
                <td>Sở thích:</td>
                <td>
                 {this.checkBoxHobbies()}
                </td>
              </tr>
              <tr>
                <td>Ghi chú:</td>
                <td>
                  <textarea
                    name="note" cols="20" rows="2"
                    value={this.state.note}
                    onChange={this.handleChange}
                    placeholder="Hello" >
                  </textarea>
                </td>
              </tr>
              <input type="submit" value="Đăng ký" onClick={this.handleClearForm}/>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

// phần checkBox, file e chưa làm được
// phần checkBox đi tham khảo nhưng chưa hiểu về code lắm @@