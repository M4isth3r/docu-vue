
# DIRECTIVES
  Se usan poniendo dentro de la etiqueta HTML **v-** seguido del nombre de la directiva.
  ```js
  'el' => elemento del DOM sobre el que se aplica la directiva
  ```
## Funciones de ciclo de vida
  - **bind**: se ejecuta solo una vez, cuando la directiva se enlaza por primera vez con el elemento. Sería como el created() de los componentes
  - **inserted**: cuando el elemento enlazado se ha insertado en el DOM. Como el mounted() de los componentes.
  - **updated**: cuando cambia el elemento del DOM sobre el que está aplicada la directiva.
  - **componentUpdated**: cuando todo el componente y el hijo han terminado de ser actualizados.
  - **unbind**: cuando la directiva es desvinculada de ese elemento del DOM.

## Argumentos en Hooks
  - **el**: elemento al que está dirigida la directiva.
  - **binding**: objecto con diferentes propiedades.
    * **name**: nombre de la directiva.
  - **vnode**: el nodo virtual porducido por el compilador de Vue.
  - **oldVnode**: el nodo virtual previo, solo disponible en **update** y **componentUpdated**.

### Directivas extras
  - [v-click-outside](https://github.com/ndelvalle/v-click-outside): sirve para detectar cuando se ha hecho un click fuera del elemento HTML.
  - [v-hotkey](https://github.com/Dafrok/v-hotkey): enlazar ciertas acciones al pulsar una determinada tecla.
  - [v-clipboard](https://github.com/Inndy/vue-clipboard2): copiar a portapapeles.
  - [v-lazyload](https://github.com/hilongjw/vue-lazyload): las imágenes solo se cargan si están dentro de la visión del usuario.


## Fuente
  - Vuejs, ["Directivas Personalizadas"](https://es.vuejs.org/v2/guide/custom-directive.html)
  - López, D., (2020, junio) ["Guía de uso de las directivas de Vue"](https://codingpotions.com/vue-directives)
