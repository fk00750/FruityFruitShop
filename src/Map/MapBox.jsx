import { useRef, useState, useCallback, useMemo } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import SideBar from "./SideBar";

import { GiFruitBowl, BiPhoneCall } from "../Collection/ReactIconsCollection";
import { useEffect } from "react";

function MapBox() {
  const accessToken =
    "pk.eyJ1IjoiY293YWZvajg1MCIsImEiOiJjbDhqbmw5N2oxM2hvNDFtanN2eWprbTN3In0.YqFF95gOPUaMR1L206GTaA";

  // latitude & langitude
  const [lat, setLat] = useState(20.5937);
  const [lng, setLng] = useState(78.9629);
  // Zoom level of map
  const [zoom, setZoom] = useState(3);

  // stores the popup window information
  const [popupInfo, setPopupInfo] = useState(null);

  const mapRef = useRef(Map);
  const [FruitFarms, setFruitFarms] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  // initial Map State
  const initialViewState = {
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  };

  // fly to fruit farm on click
  const flyToFarm = useCallback((coordinates) => {
    mapRef.current.flyTo({
      center: coordinates,
      zoom: 8,
      duration: 2000,
    });
  }, []);

  // fetches the data
  useEffect(() => {
    const fetchFruitsDATA = async function () {
      const response = await fetch(
        "https://fruity-fruit-shop.herokuapp.com/api/fruitfarm"
      );
      const data = await response.json();

      if (response.ok) {
        setFruitFarms(data);
        setIsDataLoading(true);
      }
    };

    fetchFruitsDATA();
  }, []);


  const AllFruits = {
    Apple: "/images/fruit_Apple_Logo.png",
    Banana: "/images/fruit_Banana_Logo.png",
    Grape: "/images/fruit_Grape_Logo.png",
    Guava: "/images/fruit_Guava_Logo.png",
    Litchi: "/images/fruit_Litchi_Logo.png",
    Mango: "/images/fruit_Mango_Logo.png",
    Orange: "/images/fruit_Orange_Logo.png",
    Pineapple: "/images/fruit_Pineapple_Logo.png",
  };

  // marker and popup
  const pins = useMemo(() => {
    if (!FruitFarms && isDataLoading) return;
    else if (FruitFarms && isDataLoading)
      return FruitFarms.fruitFarm.map((farm, index) => {
        return (
          <Marker
            key={`marker-${index}`}
            longitude={farm.geometry.coordinates[0]}
            latitude={farm.geometry.coordinates[1]}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(farm);
              flyToFarm(farm.geometry.coordinates);
            }}
          >
            <img src={`${AllFruits[farm.properties.name]}`} className="w-12" alt="" />
          </Marker>
        );
      });
  }, [isDataLoading]);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={accessToken}
      >
        {isDataLoading && pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            onClose={() => setPopupInfo(null)}
          >
            <div className="">
              <div className="px-2 py-2 rounded-md space-y-2">
                <div className="flex space-x-2">
                  <GiFruitBowl className="h-4" />
                  <span className="text-base">{popupInfo.properties.name}</span>
                </div>
                <div className="bg-green-400 px-2 rounded-md border border-black flex space-x-2 justify-center">
                  <BiPhoneCall className="h-6" />
                  <button
                    className="text-base"
                    value={popupInfo.properties.phone}
                  >
                    Call
                  </button>
                </div>
              </div>
            </div>
          </Popup>
        )}
        <SideBar
          fruitFarm={FruitFarms.fruitFarm}
          flyToFarm={flyToFarm}
          setPopupInfo={setPopupInfo}
        />
      </Map>
    </>
  );
}

export default MapBox;
