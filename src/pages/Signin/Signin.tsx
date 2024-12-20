import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import React, { FormEvent, useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {login} from '../../apis/apis.js'


const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const history=useHistory();

  // Handle form submission
  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    const inputs={
      PhoneOrEmail:email,
      password:password
    }
    

    // Basic validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');
    console.log('Email:', email);
    console.log('Password:', password);
    
    setEmail('');
    setPassword('')

    try{
      const response= await axios.post(login(),inputs )
      const access_token= response.data.access_token;
      console.log(response);
      console.log(response.data.IsSucess);
      
      localStorage.setItem('token',access_token);
      if(response.data.IsSucess===true){
        history.push('/app')
      }else{
        alert('Login details are not correct')
      }
    }catch(err){
      console.log(err);
      
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="bg-img h-full overflow-auto">
          <div className="overlay"></div>
          <div className="w-full flex h-[320px] overflow-hidden items-center justify-center">
            <h2 className="text-white text-[2.1rem] z-50 font-light">
              Trucks<span className="font-bold">Driver</span>
            </h2>
          </div>
          <div className="text-white pt-5 relative z-50 text-center">
            <h2 className="text-2xl font-normal m-0 mb-9 relative welcome">Welcome</h2>
            <h3>
              Enter your phone number to <br /> sign in
            </h3>
            <IonGrid>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <form onSubmit={handleSubmit}>
                    <IonList lines="none" className="bg-transparent">
                      <IonItem lines="none" className="m-4 rounded-md">
                        <IonInput
                           type="text"
                           value={email}
                           onIonChange={(e) => setEmail(e.detail.value!)}
                           placeholder="Phone number"
                           required
                        />
                      </IonItem>
                      <IonItem lines="none" className="m-4 rounded-md">
                        <IonInput
                           type="password"
                           value={password}
                           onIonChange={(e) => setPassword(e.detail.value!)}
                           placeholder="Password"
                           required
                        />
                      </IonItem>
                      <IonButton type="submit" expand="block" size="large" className="text-sm mx-4">
                        Continue
                      </IonButton>
                    </IonList>
                  </form>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signin;
