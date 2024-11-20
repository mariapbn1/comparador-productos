# Comparador de Productos

Este proyecto es una aplicación web desarrollada para abarcar el plan de mejoramiento para las prácticas universitarias. La página incluye un formulario de contacto flotante, un carrusel de imágenes con información destacada y una sección de tarjetas de productos.

## **Índice**

1. [Características](#características)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Pruebas](#pruebas)
6. [API Integrada](#api-integrada)
7. [Tecnologías Usadas](#tecnologías-usadas)

## **Características**

- **Formulario de Contacto como modal o ventana flotante:** Permite a los usuarios enviar sus datos junto con un mensaje, que son enviados a una API para su almacenamiento y otra API que le permite realizar envíos de correo electrónico.
- **Carrusel de Imágenes:** Muestra información destacada de los productos ofrecidos.
- **Tarjetas de Productos:** Cada tarjeta incluyen características claves del productos. También tienen un botón que abre el formulario de contacto.
- **Integración con APIs:** Almacena datos en Google BigQuery mediante una función de Cloud Function y otra para envíos de correo electrónicos.

---

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 14 o superior)
- [Boostrap](https://getbootstrap.com/docs/4.0/getting-started/download/) (^5.3.3)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional, pero recomendado)

## **Instalación**

1. Clona este repositorio:

    ```bash 
    git clone https://github.com/mariapbn1/comparador-productos.git
    ```

2. Navega al directorio de proyecto:
    ```bash
    cd comparador-productos
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo
    ```bash
    ng server o
    npm start
    ```

5. Abre la aplicación en el navegador:
    ```bash
    http://localhost:4200
    ```

## **Estructura del Proyecto**

```
└── 📁comparador-productos
    └── 📁public
        └── 📁asset
            └── 📁carousel
            └── 📁logos
        └── favicon.ico
    └── 📁src
        └── 📁app
            └── 📁carousel
            └── 📁contact-form
            └── 📁home
            └── 📁product-cards
            └── 📁services
            └── app-routing.module.ts
            └── app.component.css
            └── app.component.html
            └── app.component.ts
            └── app.module.ts
        └── index.html
        └── main.ts
        └── styles.css
    └── .editorconfig
    └── .gitignore
    └── angular.json
    └── cypress.json
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.spec.json
```

* **comparador-productos:** Carpeta raíz del proyecto. 
* **public** Carpeta donde se ubican los recursos estáticos y archivos accesibles públicamente. 
    * **asset:** Carpetas que contienen las imágenes utilizadas en la página web
        * **carousel:** Imágenes relacionadas con el carrusel.
        * **logos:** Logotipos de la aplicación y de los productos.
    * **favicon.ico:** Icon del sitio web. 
* **src:** Contiene el código fuente de la página web.
    * **app:** Carpeta que contiene los componentes principales, servicios y configuraciones de los módulos de la página.  
        * **carousel:**Componente del carrusel y toda la configuración necesaria para su funcionamiento.
        * **contact-form:** Componente en el que se ubicará el formulario de contacto de la página.
        * **home:** Componente principal donde se alojarán los demás componentes para la página. 
        * **producto-cards:** Componente en el que se sitúa las tarjetas de productos con las características de cada producto. 
        * **services:** Carpeta donde se podrán ubicar los servicios o llamados a APIs que se utilizarán en la aplicación. 
        * **app-routing.module.ts:** Configuración de las rutas de la aplicación. 
        * **app.component.css:** Archivo que sirve para almacenar los estilos que se aplicarán al componente. 
        * **app.component.html:** Archivo HTML que contiene el template del componente AppComponent.  
        * **app.component.ts:** Clase TypeScript que contiene la lógica, métodos y metadata del componente de la aplicación. 
        * **app.module.ts:** Módulo para definir las características, estructura, componentes y servicios del componente de arranque, es decir AppComponent.
    * **index.html:** Archivo de tipo HTML que actúa como contenedor de la aplicación. 
    * **main.ts:** Punto de entrada principal de la aplicación. 
    * **styles.css:** Estilos globales que se utilizan en toda la aplicación.
* **.editorconfig:** Configuración de formateo de código para estandarizar el estilo entre diferentes editores. 
* **.gcloudignore:** Archivo que define exclusiones para despliegues en Google Cloud. 
* **.gitignore:** Archivo que específica archivos y carpetas que deben ser ignorados en Git. 
* **angular.json:** Archivo e configuración principal de Angular CLI. 
* **package-lock.json:** Permite instalar las versiones exactas que fueron establecidas. 
* **package.json:** Define las dependencias del proyecto junto con sus versiones, es en el que se fija Node para instalar los paquetes necesarios. 
* **README.md:** Documentación del proyecto. 
* **tsconfig.app.json:** Configuración para el código de la aplicación. 
* **tsconfig.json:** Configuración global de TypeScript. 
* **tsconfig.spec.json:** Configuración para pruebas unitarias. 

## **Pruebas Unitarias**
Las pruebas unitarias están configuradas utilizando Karma y Jasmine. Ejecútalas con:

    ```bash 
    ng test
    ```

## **API Integradas**

El formulario de contacto está conectado con:

* **Google Cloud Function:** 
    * Servicio para inserta datos en Google BigQuery.
    * Servicio para envíar correos de confirmación al usuario

## **Tecnoglogías Usadas**
* **Framework:** Angular
* **Lenguajes:** TypeScript, HTML, CSS
* **Backend:** Google Cloud Functions
* **Base de Datos:** Google BigQuery
* **Estilos:** Bootstrap