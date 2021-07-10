import { Header, Body, Footer } from '../';
import useWindows from '../../handler/useWindows'

const LayoutComponent = (props) => {
    const [Width, Height] = useWindows();

    return (
        <div
            style={{
                width: "100%",
                height: `${Height}px`,
                backgroundColor: "#ECFFFF",
                overflow: "hidden"
            }}
        >
            <Header />
            <Body height={Height} children={props.children} />
            <Footer />
        </div>
    )
}

export const Layout = LayoutComponent