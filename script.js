
      require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 15,
          center: [-94.244, 39.735] // longitude,] // longitude, latitude
        });
      });
