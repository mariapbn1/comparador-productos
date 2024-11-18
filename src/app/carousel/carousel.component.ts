import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  // Diapositivas del carrusel (ajusta las rutas de las imágenes y textos según tu proyecto)
  slides = [
    { image: 'asset/carousel/geomarketing-carousel-d.jpg', logo: 'asset/logos/Geomarketing-logo.jpg', description: ['Mapa digital para analizar clientes, puntos de venta y competencia con símbolos personalizados.', 'Combina datos propios, públicos y externos en una sola herramienta.', 'Realiza análisis avanzados con geo-audiencias utilizando APIs como Google Maps y Servihuella.', 'Capacidad de análisis en múltiples mercados a través de integración con APIs CARTO.'] },
    { image: 'asset/carousel/datarutas-carousel.jpg', logo: 'asset/logos/Datarutas-logo.jpg', description: ['Control de personal y vehículos, permitiendo una rápida respuesta a incidentes.', 'Machine Learning predictivo para anticipar sucesos y mejora la eficiencia operativa.', 'Permite crear rutas óptimas utilizando las coordenadas del mapa, considerando horarios y capacidades de entrega.', 'Visualiza rutas planeadas y ejecutadas para medir la eficiencia']},
    { image: 'asset/carousel/geomarketing-carousel-b.jpg', logo: 'asset/logos/Dataquality-logo.jpg', description: ['Precisión en la georreferenciación, validación y enriquecimiento de datos.', 'Mejora la calidad de los datos al adaptarse a diversas nomenclaturas con actualizaciones trimestrales.', 'Confdigura zonas o puntos cercanos para mejorar la precisión de la informaicón.', 'Cobertura en Latinoamérica, facilitando estrategías con datos relevantes en esta región.']}
  ];
  
  currentIndex = 0;

  // Cambia a la diapositiva anterior
  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  // Cambia a la siguiente diapositiva
  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

  // Establece el índice actual cuando se hace clic en un indicador
  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
