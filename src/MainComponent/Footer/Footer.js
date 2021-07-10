

const FooterComponent = (props) => {
    // ...做一些事情 
    return (
        <div
            style={{
                display: "block",
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "24px",
                backgroundColor: "#9D9D9D",
                textAlign: "center",
                lineHeight: "24px",
                fontSize: "14px",
                fontWeight: 600
            }}
        >
            Copyright © 2021 AlbertLu. All rights reserved.
        </div>
    )
}

export const Footer = FooterComponent