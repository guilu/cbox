/**
 * Created with JetBrains WebStorm.
 * User: diegobarrioh
 * Date: 26/04/13
 * Time: 19:03
 * To change this template use File | Settings | File Templates.
 */

function gestionCrl($scope){

    $scope.texto = "Diego";
    $scope.datos = {
        contenedores:[
            {
                nombre:"contenedor 1",
                info:"mas informacion de c1",
                url:"#",
                archivos:[
                    {nombre:"Nombre archivo 1",info:"info de archivo 1", url:"#url1"},
                    {nombre:"Nombre archivo 2",info:"info de archivo 2", url:"#url2"},
                    {nombre:"Nombre archivo 3",info:"info de archivo 3", url:"#url3"}
                ]
            },
            {
                nombre:"contenedor 2",
                info:"mas informacion de c2",
                url:"#",
                archivos:[
                    {nombre:"Nombre archivo 1",info:"info de archivo 1", url:"#url1"},
                    {nombre:"Nombre archivo 2",info:"info de archivo 2", url:"#url2"}
                ]
            },
            {
                nombre:"contenedor 3",
                info:"mas informacion de c3",
                url:"#",
                archivos:[
                {nombre:"Nombre archivo 1",info:"info de archivo 1", url:"#url1"}
                ]
            }
        ]
    };
    $scope.contenedorActual = null;
    $scope.cambiarContenedor = function (contenedorActual){
        $scope.contenedorActual = contenedorActual;
    }
    $scope.archivoActual = null;
    $scope.mostrarArchivo   = function (archivoActual){
        $scope.archivoActual = archivoActual;
    }

    $scope.actualizar = function(){
        BlobStorage.listContainers("cigarreras2","DGODWK37aVrjnYKAgLLwekylYtzCWCZxfHB+muodjwKs8yh136yX3aF6tTzRhvoRJEMCE2Jj6XVIyQ3WBEECVQ==", null, null, null, null,
              function(data){

                  var x = new X2JS();


                  console.log(x.xml_str2json(data));
                  alert("ok");
              },
              function(data){
                  alert("error");
              }
          );
      //  listContainers: function(accountName, sharedKey, localStorage, prefix, marker, maxresults, success, error) {
    }
}