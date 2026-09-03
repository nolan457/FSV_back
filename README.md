# FSV Back

API REST para administrar usuarios, construida con Node.js y Express.

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

```bash
npm install
```

## Configuracion

El servidor utiliza el puerto `3000` por defecto. Para cambiarlo, crea o edita el archivo `.env`:

```env
APP_PORT=3000
```

## Ejecucion

Iniciar en modo normal:

```bash
npm start
```

Iniciar en modo desarrollo, reiniciando el servidor al detectar cambios:

```bash
npm run dev
```

La API queda disponible en:

```text
http://localhost:3000/api
```

## Endpoints

Todos los endpoints de usuarios usan la ruta base `/api/users`.

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/users/test` | Comprueba que la ruta de usuarios esta disponible |
| GET | `/api/users` | Obtiene todos los usuarios |
| POST | `/api/users` | Crea un usuario |
| GET | `/api/users/:id` | Obtiene un usuario por ID |
| PUT | `/api/users/:id` | Actualiza un usuario |
| DELETE | `/api/users/:id` | Elimina un usuario |

## Usuario

Los campos requeridos son:

- `name`: texto de al menos 2 caracteres.
- `email`: correo electronico valido.
- `age`: entero positivo.

El campo `country` es opcional. Si no se envia o se envia vacio al crear un usuario, se guarda automaticamente como `"Desconocido"`.

Ejemplo de solicitud para crear un usuario sin pais:

```bash
curl -X POST http://localhost:3000/api/users ^
	-H "Content-Type: application/json" ^
	-d "{\"name\":\"Carlos Perez\",\"email\":\"carlos@example.com\",\"age\":28}"
```

Respuesta:

```json
{
	"id": 4,
	"name": "Carlos Perez",
	"email": "carlos@example.com",
	"age": 28,
	"country": "Desconocido"
}
```

Ejemplo de solicitud con pais:

```json
{
	"name": "Maria Gomez",
	"email": "maria@example.com",
	"age": 31,
	"country": "Mexico"
}
```

La ruta `PUT` requiere enviar los campos requeridos del usuario, aunque `country` sigue siendo opcional. Los IDs se generan automaticamente.

## Validacion y errores

- `201`: usuario creado correctamente.
- `200`: consulta, actualizacion o eliminacion exitosa.
- `404`: usuario o ruta no encontrada.
- `422`: datos de entrada invalidos.
- `500`: error interno del servidor.

## Estructura principal

```text
src/
├── app.js                 # Configuracion de Express y middlewares
├── server.js              # Inicio del servidor
├── config/env.js          # Variables de entorno
├── controllers/           # Controladores HTTP
├── routes/                # Rutas de la API
├── services/              # Logica de negocio y almacenamiento
├── validations/           # Validaciones de Express Validator
└── utils/                 # Utilidades, como el generador de IDs
```

## Persistencia

Los usuarios se almacenan actualmente en memoria dentro del servicio. Los datos se reinician cada vez que se detiene el servidor.
