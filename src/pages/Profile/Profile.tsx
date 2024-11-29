import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonTitle, IonToolbar } from '@ionic/react';
import { camera, chevronForward } from 'ionicons/icons';
import React, { useState } from 'react';

const Profile: React.FC = () => {

    const [selectedSegment, setSelectedSegment] = useState('about_driver');

    // Handle segment change
    const handleSegmentChange = (event: CustomEvent) => {
        setSelectedSegment(event.detail.value);
    };

    return (
        <IonPage>
            <IonHeader className='bg-[#2e363b]' >
                <IonToolbar color={'transparent'}>
                    <IonButton slot='start' fill='clear' color={'medium'}>
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle color={'medium'}>Peter Williamson</IonTitle>
                </IonToolbar>
                <div className=' bg-[#2e363b] text-white'>
                    <div className='flex pb-4 ml-6'>
                        <div className='min-w-24 max-w-24 h-20 relative overflow-hidden mr-6'>
                            <div className=' min-w-20 max-w-20 h-20 rounded-2xl'>
                                <img src="src\assets\images\driver_pic.png" alt="" />
                            </div>
                            <IonIcon icon={camera} className='absolute top-0 right-0 bottom-0 m-auto text-center z-50 rounded-3xl w-6 h-6 text-sm leading-6' color='primary'></IonIcon>
                        </div>
                        <div>
                            <h2 className='m-0 mt-5 text-lg font-bold leading-4 pb-2 text-[#27bd2e]' >In Transist</h2>
                            <p className='flex items-center m-0 '> In Truck Num <span className='font-semibold mx-1'>GTY 1024</span>
                                <IonIcon icon={chevronForward} color='primary'></IonIcon>
                            </p>
                        </div>
                    </div>
                    <IonSegment mode='md' value={selectedSegment} onIonChange={handleSegmentChange}>
                        <IonSegmentButton className='ion-text-center' contentId='about_driver' value='about_driver'>
                            My Info
                        </IonSegmentButton>
                        <IonSegmentButton className='ion-text-center' value='trip_history' contentId='trip_history'>
                            Trip History
                        </IonSegmentButton>
                    </IonSegment>
                </div>
            </IonHeader>
            <IonContent>
                <div className='bg-img h-full'>
                    <div className='overlay'></div>
                    <IonSegmentView>
                    {selectedSegment === 'about_driver'  && (
                        <IonSegmentContent id='about_driver' className=' h-full'>
                            <form action="" className='h-full flex flex-col'>
                                <IonGrid>
                                    <IonRow className='ion-justify-content-center'>
                                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <IonCard className='m-3'>
                                    <IonCardContent>
                                        <IonInput label='Driver Name' placeholder='Peter Williamson' labelPlacement='floating'></IonInput>
                                    </IonCardContent>
                                </IonCard>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-center'>
                                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <IonCard className='m-3'>
                                    <IonCardContent>
                                        <IonInput label='Phone Number' placeholder='+91 9998887771' labelPlacement='floating'></IonInput>
                                    </IonCardContent>
                                </IonCard>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-center'>
                                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <IonCard className='m-3'>
                                    <IonCardContent>
                                        <IonInput label='License Number' placeholder='R730' labelPlacement='floating'></IonInput>
                                    </IonCardContent>
                                </IonCard>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                                <IonButton expand='block' className=' w-full bottom-0' size='large'>
                                    Update Profile
                                </IonButton>
                            </form>
                        </IonSegmentContent>
                    )}
                    {selectedSegment === 'trip_history' && (
                        <IonSegmentContent id='trip_history' className='mb-0 relative rounded-xl z-50 w-[100% -27px] mx-2 mt-3 bg-none'> 
                                {
                                    [...Array(9)].map((_)=>(
                                        <IonGrid>
                                            <IonRow className='ion-justify-content-center'>
                                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <IonList className='m-2 rounded-lg '>
                                        <IonItem lines='none' className=' p-0 ion-no-padding'>
                                            <div className='w-full m-1 flex flex-col gap-1'>
                                                <div className='flex px-3 border-b py-2'>
                                                    <div className='min-w-[30px] max-w-[30px] border-2 min-h-[30px] rounded-full mr-2'>
                                                        <img src="src\assets\images\truck1.png" alt="truckimg"  className='rounded-full'/>
                                                    </div>
                                                    <div className=' w-full flex justify-between'>
                                                    <h2 className='flex items-center text-lg font-bold leading-4 m-0'>
                                                        GTY 1024 <sub className='text-gray-600 font-normal text-[12px] mx-1 my-0'>SCANIA R730</sub>
                                                    </h2>
                                                    <span className='text-green-700 text-lg font-bold  m-0'>Hemilton (125)</span>
                                                    </div>
                                                    
                                                </div>
                                                <div className=' rounded-lg px-[9px] pt-1'>
                                                    <IonRow className='flex justify-between'>
                                                        <IonCol className='pb-1' size='7'>
                                                            <p className='text-gray-400'>Task</p>
                                                            <h4 className='text-gray-600'>Chemical Delivery</h4>
                                                        </IonCol>
                                                        <IonCol size='5'>
                                                            <p className='text-gray-400'>Trip Completed</p>
                                                            <h4 className='text-gray-600'>20 June, 02:05pm</h4>
                                                        </IonCol>
                                                    </IonRow>
                                                </div>
                                            </div>
                                        </IonItem>
                                    </IonList>
                                        </IonCol>
                                    </IonRow>
                                        </IonGrid>
                                    ))
                                }
                        </IonSegmentContent>
                        )}
                    </IonSegmentView>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Profile;