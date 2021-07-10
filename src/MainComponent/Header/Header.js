import { BrowserRouter, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { urlTabsMapping } from "../../Mapping/Mapping";

const LinkExtend = styled(Link).attrs((props) => ({}))`  
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    ${props => `color: ${props.to === props.nowPathName ? "#1890ff" : "#000"}`};
    ${props => `  box-shadow: ${props.to === props.nowPathName ? "inset 0px -1px" : "unset"}`};

    &:hover {
      box-shadow: inset 0px -1px;
    }

`

const HeaderComponent = (props) => {

    const nowPathName = useHistory().location.pathname;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                height: "56px"
            }}
        >

            {
                Object.keys(urlTabsMapping).map((url) => {
                    return (
                        <>
                            <LinkExtend to={url} nowPathName={nowPathName}>
                                {urlTabsMapping[url]}
                            </LinkExtend>
                        </>
                    )
                })
            }


        </div >
    )
}

export const Header = HeaderComponent