import React, { Component, Suspense } from 'react';
import Spinner from './Components/Loading/Pagespinner';
const Aboutpage = React.lazy(()=> import('./Pages/Aboutpage/Aboutpage'));
const Homepage = React.lazy(() => import('./Pages/Homepage/Homepage'));
const Servicespage = React.lazy(() => import('./Pages/Servicespage/Servicespage'));
export default class Main extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<Spinner />} >
                    <Homepage backgroundImageName={'0'}/>
                    <Servicespage />
                    <Aboutpage/>
                </Suspense>
            </>
        )
    }
}
