import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { chevronBackSharp, } from 'ionicons/icons'
import { useHistory } from 'react-router';
const Signup: React.FC = () => {
    const history= useHistory();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        gender: '',
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        history.push('/app','root')
        // Add your submission logic here
    };


    return (
        <IonPage>
            <IonContent fullscreen >
                <div className='bg-img overflow-auto h-screen'>
                    <div className='overlay'></div>
                    <IonHeader className='bg-transparent'>
                        <IonToolbar className=' IonToolbar' >
                            <div className='flex items-center'>
                                <IonButton className='text-white' fill='clear' routerLink='/verification'>
                                    <IonIcon icon={chevronBackSharp} className='text-white'></IonIcon>
                                </IonButton>
                                <IonTitle className='text-white'>
                                    <span className='flex items-center w-full'>
                                        Sign up
                                    </span>
                                </IonTitle>
                            </div>
                        </IonToolbar>
                    </IonHeader>
                    <div className='pt-14 relative z-[9999] text-center'>
                        <div className="upload_photo">
                            <div className="img_box center_img">
                                <div className=' flex justify-center'>
                                    <div className='bg-black rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 432 432"><path fill="grey" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 64Q187 67 168 85.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 303q39.5 0 73-18.5T341 301q0-20-23.5-35.5t-52-23t-52-7.5t-52 7.5t-52 23T85 301q21 32 55 50.5t73.5 18.5" /></svg>
                                    </div>

                                </div>
                                <button className='text-[#feb940] text-lg m-0 mb-8'>Upload Photo</button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <IonGrid >
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                
                            <IonList lines="none" className="bg-transparent">
                                <IonItem lines="none" className="m-4 rounded-md">
                                    <IonInput
                                        type="text"
                                        
                                        placeholder="Full Name"
                                        className=""
                                        value={formData.fullName}
                                        onIonChange={(e) => handleInputChange('fullName', e.detail.value!)}
                                        aria-label="Full Name"
                                    ></IonInput>
                                </IonItem>
                                <IonItem lines="none" className="m-4 rounded-md">
                                    <IonInput
                                        type="email"
                                        
                                        placeholder="Email Address"
                                        className=""
                                        value={formData.email}
                                        onIonChange={(e) => handleInputChange('email', e.detail.value!)}
                                        aria-label="Email Address"
                                    ></IonInput>
                                </IonItem>
                                <IonItem lines="none" className="m-4 rounded-md">
                                    <IonInput
                                        type="number"
                                        
                                        placeholder="Phone number"
                                        className=""
                                        value={formData.phoneNumber}
                                        onIonChange={(e) => handleInputChange('phoneNumber', e.detail.value!)}
                                        aria-label="Phone Number"
                                    ></IonInput>
                                </IonItem>
                                <IonItem lines="none" className="m-4 rounded-md">
                                    <IonInput
                                        type="text"
                                        placeholder="Company Name (Optional)"
                                        className=""
                                        value={formData.companyName}
                                        onIonChange={(e) => handleInputChange('companyName', e.detail.value!)}
                                        aria-label="Company Name"
                                    ></IonInput>
                                </IonItem>
                                <IonItem lines="none" className="m-4 rounded-md">
                                    <IonSelect
                                        placeholder="Select Gender"
                                        value={formData.gender}
                                        onIonChange={(e) => handleInputChange('gender', e.detail.value!)}
                                        aria-label="Gender"
                                    >
                                        <IonSelectOption value="Male">Male</IonSelectOption>
                                        <IonSelectOption value="Female">Female</IonSelectOption>
                                        <IonSelectOption value="Others">Others</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                <IonButton
                                    type="submit"
                                    expand="block"
                                    size="large"
                                    className="text-sm mx-4"
                                >
                                    Submit
                                </IonButton>
                            </IonList>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Signup;