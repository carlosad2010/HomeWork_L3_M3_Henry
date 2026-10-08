# Buscador de Pokémon

Aplicación web ligera para buscar Pokémon por nombre o número de Pokédex y consultar algunos de sus datos. Consume la [PokéAPI](https://pokeapi.co/) y muestra una ilustración oficial junto con información básica.

## Funcionalidades

- Busca Pokémon por nombre o ID, por ejemplo `pikachu` o `25`.
- Muestra el número de Pokédex, la altura, el peso, los tipos y las habilidades.
- Presenta una ilustración oficial del Pokémon.
- Indica cuándo se está realizando una búsqueda y permite reintentar si ocurre un error.
- Interfaz adaptable a distintos tamaños de pantalla.

## Tecnologías

- HTML
- CSS
- JavaScript con módulos ES
- [PokéAPI](https://pokeapi.co/)

No se requieren dependencias ni instalación de paquetes.

## Cómo ejecutar el proyecto

Como la aplicación utiliza módulos JavaScript, ejecútala desde un servidor local en lugar de abrir `index.html` directamente como archivo.

### Visual Studio Code con Live Server

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**, si aún no la tienes.
3. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.
4. Escribe el nombre o el ID de un Pokémon en el buscador y presiona **Buscar Pokémon**.

Se necesita conexión a internet para consultar la API y cargar las ilustraciones.

## Estructura del proyecto

```text
.
├── index.html       # Estructura y formulario de búsqueda
├── styles.css       # Estilos de la interfaz
└── src/
    ├── api.js       # Solicitudes HTTP y lectura de JSON
    ├── main.js      # Búsqueda y eventos de la aplicación
    ├── state.js     # Estado de la interfaz
    └── ui.js        # Renderizado de resultados y estados
```

## Flujo de una búsqueda

1. El formulario envía el nombre o ID ingresado.
2. La aplicación muestra el estado de carga.
3. `api.js` consulta el endpoint de Pokémon de PokéAPI.
4. Si la consulta tiene éxito, `ui.js` presenta los datos y la ilustración.
5. Si falla, se muestra un mensaje con la opción de reintentar.

La altura y el peso se convierten desde las unidades usadas por PokéAPI: decímetros a metros y hectogramos a kilogramos.
