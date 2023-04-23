import Swal from 'sweetalert2'; // Estructuras simples
//import withReactContent from 'sweetalert2-react-content';

//const MySwal = withReactContent(Swal); // Estructuras más complejas

const Cookies = () => {

    Swal.fire('Bienvenido, acepta las cookies');

    /*MySwal.fire({
        title: <p>Hello World</p>,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.showLoading()
        },
      }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
      })*/

}

export default Cookies;
