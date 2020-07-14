
# Code editor in reactJs


# in progress ...

- opciones de guardado... (ctrl + s, y puntito encima de close-button)
- Al editar un archivo solo se enviaran los cambios al
  servidor si el archivo es guardado (ctrl + s || opcion guardar)
- Abrir un archivo es elegir un archivo de los archivos subidos
- Panel lateral izquierdo: { archivos en el servidor (FileBrowser), settings (Settings) }


- backend para guardar los archivos, no usuarios, solo guardar archivos
- rutas:
  POST /file/ "Guarda un nuevo archivo en la db"
  GET /file/all "Obtiene todos los archivos"
  PUT /file/ "Actualiza un archivo en la db"
  DELETE /file/:_id "Elimina un archivo por su _id"
  

## Proximas features

- Al buscar dentro de los archivos del servidor ...
  se abrira un arbol de directorios dentro la caja de 'open files'
  se selecciona un archivo y se agregar a los archivos abiertos

- Opcion de descargar archivos






