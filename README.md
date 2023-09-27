## Getting Started

1) git clone <url>
2) npm install
3) npm run dev (en back --> npm run start)

## App
La carpeta app contiene toda la estructura de la aplicación.

## Estructura
Se utilizó clean architecture.
La estructura siempre será la misma para cada page de la aplicación. Por ejemplo, para la carpeta items:

items (url: /items)
  -- components
  -- context
  -- models
  -- services
  -- adapters
  -- utils
  -- styles
  -- layout.tsx
  -- page.tsx
  -- error.txs
  -- loading.tsx

Si "items" tiene a su vez una ruta anidada. La carpeta se agregará a esta estructura.
En esta app, por ejemplo, la ruta dinámica /items/[id] es la anidada. Dentro de la carpeta [id] se repite la misma estructura.

