import React from 'react';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
            <h1>Đăng kí thành viên</h1>
            <div className ="content">
              <table>
                <tbody>
                  <tr>
                    <th>Nội dung</th>
                    <th>Giá trị</th>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td><input type="text" name="hoten"/></td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td><input type="email" name="email"/></td>
                  </tr>
                  <tr>
                    <td>Mật khẩu</td>
                    <td><input type="password" name="password"/></td>
                  </tr>
                  <tr>
                    <td>Avatar</td>
                    <td><input type="file" name="file"/></td>
                  </tr>
                  <tr>
                    <td>Sô điện thoại</td>
                    <td><input type="tel" name="tel"/></td>
                  </tr>
                  <tr>
                    <td>Tuổi</td>
                    <td>
                      <select name="age" id="age">
                        <option value="tuoi1">Tuổi 1</option>
                        <option value="tuoi2">Tuổi 2</option>
                        <option value="tuoi3">Tuổi 3</option>
                        <option value="tuoi4">Tuổi 4</option>
                        <option value="tuoi5">Tuổi 5</option>
                        <option value="tuoi6">Tuổi 6</option>
                        <option value="tuoi7">Tuổi 7</option>
                        <option value="tuoi8">Tuổi 8</option>
                        <option value="tuoi9">Tuổi 9</option>
                        <option value="tuoi10">Tuổi 10</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Giơi Tính:</td>
                    <td>
                      <input type="radio" name="gender" value="nam"/>Nam <br/>
                      <input type="radio" name="gender" value="nu"/>Nữ
                    </td>
                  </tr>
                  <tr>
                    <td>Sơ thích:</td>
                    <td>
                      <input type="checkbox" name="hobby" id=""/>Đá bóng <br/>
                      <input type="checkbox" name="hobby" id=""/>Cầu lông <br/>
                      <input type="checkbox" name="hobby" id="" checked/>Đua thuyền <br/>
                    </td>
                  </tr>
                  <tr>
                    <td>Ghi chú:</td>
                    <td>
                      <textarea name="ghichu" id="ghichu" cols="20" rows="3"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <input type="submit" name="dangky" id="dangky" value="Đăng ký"></input>
            </div>
          </form>
      </div>
    );
  }
}

export default App;
