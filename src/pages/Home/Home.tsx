import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { chevronUp, closeOutline, cut, flag, map } from 'ionicons/icons';

const Home: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const modal= useRef<HTMLIonModalElement>(null);
  const todayModal= useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      } catch (error) {
        console.error('Error getting location', error);
        alert('Unable to retrieve location. Please enable location services.');
      }
    };

    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      // Initialize map only when location is available
      if (!mapInstance.current) {
        mapInstance.current = L.map(mapRef.current, {
          center: [location.lat, location.lng],
          zoom: 16,
          zoomControl: false,
        });

        // Add Google Streets Tile Layer
        const googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        });
        googleStreets.addTo(mapInstance.current);

        // Add marker for the user's current location
        L.marker([location.lat, location.lng]).addTo(mapInstance.current).bindPopup('Your location');
      } else {
        // Reposition the map if the location changes
        mapInstance.current.setView([location.lat, location.lng], 16);
      }
    }

    if (mapInstance.current) {
      mapInstance.current.invalidateSize();  // Forces Leaflet to recalculate map size
    }

    // Cleanup map instance when component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, [location]); // Only re-run when location changes

  return (
    <IonPage>
      <IonHeader className={`ion-no-border`}>
      <IonToolbar className=" bg-[#242424f1]" color={'transparent'}>
        <IonButton slot="start" fill='clear' color={'light'}>
          <IonMenuButton />
        </IonButton>
        <IonTitle className="text-gray-400 mr-6 text-lg" slot="end" id='today-task-modal'>
          Today Task
        </IonTitle>
      </IonToolbar>
    </IonHeader>

      <IonContent fullscreen className="relative">
        {/* Map container styled as background */}
        <div
          ref={mapRef}
          className="map-container absolute top-0 left-0 right-0 z-0"
          style={{ height: '100%' }}
        ></div>

        {/* Content wrapper above the map */}
        <IonModal ref={modal} trigger='upcoming-task-modal' breakpoints={[0,0.5,0.8,1]} initialBreakpoint={0.5} >
        <IonHeader>
              <IonToolbar color={'primary'}>
                <IonButtons slot='start'>
                  <IonButton onClick={()=> modal.current?.dismiss()}>
                  <IonIcon icon={closeOutline} size='large'></IonIcon>
                  </IonButton>
                </IonButtons>
                <IonTitle slot='end' className='mr-5'>
                  Upcoming Task
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
            {[...Array(8)].map((_)=>(
          <IonGrid className='ml-1 relative'>
            <IonRow className='ion-justify-content-center'>
              <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                <IonList lines='none' className='rounded-xl '>
                  <IonItem lines="none" className="p-0 ion-no-padding ">
                    <div className="w-full mx-1 flex flex-col gap-1 rounded-xl bg-[#000000de] text-white">
                      <div className="flex px-3 border-b py-2">
                        <div className="min-w-[30px] max-w-[30px] border-2 min-h-[30px] rounded-full mr-2">
                          <img
                            src="src/assets/images/truck1.png"
                            alt="truckimg"
                            className="rounded-full"
                          />
                        </div>
                        <div className="w-full flex justify-between">
                          <h2 className="flex items-center text-lg font-bold leading-4 m-0">
                            GTY 1024
                            <sub className="text-gray-600 font-normal text-[12px] mx-1 my-0">
                              SCANIA R730
                            </sub>
                          </h2>
                          <span className="text-green-700 text-lg font-bold m-0">
                            In Transit
                          </span>
                        </div>
                      </div>
                      <div className=" px-[9px] pt-1">
                        <IonRow className="flex justify-between">
                          <IonCol className="pb-1" size="8">
                            <p className="text-gray-400">Task</p>
                            <h4 className="text-gray-600">Chemical Delivery</h4>
                          </IonCol>
                          <IonCol size="">
                            <p className="text-gray-400">Trip Completed</p>
                            <h4 className="text-gray-600">20 June, 02:05pm</h4>
                          </IonCol>
                        </IonRow>
                      </div>
                      <div className='p-2'>
                        <IonRow className='flex justify-between'>
                          <IonCol className='pb-1' size='9'>
                            <p className='text-gray-400'>Current Location</p>
                            <h4 className='text-gray-600'>1141, Hemiltone tower, Newyork, USA</h4>
                          </IonCol>
                          <IonCol className='flex items-center justify-center '>
                            <div className='border-2 p-2 rounded-3xl flex items-center justify-center'>
                            <IonIcon icon={map} color='primary'></IonIcon>
                            </div>
                          </IonCol>
                        </IonRow>
                      </div>
                    </div>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        ))}
            </IonContent>
        </IonModal>


        <IonModal ref={todayModal} trigger='today-task-modal' breakpoints={[0,0.5,0.8,1]} initialBreakpoint={0.5} >
        <IonHeader>
              <IonToolbar color={'primary'}>
                <IonButtons slot='start'>
                  <IonButton onClick={()=> todayModal.current?.dismiss()}>
                  <IonIcon icon={closeOutline} size='large'></IonIcon>
                  </IonButton>
                </IonButtons>
                <IonTitle slot='end' className='mr-5'>
                  Today Task
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
            {[...Array(8)].map((_)=>(
          <IonGrid className='ml-1 relative'>
            <IonRow className='ion-justify-content-center'>
              <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                <IonList lines='none' className='rounded-xl '>
                  <IonItem lines="none" className="p-0 ion-no-padding ">
                    <div className="w-full mx-1 flex flex-col gap-1 rounded-xl bg-[#000000de] text-white">
                      <div className="flex px-3 border-b py-2">
                        <div className="min-w-[30px] max-w-[30px] border-2 min-h-[30px] rounded-full mr-2">
                          <img
                            src="src/assets/images/truck1.png"
                            alt="truckimg"
                            className="rounded-full"
                          />
                        </div>
                        <div className="w-full flex justify-between">
                          <h2 className="flex items-center text-lg font-bold leading-4 m-0">
                            GTY 1024
                            <sub className="text-gray-600 font-normal text-[12px] mx-1 my-0">
                              SCANIA R730
                            </sub>
                          </h2>
                          <span className="text-green-700 text-lg font-bold m-0">
                            In Transit
                          </span>
                        </div>
                      </div>
                      <div className=" px-[9px] pt-1">
                        <IonRow className="flex justify-between">
                          <IonCol className="pb-1" size="8">
                            <p className="text-gray-400">Task</p>
                            <h4 className="text-gray-600">Chemical Delivery</h4>
                          </IonCol>
                          <IonCol size="">
                            <p className="text-gray-400">Trip Completed</p>
                            <h4 className="text-gray-600">20 June, 02:05pm</h4>
                          </IonCol>
                        </IonRow>
                      </div>
                      <div className='pl-[9px] pt-1'>
                        <IonRow className='flex justify-between'>
                          <IonCol className='pb-1' size='10'>
                            <p className='text-gray-400'>Current Location</p>
                            <h4 className='text-gray-600'>1141, Hemiltone tower, Newyork, USA</h4>
                          </IonCol>
                          <IonCol className='flex items-center justify-center '>
                            <div className='border-2 p-2 rounded-3xl flex items-center justify-center'>
                            <IonIcon icon={map} color='primary'></IonIcon>
                            </div>
                          </IonCol>
                        </IonRow>
                      </div>
                    </div>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        ))}
            </IonContent>
        </IonModal>
      </IonContent>

      <IonFooter className={`h-[75px] absolute transition-all ease-in-out duration-700 bottom-0 w-full`}  id='upcoming-task-modal'>
        <div className="ion-text-center pt-2 pb-4 px-0 bg-[#222428] text-gray-400 overflow-hidden rounded-t-xl w-[calc(100%-25px)] h-[75px] m-auto">
          <IonIcon icon={chevronUp} className="block m-auto text-2xl mb-2" color="light"></IonIcon>
          <h2 className="m-0 font-medium text-xl tracking-normal">View Upcoming Tasks</h2>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
