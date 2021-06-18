import React from "react";
import Nav from "react-bootstrap/Nav";

function NavHeader(props) {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Trang chủ Shopee</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Trở thành Người bán Shopee</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Tải ứng dụng</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Kết nối</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Thông Báo</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Hỗ Trợ</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Đăng Ký</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Đăng Nhập</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default NavHeader;
