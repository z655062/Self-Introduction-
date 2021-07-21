import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Container, Text } from "."

const ExpansionComponent = (props) => {

    const [Extend, setExtend] = useState(false);

    return (
        <>
            <Container
                style={{
                    display: "block",
                    backgroundColor: "#FFF",
                    height: Extend ? "auto" : "50px",
                    borderRadius: "25px",
                    boxShadow: Extend ? "0 0 3px red" : "0 0 3px",
                    cursor: "pointer",
                    alignItems: "center",
                    // padding: "0 0 24px",
                    margin: "0 0 16px 0"
                }}
                onClick={() => {
                    setExtend(u => !u);
                }}
            >
                <Text
                    style={{
                        lineHeight: "50px",
                        height: "50px",
                        borderBottom: Extend ? "1px red solid" : "0",
                        width: "80%",
                        margin: "0 10%"
                    }}
                >
                    {props.title}
                </Text>

                {
                    Extend
                    &&
                    props.children
                }
            </Container>
        </>
    )
}

export const Expansion = ExpansionComponent