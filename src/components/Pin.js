import {layer, control, Controls, Map, Layers, showPopup} from "react-openlayers";

function Pin() {
  return ( 
    <div>
        <Map view={{center: [0, 0], zoom: 2}} onClick={showPopup}>
          <Layers>
            <layer.Tile/>
          </Layers>
          <Controls attribution={false} zoom={true}>
            <control.Rotate />
            <control.ScaleLine />
            <control.FullScreen />
            <control.OverviewMap />
            <control.ZoomSlider />
            <control.ZoomToExtent />
            <control.Zoom />
          </Controls>
        </Map>
    </div>  
  );
}

export default Pin;
