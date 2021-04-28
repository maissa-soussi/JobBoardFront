import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589];
  constructor() { }

  private initMap(): void {
    this.map = L.map('map',{
      center: this.centroid,
      zoom: 12
    });
    const tiles = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=57XMBquwc7haRCgQDYWX', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    });

    tiles.addTo(this.map);
  }

  ngOnInit(): void {
    this.initMap();
  }

}
