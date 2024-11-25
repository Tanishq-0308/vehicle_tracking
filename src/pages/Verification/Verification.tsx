import { IonBackButton, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Verification.css'
import {chevronBackSharp} from 'ionicons/icons'

const Verfication: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen >
            <div className='bg-imgg overflow-hidden h-screen'> 
                <div className='overlay'></div>
                <IonHeader className='bg-transparent ion-no-border'>
                <IonToolbar className=' IonToolbar' >
                    <div className='flex items-center'>
                    <IonButton className='text-white' fill='clear' routerLink='/signin'>
                        <IonIcon icon={chevronBackSharp} className='text-white'></IonIcon>
                    </IonButton>
                    <IonTitle className='text-white'>
                        <span className='flex items-center w-full'>
                            Verification 
                            <span className='ml-auto mr-2 block text-lg'> 01:22</span>
                        </span>
                    </IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <div className='pt-14 relative z-[9999] text-center'>
                    <h2 className='text-[#feb940] text-lg m-0 mb-8'>Phone Verification</h2>
                    <h3 className='text-white text-[rem] m-0 font-normal e'>Enter OTP sent on below given number <br />+91 9876543210</h3>
                    <IonList lines='none' className='bg-transparent mt-14'>
                            <IonItem lines='none' className='m-4 rounded-md px-4 py-2 '>
                                <IonInput type='text' className='text-2xl text-center tracking-[13px]' value="588700"></IonInput>
                            </IonItem>
                            <IonButton expand='block' size='large' className='text-sm  px-4 py-2 mx-4' routerLink='/signup'>Submit</IonButton>
                        </IonList>
                </div>
                </div>
            </IonContent>
            
        </IonPage>
    );
};

export default Verfication;