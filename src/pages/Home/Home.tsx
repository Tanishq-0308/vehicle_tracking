import { IonButton, IonContent, IonHeader, IonIcon, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menuOutline } from 'ionicons/icons'

import './Home.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const Home: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)
  const openbar = () => {
    if (sidebar) {

      setSidebar(!sidebar)
    }
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='bg-map-img h-screen' onClick={openbar}>
          <IonHeader className='ion-no-border'>
            <IonToolbar className='home-IonToolbar' color={'transparent'}>
              <IonButton slot='start' fill='clear' color={'light'}>
                <IonMenuButton />
              </IonButton>
              <IonTitle className='text-gray-400 mr-6 text-lg' slot='end'>
                <button >
                  Today Task
                </button>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
