# 📷 vicente.photo

[![Sitio Web](https://img.shields.io/badge/Sitio%20Web-vicente.photo-2ea44f?style=flat-square&logo=google-chrome&logoColor=white)](https://vicente.photo)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-orange?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Deploy to GitHub Pages](https://github.com/Perez-From-Hell/vicente.photo/actions/workflows/deploy.yml/badge.svg)](https://github.com/Perez-From-Hell/vicente.photo/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Portafolio fotográfico profesional de **Vicente Pérez Robles**. Un espacio minimalista centrado en la imagen, donde la técnica fotográfica —desde la fotografía digital hasta el gran formato artesanal— se pone al servicio de la narrativa visual y la emoción.

🌐 **Sitio en vivo**: [https://vicente.photo](https://vicente.photo)

---

## ✨ Características

- ⚡ **Astro v5**: Generación de sitio estático (SSG) de máximo rendimiento con carga instantánea y optimización nativa.
- 🎨 **Diseño Minimalista**: Enfoque visual centrado en la fotografía, tipografía cuidada y navegación limpia.
- 🌗 **Modo Claro / Oscuro**: Selector de tema con detección automática de preferencias del sistema y persistencia local.
- 🔄 **Transiciones Suaves**: Navegación fluida tipo SPA mediante Astro Client Router.
- 📱 **Completamente Responsivo**: Adaptado para una visualización óptima en móviles, tablets y pantallas de escritorio.
- 🚀 **CI/CD Automatizado**: Flujo de despliegue continuo con GitHub Actions hacia GitHub Pages.
- 🌐 **Dominio Personalizado**: Conectado a `vicente.photo` y gestionado mediante AWS Route 53 con soporte HTTPS / SSL.
- 📝 **Gestión de Contenido**: Contenido estructurado mediante Content Collections de Astro y compatible con Decap CMS.

---

## 🗂️ Estructura del Sitio

- **Home**: Muestra principal de trabajos destacados.
- **Bio**: Filosofía, trayectoria, técnica fotográfica (digital y gran formato 9x12 artesanal).
- **Work**: Galerías y series fotográficas organizadas.
- **Project**: Proyectos visuales y narrativas específicas.
- **Contact**: Canales de contacto y consultas profesionales.

---

## 🛠️ Tecnologías

- **Framework**: [Astro](https://astro.build)
- **UI / Componentes**: Astro Components + React
- **Estilos**: PostCSS, variables CSS modulares y estilos limpios
- **Hosting / Despliegue**: GitHub Pages (vía GitHub Actions)
- **DNS / Dominio**: AWS Route 53 (`vicente.photo`)
- **Gestión de Contenido**: Markdown con Colecciones de Contenido de Astro y [Decap CMS](https://decapcms.org/)

---

## 📁 Estructura del Proyecto

```text
vicente.photo/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automatización de build y despliegue a GitHub Pages
├── public/
│   ├── admin/              # Configuración de Decap CMS
│   ├── img/                # Fotografías y recursos gráficos
│   └── CNAME               # Configuración de dominio vicente.photo para GitHub Pages
├── src/
│   ├── components/         # Componentes reutilizables (PostCard, etc.)
│   ├── content/            # Colecciones de contenido Markdown (bio, work, projects, news)
│   ├── layouts/            # Layout principal (Layout.astro, navegación, footer, modo oscuro)
│   ├── pages/              # Enrutamiento estático y páginas dinámicas
│   └── styles/             # Variables CSS globales y tipografía
├── astro.config.mjs        # Configuración principal de Astro y plugins
└── package.json            # Dependencias y scripts del proyecto
```

---

## 💻 Desarrollo Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Perez-From-Hell/vicente.photo.git
cd vicente.photo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el resultado.

### 4. Compilar para producción

```bash
npm run build
```

El resultado listo para desplegar se generará en la carpeta `dist/`.

---

## 🚀 Despliegue

El despliegue está automatizado. Cada vez que se realiza el **merge de una Pull Request hacia la rama `main`**, GitHub Actions ejecuta el flujo definido en `.github/workflows/deploy.yml`:
1. Descarga el código actualizado de `main`.
2. Compila el sitio con Astro (`npm run build`).
3. Publica automáticamente el resultado en GitHub Pages bajo el dominio `https://vicente.photo`.

---

## 📄 Licencia

Código publicado bajo la licencia **MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles.
Fotografías y textos propiedad de **Vicente Pérez Robles**. Todos los derechos reservados.
