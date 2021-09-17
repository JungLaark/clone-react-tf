import React from 'react';
import logo from '../../img/onboarding/logo.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar variant="light" bg="light" expand="xxl" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="" width="100" height="20" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse class="justify-content-end">
            <Nav>
              <NavDropdown title="회사소개">
                <NavDropdown.Item href="/company/timf">
                  회사소개
                </NavDropdown.Item>
                <NavDropdown.Item href="/company/partner">
                  협력사 소개
                </NavDropdown.Item>
                <NavDropdown.Item href="/company/customer">
                  고객사 소개
                </NavDropdown.Item>
                <NavDropdown.Item href="/company/map">
                  오시는 길
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="사업소개">
                <NavDropdown.Item href="/business/ts">
                  새벽배송
                </NavDropdown.Item>
                <NavDropdown.Item href="/business/lf">
                  화물주선
                </NavDropdown.Item>
                <NavDropdown.Item href="/business/fu">
                  풀필먼트
                </NavDropdown.Item>
                <NavDropdown.Item href="/business/gr">
                  그로서리
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="공지사항">
                <NavDropdown.Item href="/notice/noticepage">
                  공지사항
                </NavDropdown.Item>
                <NavDropdown.Item href="/notice/emp">
                  인재채용
                </NavDropdown.Item>
                <NavDropdown.Item href="/notice/serviceinfo">
                  서비스소개
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/press">
                보도자료
              </Nav.Link>
              <Nav.Link href="/addpoint">
                보도자료
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;
