import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import SideBar from "./SideBar";
import { AllStores } from "./AllStore";
import { useCallback } from "react";
import { useMemo } from "react";

import { GiFruitBowl, GiHamburgerMenu } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";


function MapBox() {
  const accessToken =
    "pk.eyJ1IjoiY293YWZvajg1MCIsImEiOiJjbDhqbmw5N2oxM2hvNDFtanN2eWprbTN3In0.YqFF95gOPUaMR1L206GTaA";

  const [lat, setLat] = useState(20.5937);
  const [lng, setLng] = useState(78.9629);
  const [zoom, setZoom] = useState(4);
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);
  const mapRef = useRef(Map);

  const geoJson = AllStores;

  const layerStyle = {
    id: "locations",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
    },
  };

  const initialViewState = {
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  };

  const flyToStore = useCallback((coordinates) => {
    mapRef.current.flyTo({
      center: coordinates,
      zoom: 8,
      duration: 2000,
    });
  }, []);

  // marker and popup
  const pins = useMemo(() => {
    return AllStores.features.map((store, index) => {
      return (
        <Marker
          key={`marker-${index}`}
          longitude={store.geometry.coordinates[0]}
          latitude={store.geometry.coordinates[1]}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(store);
            flyToStore(store.geometry.coordinates);
          }}
        >
          <img
            src={`src/Map/images/Fruit_${store.properties.item}_Logo.png`}
            className="w-12"
            alt=""
          />
        </Marker>
      );
    });
  }, []);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={accessToken}
      >
        {pins}
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
                  <GiFruitBowl className="h-4"/>
                  <span className="text-base">{popupInfo.properties.item}</span>
                </div>
                <div className="bg-green-400 px-2 rounded-md border border-black flex space-x-2 justify-center">
                  <BiPhoneCall className="h-6"/>
                  <button className="text-base" value={popupInfo.properties.phone}>Call</button>
                </div>
              </div>
            </div>
          </Popup>
        )}
        <SideBar
          stores={geoJson.features}
          flyToStore={flyToStore}
          setPopupInfo={setPopupInfo}
        />
      </Map>
    </>
  );
}

export default MapBox;