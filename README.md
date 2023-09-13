# DocuMentor

## Instalacion

1. Crea una un secreto en tu repositorio de GitHub llamado `OPENAI_API_KEY`. Esta llave la usaremos para poder documentar tu código.

2. Permite que `ACTIONS` haga cambios en tu repositorio esto lo puedes hacer desde los ajustes de tu repositorio. 

3. Agrega a tus workflows `deploy_docu.yml`. Este yml se encuentra en el repositorio de DocuMentor. 

4. Puedes configurar `deploy_docu.yml` para elegir cuando activar el proceso de documentación. Por defecto viene en `workflow_dispatch`, para hacerlo manualmente.

5. Crea un archivo .docignore y escribe en lineas separadas el nombre de archivos o carpetas que DocuMentor debería ignorar (debes crear este archivo aunque este vacío).

6. Cuando se active por primera vez DocuMentor, despliega desde la rama `gh-pages` github pages.

7. ¡Disfruta de una documentación actualizada y bonita!

**IMPORTANTE**
No borres la carpeta `docs` ni el archivo `doc.log`. Estos archivos llevan el registro de la historia de la documentación. 
