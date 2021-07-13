import React, { Suspense } from 'react';
import Spinner from './Components/Loading/Pagespinner';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Aboutpage = React.lazy(() => import('./Pages/Aboutpage/Aboutpage'));
const Homepage = React.lazy(() => import('./Pages/Homepage/Homepage'));
const Collectionspage = React.lazy(() => import('./Pages/Collectionspage/Collectionspage'))
const Servicespage = React.lazy(() => import('./Pages/Servicespage/Servicespage'));
const Contactpage = React.lazy((() => import('./Pages/Contactpage/Contactpage')));

var onWindowChangeTriggerEvents = []

export const addTriggerEventToOnWindowChange = (triggerEvent) => {
    if (triggerEvent) onWindowChangeTriggerEvents.push(triggerEvent)
}

const onWindowChange = () => {
    if (onWindowChangeTriggerEvents.length > 0) {
        onWindowChangeTriggerEvents.forEach(element => {
            if (element) element()
        }
         
    );
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        window.addEventListener('resize', () => {
            onWindowChange()
        })
        Aos.init({
            offset: 210,
            duration: 600,
            easing: 'ease-in-out-sine',
            delay: 200,
        })

    }
    render() {
        return (
            <>
                <Suspense fallback={<Spinner />} >
                    <Homepage backgroundImageName={'0'} />
                    <Servicespage />
                    <Aboutpage />
                    <Collectionspage />
                    <Contactpage />
                </Suspense>
            </>
        )
    }
}
