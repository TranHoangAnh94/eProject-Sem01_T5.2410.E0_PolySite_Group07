import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [contactModal, setContactModal] = useState(true);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});  // Lưu trữ các lỗi của form

  // Hàm để đóng modal
  const closeModal = () => {
    setContactModal(false);
    navigate('/ContactUs'); // Điều hướng về trang ContactUs
  };

  // Hàm kiểm tra lỗi và xử lý form
  const check = (e) => {
    e.preventDefault();

    const newErrors = {};  // Lưu trữ các lỗi cần hiển thị

    // Lấy giá trị từ các trường input
    const name = document.getElementById("txtName").value;
    const email = document.getElementById("txtMail").value;
    const phone = document.getElementById("txtPhone").value;
    const termsAccepted = document.getElementById("terms").checked;

    // Kiểm tra các trường bắt buộc
    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!termsAccepted) {
      newErrors.terms = 'You must agree to the terms and policies';
    }

    // Nếu có lỗi, không gửi form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Nếu không có lỗi, gửi form và thông báo
    alert("Thank you for contacting us\nWe will reply within 1-2 business days, except Saturday and Sunday.");
    navigate('/ContactUs'); // Điều hướng về trang ContactUs
  };

  return (
    <>
      {contactModal && (
        <div className="request-form" id="contactModal">
          <form className="contact-form" action="javascript:void(0);" onSubmit={check}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2 align="center">Sample Request</h2>
            <table>
              <tr>
                <td align="left" style={{ padding: '15px' }}>Name*:</td>
                <td>
                  <input
                    className="form-group"
                    id="txtName"
                    placeholder="Enter your name"
                    autoFocus
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </td>
              </tr>
              <tr>
                <td align="left" style={{ padding: '15px' }}>Email*:</td>
                <td>
                  <input
                    
                    className="form-group"
                    id="txtMail"
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </td>
              </tr>
              <tr>
                <td align="left" style={{ padding: '15px' }}></td>
                <td>
                  <input type="radio" name="mailRecep" value="yes" checked />Yes
                  <input type="radio" name="mailRecep" value="no" />No
                  <div style={{ width: '600px' }}>You will receive the latest information such as PolySite products, preferably if you agree to receive emails</div>
                </td>
              </tr>
              <tr>
                <td align="left" style={{ padding: '15px' }}>Phone*:</td>
                <td>
                  <input
                    type="tel"
                    className="form-group"
                    id="txtPhone"
                    placeholder="Enter your phone"
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </td>
              </tr>
              <tr>
                <td align="left" style={{ padding: '15px' }}>Fax:</td>
                <td><input type="tel" className="form-group" id="txtFax" placeholder="Enter your fax" /></td>
              </tr>
              <tr>
                <td align="left" style={{ padding: '15px' }}>Description:</td>
                <td><textarea className="textare" placeholder="Please describe the problem in detail so that we can serve you better." /></td>
              </tr>
              <tr style={{ marginTop: '10px' }}>
                <td></td>
                <td>
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">I agree <a href="https://drive.google.com/file/d/1teRQy40TV2SPAg3ITZHZaIgYW4BeZ71X/view?usp=sharing" download="Điều Khoản và Chính Sách Dịch Vụ PolySite.pdf">PolySite Terms and Policies</a></label>
                  {errors.terms && <div className="error-message">{errors.terms}</div>}
                </td>
              </tr>
            </table>
            <div className='ban'>
              <button type="submit" className="btn">Confirm</button>
              <button type="reset" className="btn">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Feedback;
