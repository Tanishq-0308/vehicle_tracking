import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './App.css';

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AlzaSy_qSBDUZTrtbaBNuGMkXGOd26oQeeNK3FN', // Ensure your key is valid
  });

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App" style={{ height: '100vh' }}>
      <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }}
       center={{ lat: 37.7749, lng: -122.4194 }} // Example center point, update to your desired location
       zoom={10} // Set a zoom level
      > 

      </GoogleMap>
      {/* {isLoaded && <h2>not loadded</h2>} */}
    </div>
  );
}

export default App;
