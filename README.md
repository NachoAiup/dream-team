Deploy:

https://dream-team-na.netlify.app/

Para probar la app en local, se debe clonar el repo y agregar las variables de entorno en un nuevo archivo .env.local guiandote con el .env.local.example.

Luego, para correr en local:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Abrir [http://localhost:3000](http://localhost:3000) para ver la app.

Para Docker: 

```bash
npm run docker:build -- --build-arg NEXT_PUBLIC_API_KEY=YOUR_API_KEY --build-arg NEXT_PUBLIC_API_URL=FOOTBALL_API_URL
npm run docker:run
```


