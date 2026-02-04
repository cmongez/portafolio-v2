# César Mongez | Desarrollador Full Stack

> **Portafolio de Arquitectura de Software v2**
> Interfaz "Industrial Minimalist" diseñada para exhibir soluciones de alto impacto en **GIS y Fintech**.

![Estado del Proyecto](https://img.shields.io/badge/status-production_ready-emerald?style=flat-square)
![Vercel Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel&style=flat-square)

## Visión del Proyecto

Este repositorio aloja la versión 2.0 de mi portafolio profesional. Más que una web personal, es una demostración técnica de capacidad para construir interfaces de usuario complejas, performantes y escalables, alineadas con los estándares de la industria Enterprise (SaaS, Dashboards de Control).

El diseño prioriza la jerarquía de datos y la claridad visual, utilizando un enfoque **Bento Grid** para organizar métricas y proyectos críticos.

## Stack Tecnológico

El núcleo del proyecto utiliza la vanguardia del ecosistema React, optimizado para **Core Web Vitals**:

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components).
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode) para robustez y mantenibilidad.
- **Styling Engine**: [Tailwind CSS](https://tailwindcss.com/) v4.
- **Backend & Data**: [Firebase](https://firebase.google.com/) (Firestore/Analytics).

## Características

- **Bento Grid Layout**: Arquitectura de información modular responsiva
- **Performance First**: Optimización de imágenes, carga diferida y bundle splitting
- **Arquitectura Híbrida**: Contenido estático + datos dinámicos desde Firebase
- **TypeScript Strict**: Type safety completo en toda la aplicación

## Desarrollo Local

Para auditar el código o revisar la implementación:

```bash
git clone https://github.com/cmongez/portafolio-v2.git
cd portafolio-v2
npm install
npm run dev
```

El proyecto funcionará sin configuración adicional mostrando todo el contenido estático (proyectos destacados, experiencia, stack). La sección de proyectos legacy requiere credenciales Firebase y se omite automáticamente si no están configuradas.

## Scripts Disponibles

```bash
npm run dev         # Modo desarrollo
npm run build       # Build de producción
npm run start       # Ejecutar build
npm run lint        # ESLint
npm run type-check  # TypeScript validation
```

## Arquitectura de Datos

**Modelo Híbrido:**
- **Estático** (`src/lib/data.ts`): Proyectos destacados, experiencia, stack tecnológico
- **Dinámico** (Firebase Firestore): Proyectos legacy actualizables

**Beneficios:**
- Performance óptima (contenido core estático)
- Flexibilidad (proyectos legacy actualizables)
- Costos optimizados (pocas lecturas de Firestore)

## Estructura del Proyecto

```
/src
 ├── /app              # Next.js App Router
 ├── /components       # Componentes React modulares
 ├── /lib              # Lógica de negocio y configuración
 └── /services         # Integración con servicios externos
```

## CI/CD

El proyecto incluye GitHub Actions que ejecuta automáticamente:
- Linting (ESLint)
- Type checking (TypeScript)
- Build de producción

Ver [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Licencia

Distribuido bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más información.
