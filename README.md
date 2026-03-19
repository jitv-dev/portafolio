# Javier Torres Valenzuela — CV Web

Portafolio profesional / CV web construido con HTML, CSS y JavaScript puro. Incluye un sistema de temas intercambiables sin recargar la página.

## 🚀 Ver online
Una vez publicado en GitHub Pages: `https://TU_USUARIO.github.io/javier-cv`

---

## 🎨 Temas disponibles

| Tema | Archivo | Descripción |
|------|---------|-------------|
| 🔵 Tech | `style-tech.css` | Dark tech con acentos azules, tipografía Syne + DM Mono |
| ⚔️ Solo Leveling | `style-sololeveling.css` | Sistema RPG, grid de partículas, runas, paneles holográficos |
| 🍄 Mario | `style-mario.css` | Pixel art retro, tipografía Press Start 2P, nubes y ladrillos |
| ⛏️ Minecraft | `style-minecraft.css` | Bloques pixelados, paleta de tierra y piedra, tipografía retro |
| 🐱‍🐉 Digimon | `style-digimon.css` | Nostalgia digital, círculo de las 8 crestas, Dorumon y Digivice |

El botón **"cambiar →"** en la esquina inferior derecha cicla entre todos los temas. La preferencia se guarda en `localStorage`.

---

## 📁 Archivos

```
index.html                — estructura del sitio
style-tech.css            — tema Dark Tech (predeterminado)
style-sololeveling.css    — tema Solo Leveling RPG
style-mario.css           — tema Mario Bros pixel art
style-minecraft.css       — tema Minecraft
style-digimon.css         — tema Digimon Adventure
script.js                 — animaciones e interacciones
README.md                 — este archivo
```

---

## 📄 Secciones del CV

1. **Hero** — nombre, roles, resumen y estadísticas (primer año TI, 20+ proyectos, 7+ tecnologías)
2. **Sobre mí** — descripción profesional y stack tecnológico completo
3. **Experiencia** — timeline con ALS Patagonia y Ministerio de Obras Públicas
4. **Proyectos Destacados** — API REST, App de Reuniones con JWT, Portafolio Web y más
5. **Formación** — Talento Digital (Fullstack JS y Java Trainee), Python autodidacta, Duoc UC
6. **Contacto** — email, LinkedIn e idiomas

---

## 🛠️ Publicar en GitHub Pages

1. Crea un repositorio en GitHub (ej: `javier-cv`)
2. Sube **todos** los archivos del proyecto
3. Ve a **Settings → Pages**
4. En **Source** selecciona: `Deploy from a branch`
5. Branch: `main` → Folder: `/ (root)` → Guardar
6. Espera 1-2 minutos → tu sitio estará en:
   `https://TU_USUARIO.github.io/javier-cv`

---

## ➕ Agregar un nuevo tema

1. Crea un archivo `style-NOMBRE.css` con tus estilos
2. Agrégalo al array `themes` en el `<script>` al final de `index.html`:
```js
{ id: 'NOMBRE', css: 'style-NOMBRE.css', label: '🎨 Mi Tema' }
```
3. ¡Listo! El botón lo incluirá automáticamente en el ciclo

---

## ✏️ Personalizar contenido

Edita directamente `index.html` para actualizar:
- Datos de contacto (email, LinkedIn)
- Experiencia laboral en el timeline
- Proyectos y tecnologías usadas
- Resumen profesional

---

Santiago, Chile · Marzo, 2026