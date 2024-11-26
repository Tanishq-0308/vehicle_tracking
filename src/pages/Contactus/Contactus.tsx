import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { call, locate, location, mail, navigate, navigateOutline } from 'ionicons/icons';
import React from 'react';

const Contactus: React.FC = () => {

    return (
        <IonPage>
             <IonHeader className=''>
                <div className='bg-map-img h-[200px] relative -z-0'>
                    <IonHeader className='ion-no-border '>
                        <IonToolbar color={'transparent'}>
                            <IonButton slot='start' fill='clear' color={'light'}>
                                <IonMenuButton color={'primary'}/>
                            </IonButton>
                        </IonToolbar>
                        <IonIcon icon={location} className='absolute top-24 left-48 text-3xl' color='primary'></IonIcon>
                    </IonHeader>
                </div>
            </IonHeader>
            <IonContent className=''>
                <div className='bg-img h-full absolute z-10'>
                    <IonCard className=' ion-margin relative' color={'dark'}>
                        <IonCardHeader className='ion-margin text-[18px]'>
                            <p className='text-gray-400'>We're Here !</p>
                        </IonCardHeader>
                        <IonCardContent className='flex'>
                            <p className='text-[0.975rem]'>
                            25, Hilltion Recidency, Golden Tower, Millenium Street, New York, United States
                            </p>
                            <IonButton className='w-[50px] mx-6'>
                            <IonIcon icon={navigate} color='light' ></IonIcon>
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                    <IonCard className=' ion-margin relative' color={'dark'}>
                        <IonCardHeader className='ion-margin text-[18px]'>
                            <p className='text-gray-400'>Contact us</p>
                        </IonCardHeader>
                        <IonCardContent className=''>
                            <div className='flex justify-between'>
                            <div>
                            <h2 className='text-gray-400'>Call us</h2>
                            <p >
                                +91 9998887771
                            </p>
                            </div>
                            <IonButton className='w-[50px] mx-6'>
                            <IonIcon icon={call} color='light' ></IonIcon>
                            </IonButton>
                            </div>
                            <div className='flex justify-between mt-5'>
                            <div>
                            <h2 className='text-gray-400'>Mail us</h2>
                            <p >
                                hello@trucksup.com
                            </p>
                            </div>
                            <IonButton className='w-[50px] mx-6'>
                            <IonIcon icon={mail} color='light' ></IonIcon>
                            </IonButton>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <form action="" >
                    <IonCard className=' ion-margin relative' color={'dark'}>
                        <IonCardHeader className='ion-margin text-[18px]'>
                            <p className='text-gray-400'>Or Write us</p>
                        </IonCardHeader>
                        <IonCardContent >
                            <IonInput type='text' placeholder='Write your message or feedback' fill='outline'>

                            </IonInput>
                        </IonCardContent>
                    </IonCard>
                    <IonButton className=' absolute bottom-0 w-full' size='large'>
                        Submit
                    </IonButton>
                    </form>
                   
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Contactus;