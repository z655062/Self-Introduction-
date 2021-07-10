import { Header, Body, Footer } from '../';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Experience } from '../Pages/Experience'
import { Layout } from '../MainComponent';

const RoutersComponent = (props) => {

    return (
        <BrowserRouter basename="Self-Introduction-">
            <Switch>
                <Layout >
                    <Route exact path="/"
                        render={() => {
                            return (
                                <>
                                    {console.log(Array(20))}
                                    {Array(30).fill(0).map((num, index) => {
                                        return <p>{index}</p>
                                    })}
                                </>
                            )
                        }}
                    />

                    <Route path="/experience"
                        render={() => {
                            return <Experience />
                        }}
                    />
                </Layout>
            </Switch>

        </BrowserRouter>
    )
}

export const Routers = RoutersComponent