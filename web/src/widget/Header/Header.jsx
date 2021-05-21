import React from 'react'
import styled from 'styled-components'

import logo from '../../Assets/logo.png'

const NavStyled = styled.nav`
   background-color:#6495ed;
   display:flex;  
//    justify-content: space-around; 
`;
const AnchorStyled = styled.a`
    :hover{
            }
`;
const CollapseDivStyled = styled.div`
//  background-color:black;
`;
const FormStyled = styled.form`

`;
const FormButtonStyled = styled.button`
width: 20%;
padding: 10px;
background: #2196F3;
color: black;
font-size: 17px;
border: 1px solid grey;
border-left: none;
cursor: pointer;
:hover{
    background: #0b7dda;
}
`;
const FormInputStyled = styled.input`
padding: 10px;
font-size: 17px;
border: 1px solid grey;
/* float: left; */
width: 60%;
background: #f1f1f1;
`;

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { options } = this.props;
        return (
            <>
                <NavStyled className="navbar navbar-expand-md navbar-dark fixed-top">
                    <AnchorStyled href="/" className="navbar-brand">
                        <img src={logo} alt="" width="25%"
                            height="50" />
                    </AnchorStyled>
                    <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" >
                        <span className="navbar-toggler-icon my-toggler"></span>
                    </button>
                    <CollapseDivStyled className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto menu">
                            <li className="nav-item active">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            {/* <li className="nav-item ">
                                <a href="/About" className="nav-link">AboutUs</a>
                            </li> */}
                            <li className="nav-item ">
                                <a href="/login" className="nav-link">{options ? options.Moments : "Login"}</a>
                            </li>
                            <li className="nav-item ">
                                <a href="/login" className="nav-link">{options && options.Notifications}</a>
                            </li>
                            <li className="nav-item ">
                                <a href="/login" className="nav-link">{options && options.Messages}</a>
                            </li>
                        </ul>
                    </CollapseDivStyled>
                    {/* <FormStyled class="example" action="#" style={{ margin: "auto", maxWidth: '200px' }}>


                        <FormButtonStyled type="submit" style={{ backgroundColor: 'white', color: 'gray', width: '40px' }}><i class="fa fa-location-arrow" aria-hidden="true"></i></FormButtonStyled>

                        <FormInputStyled type="text" placeholder="Search For Restaurant, cuisine or dish" name="search2" />
                        <FormButtonStyled type="submit" routerLink="/restaurantsComponent">Find Food</FormButtonStyled>
                    </FormStyled> */}
                </NavStyled>

            </>
        );
    }
}