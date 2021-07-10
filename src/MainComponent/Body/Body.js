

const BodyComponent = (props) => {
    // ...做一些事情 
    return (
        <>
            <div
                style={{
                    overflow: "auto",
                    height: `calc(${props.height}px - 80px)`
                }}
            >
                {props.children}
            </div>
        </>
        // <div> hello，這是一個函數組件 </div>
    )
}

export const Body = BodyComponent