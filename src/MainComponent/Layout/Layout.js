import { Header, Body, Footer } from '../';
import useWindows from '../../handler/useWindows'

const LayoutComponent = (props) => {
    const [Width, Height] = useWindows();

    return (
        <div
            style={{
                width: "100%",
                height: `${Height}px`,
                backgroundColor: "#ECFFFF"
            }}
        >
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export const Layout = LayoutComponent