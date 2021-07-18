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


//API_KEY = FFDE63E8B5AB9952E899F45A8377A826559E64EABC1A62AE796808E243F0D9C470F18ADC611B11953D019EED0E281454


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
        this.state = {
            isLoaded: false
        }

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
    componentDidMount() {
        this.setState({ isLoaded: true })
    }
    render() {
        return (

            <Suspense fallback={<Spinner />} >
                {this.state.isLoaded &&
                 <>
                    <div id='00' ><Homepage backgroundImageName={'2'} /></div>
                    <div id='01' ><Servicespage /></div>
                    <div id='02' ><Aboutpage /></div>
                    <div id='03' ><Collectionspage /></div>
                    <div id='04' ><Contactpage /></div>
                </>}
            </Suspense>

        )
    }
}
