# Twitter Follow Card Clone

## 📋 Descripción
Este proyecto es un clon de la funcionalidad de las tarjetas de "Follow" de Twitter, implementado con React. Demuestra el uso de componentes modernos, estados y manejo de eventos.

## ✨ Características
- Tarjetas de usuario estilo Twitter
- Botón de Follow/Unfollow con estado dinámico
- Avatares dinámicos usando la API de unavatar.io
- Efectos visuales en la interacción de botones
- Manejo de estados con React Hooks (useState)

## 🛠️ Tecnologías
- React 18
- Vite
- CSS Modules
- unavatar.io API

## 💻 Instalación y Uso

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd 00-hello-world
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🔍 Estructura del Proyecto
```
src/
├── App.jsx          # Componente principal
├── App.css          # Estilos principales
├── main.jsx         # Punto de entrada
├── TwitterFollowCard.jsx  # Componente de tarjeta
└── index.css        # Estilos globales
```

## 🎯 Ejemplo de Uso
```jsx
<TwitterFollowCard 
  userName="mcorre10"
  initialIsFollowing={false}
>
  Michael Correa
</TwitterFollowCard>
```

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor:
1. Haz Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia
MIT License - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
