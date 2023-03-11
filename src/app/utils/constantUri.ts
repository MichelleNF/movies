const baseUrl = 'http://api.themoviedb.org/3' //ejemplo de solicitud de API y copiar hasya https://api.themoviedb.org/3/

export class ConstantUri{ //nombre de la clase mismo que el del archivo

  public static readonly apikey = ' 95bbcb7441478e733370d429c0d33eb5'; //copiar  clave de API de la pagina pelis pagina/icono/ config/api
  public static readonly validateWithLogin =  baseUrl+ '/authentication/token/validate_with_login';
  public static readonly tokeNew = baseUrl + '/authentication/token/new'
}
//en Domucmentación -- our primary
// en la terminal
