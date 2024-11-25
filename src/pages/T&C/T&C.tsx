import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const TandC: React.FC = () => {

    return (
        <IonPage>
            {/* <IonContent >
           
             
            </IonContent> */}
            <IonCard>
                <IonCardHeader>
                <div className='bg-img h-[300px]'>
                <div className='overlay'></div>
             <IonHeader className='ion-no-border '>
                <IonToolbar color={'transparent'}>
                <IonButton slot='start' fill='clear' color={'light'}>
                    <IonMenuButton/>
                </IonButton>
            <IonTitle color={'light'}>Terms & Conditions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className='w-full h-[200px] flex overflow-hidden items-center justify-center'>
                        <h2 className='text-white text-[2.1rem] z-50 font-light'>Trucks<span className='font-bold'>Driver</span></h2>
                    </div>
             </div>
                </IonCardHeader>
                <IonCardContent>
                    <h2 className=''>Terms of Use</h2>
                    <p className='ion-'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero ipsa qui dolores aliquid tempora saepe ullam non voluptatibus nam, felof pili pinos , grante holea and bonjue since 1500s.</p>
                </IonCardContent>
            </IonCard>
        </IonPage>
    );
};

export default TandC;