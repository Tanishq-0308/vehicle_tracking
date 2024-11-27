import { IonButton, IonContent, IonHeader, IonIcon, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

const Home: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

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
      }
    };

    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the map only if mapRef exists
      mapInstance.current = L.map(mapRef.current, {
        center: location ? [location.lat, location.lng] : [28.6234, 77.1234],
        zoom: 16,
        zoomControl:false
      });

      const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
    googleStreets.addTo(mapInstance.current);
      // Use OpenStreetMap as the tile layer
      // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.current);

      // Add a marker at the current location (if available)
      if (location) {
        L.marker([location.lat, location.lng]).addTo(mapInstance.current).bindPopup('Your location');
      }
    }

    // Cleanup the map instance when the component is unmounted
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, [location]); // Re-run map initialization whenever the location changes

  return (
    <IonPage>
      <IonContent fullscreen>
          <IonHeader className="ion-no-border">
            <IonToolbar className="home-IonToolbar" color="transparent">
              <IonButton slot="start" fill="clear" color="dark">
                <IonMenuButton />
              </IonButton>
              <IonTitle className="text-gray-400 mr-6 text-lg" slot="end">
                <button>Today Task</button>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          
        <div className="h-screen " ref={mapRef}>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
