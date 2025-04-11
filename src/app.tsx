import logo from '../assets/young_logo.png';
import './app.css';
import '@ionic/react/css/core.css';
import {setupIonicReact} from "@ionic/react";
import {IonHeader, IonToolbar, IonTitle, IonContent} from "@ionic/react";

setupIonicReact();

const App = () => {
    return (
        <>
            <IonHeader className="home-header">
                <IonToolbar>
                    <img src={logo} className="home-header--logo" alt="logo"/>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Content</h1>
            </IonContent>
        </>
        // <div className="home">
        //     <header className="home-header">
        //         <img src={logo} className="home-header--logo" alt="logo" />
        //     </header>
        // </div>
    );
}

export default App;
