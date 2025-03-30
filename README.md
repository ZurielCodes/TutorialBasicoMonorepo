# Tutorial Basico de Monorepos con Turboepo

Descripción breve de tu proyecto y su propósito.

## Tecnologías Utilizadas

- **Vite**: Un entorno de desarrollo rápido y ligero para aplicaciones web.
- **NestJS**: Un framework para construir aplicaciones del lado del servidor en Node.js.
- **Turborepo**: Herramienta para gestionar monorepos.

## Estructura del Proyecto

monorepo/
├── apps/
│ ├── client/ # Aplicación de Vite
│ └── api/ # Aplicación de NestJS
└── package.json

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ZurielCodes/TutorialBasicoMonorepo
   cd tu-repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Para ejecutar las aplicaciones, puedes usar los siguientes comandos:

### Ejecutar la aplicación de Vite

```bash
npm run dev --workspace apps/admin-dashboard
```

### Ejecutar la aplicación de NestJS

```bash
npm run start --workspace apps/api
```

## Construcción

Para construir las aplicaciones para producción, ejecuta:

```bash
npm run build
```

## Archivos Ignorados

Este proyecto incluye un archivo `.gitignore` que ignora los siguientes elementos:

- **Node modules**: `node_modules/`
- **Build output**: `dist/`, `build/`, `out/`
- **Logs**: Archivos de registro como `*.log`
- **Variables de entorno**: Archivos `.env`
- **Archivos específicos de Vite y NestJS**: `.vite/`, archivos `.js`, `.d.ts`, `.map`
- **Archivos de IDE y editor**: `.idea/`, `.vscode/`
- **Archivos específicos del sistema operativo**: `.DS_Store`, `Thumbs.db`
- **Cobertura**: `coverage/`

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes preguntas o comentarios, no dudes en contactarme:

- Zuriel Ramos
- zurielcodes@gmail.com
- Thttps://github.com/ZurielCodes
