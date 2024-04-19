import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id='header'>
            <div className="container-xxl p-0">
                <div className="header">
                    <menu className="d-none d-lg-block">
                        <ul className="menu-list">
                            <li className="list-item"><NavLink to='/'>Home</NavLink></li>
                            <li className="list-item"><NavLink to='/about'>About Us</NavLink></li>
                            <li className="list-item"><NavLink to='/product'>Product</NavLink></li>
                        </ul>
                    </menu>
                    <div className="nav-logo"><NavLink to='/'>CENTRUM IMPEX</NavLink></div>
                    <div className="nav-contact d-none d-lg-block"><NavLink to='/contact' className="th-btn th-btn-1">CONTACT</NavLink></div>
                    <div className="nav-menu-btn d-block d-lg-none" id="menu-open"><i className="fal fa-bars"></i></div>
                </div>
                <div className="" id="mobile-menu">
                    <div className="d-flex justify-content-between w-100 align-items-center">
                        <div className="nav-logo"><NavLink to='/'>CENTRUM IMPEX</NavLink></div>
                        <div className="nav-menu-btn" id="menu-close"><i className="fal fa-times"></i></div>
                    </div>
                    <menu className="">
                        <ul className="menu-list">
                            <li className="list-item"><NavLink to='/'>Home</NavLink></li>
                            <li className="list-item"><NavLink to='/about'>About Us</NavLink></li>
                            <li className="list-item"><NavLink to='/product'>Product</NavLink></li>
                            <li className="list-item"><NavLink to='/contact' className="th-btn th-btn-1">CONTACT</NavLink></li>
                        </ul>
                    </menu>
                </div>
            </div>
        </header>
    )
}
