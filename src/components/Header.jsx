import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from './TopHeader';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div>
                <TopHeader />
            </div>
            <div>
                <Navbar color="light" light expand="md" style={{paddingRight:"5%",paddingLeft:"5%"}}>
                    <NavbarBrand href="/">Tüm Kategoriler</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" style={{ justifyContent: "flex-end",paddingLeft:"5%",fontSize:"20px",fontWeight:"bold",marginLeft:"3em",marginRight:"1em" }} navbar>
                        <UncontrolledDropdown nav inNavbar style={{marginLeft:"2em",marginRight:"2em"}}>
                                <DropdownToggle nav caret>
                                    Pastalar
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                            Yaş Pasta
                                    </DropdownItem>
                                    <DropdownItem>
                                            Adet Pasta
                                    </DropdownItem>
                                    <DropdownItem>
                                            Petifür & Ekler
                                    </DropdownItem>
                                    <DropdownItem>
                                            Çocuk Pastaları
                                    </DropdownItem>
                                    <DropdownItem>
                                            Özel Gün Pastaları
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem style={{marginLeft:"2em",marginRight:"2em"}}>
                                <NavLink href="#">Çikolata</NavLink>
                            </NavItem>
                            <NavItem style={{marginLeft:"2em",marginRight:"2em"}}>
                                <NavLink href="#">Kuru Pasta</NavLink>
                            </NavItem>
                            <NavItem style={{marginLeft:"2em",marginRight:"2em"}}>
                                <NavLink href="#">Hediyelik</NavLink>
                            </NavItem>                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;