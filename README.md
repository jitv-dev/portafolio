# Portafolio Personal - Javier Torres (Jeibi)

Portafolio web personal desarrollado para mostrar mis proyectos, habilidades y experiencia como Desarrollador Fullstack JavaScript.

## Descripción

Sitio web estático y responsivo que presenta mi trayectoria profesional, desde mi formación como Geólogo hasta mi transición al desarrollo web. El portafolio incluye información sobre mis habilidades técnicas, proyectos destacados y un formulario de contacto funcional.

## Características

- Diseño responsivo adaptado a dispositivos móviles, tablets y desktop
- Navegación suave entre secciones (smooth scroll)
- Animaciones al hacer scroll en la sección de proyectos
- Formulario de contacto funcional con FormSubmit
- Página de agradecimiento tras envío de formulario
- Barra lateral con enlaces a redes sociales (visible en desktop)
- Tema oscuro con acentos en rojo

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.2
- Bootstrap Icons
- FormSubmit (servicio de formularios)

## Estructura del Proyecto

```
portafolio/
├── index.html
├── thank-you.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── proyectos_animations.js
│   ├── images/
│   │   └── proyectos/
│   │       ├── proyecto1/
│   │       ├── proyecto2/
│   │       └── proyecto3/
│   └── Cv_JavierTorres.pdf
└── proyectos/
    ├── proyecto1/
    ├── proyecto2/
    └── proyecto3/
```

## Secciones

### Inicio
Presentación inicial con llamados a la acción para ver proyectos o contactar.

### Sobre Mí
Información sobre mi formación académica, experiencia profesional, pasiones y hobbies.

### Habilidades
Muestra de competencias técnicas organizadas en:
- Frontend: HTML5, CSS3, JavaScript, Bootstrap
- Backend: Node.js, Express, Python, PostgreSQL, MySQL
- GIS y Geología: ArcGIS, QGIS, Análisis GIS, Mineralogía
- Herramientas: Git, GitHub, VS Code, Postman

### Proyectos
Galería de proyectos con animaciones al hacer scroll. Cada proyecto incluye imagen, descripción y enlace para más detalles.

### Contacto
Formulario funcional que permite enviar mensajes directamente. Incluye validación de campos y redirección a página de agradecimiento.

## Instalación y Uso

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/jitv-dev/portafolio.git
```

2. Navega al directorio:
```bash
cd portafolio
```

3. Abre con Live Server o similar:
```bash
# Si usas VS Code con Live Server
# Click derecho en index.html > Open with Live Server
```

### Despliegue en GitHub Pages

1. Sube el repositorio a GitHub

2. Ve a Settings > Pages

3. Selecciona la rama main y carpeta / (root)

4. Guarda y espera a que se genere el enlace

El sitio estará disponible en: `https://tu-usuario.github.io/portafolio/`

## Configuración del Formulario

El formulario de contacto usa FormSubmit. Para configurarlo con tu email:

1. Reemplaza el hash en el `action` del formulario con tu correo
2. Actualiza la URL de redirección


## Personalización

### Colores
Los colores principales se pueden modificar en `style.css`:
- Color principal (rojo): `#EC0A0B`
- Fondo: Gradiente radial de gris a negro

### Animaciones
Las animaciones de proyectos se pueden ajustar en:
- Velocidad: `transition: all 1.2s ease-out;`
- Distancia: `transform: translateX(-250px);`

### Contenido
Para actualizar el contenido:
1. Edita `index.html` para textos e información
2. Reemplaza imágenes en `assets/images/`
3. Actualiza el CV en `assets/Cv_JavierTorres.pdf`

## Enlaces

- Sitio web: [https://jitv-dev.github.io/portafolio/](https://jitv-dev.github.io/portafolio/)
- GitHub: [https://github.com/jitv-dev](https://github.com/jitv-dev)
- LinkedIn: [https://www.linkedin.com/in/javier-torres-valenz/](https://www.linkedin.com/in/javier-torres-valenz/)

## Autor

Javier Torres (Jeibi)
- Email: javier.torresvalenz@gmail.com
- LinkedIn: [javier-torres-valenz](https://www.linkedin.com/in/javier-torres-valenz/)
- GitHub: [jitv-dev](https://github.com/jitv-dev)

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.