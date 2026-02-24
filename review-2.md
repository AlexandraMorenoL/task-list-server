# ¿Qué es mi producto y para qué sirve?

Mi producto es un servidor de lista de tareas que permite a las personas organizar sus actividades de manera sencilla y clara. 
La idea es poder ayudar a los usuarios a llevar el control de lo que deben hacer, lo que ya completaron y lo que aún está pendiente, todo desde una misma plataforma.

---

# ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

- **Ver todas las tareas**  
  Permite a los usuarios visualizar rápidamente todas sus tareas en un solo lugar, evitando olvidos y desorden.

- **Consultar una tarea específica**  
  Ayuda a revisar los detalles de una tarea puntual sin necesidad de buscar manualmente entre muchas opciones.

- **Filtrar tareas completadas e incompletas**  
  Facilita enfocarse en lo que realmente falta por hacer.

- **Crear nuevas tareas**  
  Los usuarios pueden agregar tareas de forma rápida cada vez que surja una nueva responsabilidad.

- **Actualizar tareas existentes**  
  Permite modificar el estado o la información de una tarea cuando cambian las prioridades.

- **Eliminar tareas**  
  Ayuda a mantener la lista limpia eliminando tareas que ya se completaron.

Estas funcionalidades hacen que el producto sea práctico, fácil de usar y útil para la organización diaria.
---

## Cambios y mejoras – Review 2

Durante el Review 2, el servidor de lista de tareas fue mejorado para ofrecer una experiencia más completa, segura y organizada. A continuación, se describen los principales cambios realizados con respecto al Review 1:

###  Nuevas funcionalidades
- Se añadieron **rutas para crear, actualizar y eliminar tareas**, permitiendo una gestión completa de la lista.
- Se implementó la opción de **filtrar tareas completadas e incompletas**, facilitando la visualización según el estado de cada tarea.
- Se habilitó la consulta de **tareas individuales por identificador (id)**.

### Validaciones y manejo de errores
- Se agregaron **middlewares de validación** para asegurar que:
  - Las solicitudes POST y PUT no tengan el cuerpo vacío.
  - Los datos enviados tengan el formato correcto.
  - Los parámetros de las rutas sean válidos.
- Se implementó un **middleware global** que restringe el uso a métodos HTTP válidos, devolviendo errores cuando se reciben métodos no permitidos.
- El servidor ahora responde con **códigos de estado HTTP adecuados** y mensajes claros en formato JSON.

### Mejoras en la arquitectura
- El proyecto fue reorganizado usando **Express Router**, separando las rutas de visualización y edición de tareas.
- Se modularizó el código mediante el uso de **routers y middlewares**, facilitando el mantenimiento y la escalabilidad del proyecto.

### Estado actual del producto
Gracias a estas mejoras, el servidor es ahora más robusto, confiable y preparado para ser utilizado como base de una aplicación web o móvil de gestión de tareas.



---

# ¿Qué tecnologías usaste y por qué?

- **Node.js**  
  Se utilizó porque permite crear aplicaciones rápidas y eficientes que pueden manejar múltiples solicitudes al mismo tiempo.

- **Express**  
  Se usó para organizar mejor el servidor y facilitar la creación de rutas que gestionan las tareas de forma ordenada.

- **Git y GitHub**  
  Se emplearon para llevar control de versiones, guardar el progreso del proyecto y facilitar su revisión y mejora continua.

Estas tecnologías permiten que el producto sea escalable, confiable y fácil de mantener.
