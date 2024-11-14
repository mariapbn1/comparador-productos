import { Component, Input } from '@angular/core';

interface ProductCard {
  id: number;
  name: string;
  iconImage: string,
  logoImage: string,
  background: string,
  purpose: string;
  georeferencing: string;
  machineLearning: boolean;
  geographicCoverage: string;
  realTimeMonitoring: string | boolean;
  targetUsers: string;
}


@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  productsList: ProductCard[] = [
    {
      id: 1,
      name: 'Geomarketing',
      iconImage: 'Geomarketing-icon-logo.png',
      logoImage: 'Geomarketing-name-logo.png',
      background: 'rgba(105, 252, 180, 0.33)',
      purpose: 'Toma de decisiones estratégicas',
      georeferencing: 'Análisis de cliente y puntos de venta',
      machineLearning: false,
      geographicCoverage: 'Global',
      realTimeMonitoring: 'Análisis de geo-audiencias en tiempo real',
      targetUsers: 'Departamentos de marketing',
    },
    {
      id: 2,
      iconImage: 'Datarutas-icon-logo.png',
      logoImage: 'Datarutas-name-logo.png',
      background: 'rgba(168, 68, 209, 0.25)',
      name: 'Datarutas',
      purpose: 'Optimización de rutas y logística',
      georeferencing: 'Georreferenciación directa e inversa',
      machineLearning: true,
      geographicCoverage: 'Personalizable por cliente',
      realTimeMonitoring: true,
      targetUsers: 'Equipos logísticos y de campo',
    },
    {
      id: 3,
      iconImage: 'Dataquality-icon-logo.png',
      logoImage: 'Dataquality-name-logo.png',
      background: 'rgba(52, 44, 147, 0.22)',
      name: 'DataQuality',
      purpose: 'Calidad y gestión de datos',
      georeferencing: 'Validación y enriquecimiento de direcciones',
      machineLearning: false,
      geographicCoverage: 'Latinoamérica',
      realTimeMonitoring: false,
      targetUsers: 'Empresas que buscan mejorar datos',
    },
  ];
}
