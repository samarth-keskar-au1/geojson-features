# GeoJSON Features

Goal - Fetch features from bounding box co-ordinates from OpenStreetMap Map API and show the details of the feature.

![](/public/demo.gif)

### 1. Tech Stack

This app is built using `React`, `Axios`, `Ant Design` `React Leaflet` `React Leaflet Draw`.

### 2. App Structure

- Global context is used as a storage for api data and error data.
- Under the global context there are two main components
  - `GeoContainer` - It has two components `Map` & `Form` which is used to collect user input.
  - `DataViewer`- It has two components `Table` & `Details` modal to display the api data.

### 3. Inputs & Data Source

There are two ways where users can input bounding box co-ordinates

- Selecting from map directly using rectangular shape.
- By enterning the co-ordinates manually.

The OpenStreetMap Map API will return OSM data in XML format containing all the features needed. Features will be converted to geojson format using `osmtogeojson` libary and displayed on the screen.

### 4. Input Data Validation

The validation of the data was made through the form as following:

- The value of latitues must be between -90 to 90
- The value of longitude must be between -180 to 180
- Maximum Longitude should not be lesser than Mimimum Longitude.
- Maximum Latitude should not be lesser than Mimimum Latitude.
- If input is null/undefined submit button will show the error below InputNumber boxes.

### 5. Future Enhancements

Because of the time constraints I was not able to do few things which I would like to do in future.

- Unit testing for forms and modal behaviours.
- Responsive User Interface.

### 6. How To Clone & Run ?

```console
git clone https://github.com/samarth-keskar-au1/geojson-features.git
```

```console
cd geojson-features
```

```console
 npm install
```

```console
 npm start
```
