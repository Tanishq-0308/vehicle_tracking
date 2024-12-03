import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterLink, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import driverPic from '../../../assets/images/driver_pic.png'
import { Route, Redirect, useHistory } from 'react-router';
import Home from '../Home';
import Profile from '../../Profile/Profile';
import TandC from '../../T&C/T&C';
import Contactus from '../../Contactus/Contactus';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { ContactMail, ContentPasteOutlined, Logout } from '@mui/icons-material';

const paths = [
    {
        name: 'Home',
        path: '/app/home',
        icon: <HomeIcon/>
    },
    {
        name: 'My Trips',
        path: '/app/profile',
        icon: <LocalShippingIcon/> 
    },
    {
        name: 'My Profile',
        path: '/app/profile',
        icon: <PersonIcon/>
    },
    {
        name: 'Terms & Conditions',
        path: '/app/terms-&-conditions',
        icon: <ContentPasteOutlined/>
    },
    {
        name: 'Contact us',
        path: '/app/contact-us',
        icon: <ContactMail/>
    },
    {
        name: 'Logout',
        path: '',
        icon: <Logout/>
    }

];
const Sidebar: React.FC = () => {
    const history=useHistory();

    const handleLogout=()=>{
        localStorage.removeItem('token');
        history.push('/signin')
    }
   
    return (
        <IonPage>
            <IonSplitPane contentId='main'>
                <IonMenu contentId='main'>
                    <IonHeader className='ion-no-border'>
                        <IonToolbar >
                            <div className='flex flex-col items-center justify-center gap-1 my-8'>
                                <img src={driverPic} alt="" className='h-[80px] w-[80px]' />
                                <h2 className='text-xl font-bold'>Peter Wiiliamson</h2>
                                <h3 className='font-light'>+91 9999999999</h3>
                            </div>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {paths.map((items, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem routerDirection='none' routerLink={items.path} className='ion-margin-top'>
                                    <span className='text-[#feb940]'>{items.icon}</span>
                                    <h4 className='ml-3' onClick={items.name==='Logout' ? handleLogout : undefined}>{items.name}</h4>
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>
                </IonMenu>
                <IonRouterOutlet id='main'>
                    <Route exact path="/app/home" component={Home} />
                    {/* <Route path='/app/trips'component={MyTrips}/> */}
                    <Route path='/app/profile' component={Profile} />
                    <Route path='/app/terms-&-conditions' component={TandC} />
                    <Route path='/app/contact-us' component={Contactus} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Sidebar;