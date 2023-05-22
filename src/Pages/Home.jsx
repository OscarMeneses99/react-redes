import Layout from '../Components/Layout'

const Home = () => {
  return (
    <Layout>
      <h1 className='text-3xl font-medium'>Home</h1>
      <div className="flex flex-col justify-center px-8 gap-5 mb-4">
        <h1 className="text-lg font-medium text-center">Protocolo RIP (Problema de conteo infinito)</h1>
        <p className='flex text-justify'>El Protocolo de Información de Enrutamiento (Routing Information Protocol, RIP) es un protocolo de enrutamiento utilizado en redes de computadoras para intercambiar información sobre las rutas disponibles entre routers. RIP utiliza un algoritmo de vector de distancia para calcular las rutas más cortas y determinar la mejor ruta hacia una red de destino.</p>
        <p className='flex text-justify'>El problema de conteo infinito es una limitación asociada con el protocolo RIP. Ocurre cuando hay una falla en la red que causa que los routers pierdan la conectividad con una red de destino. En lugar de detectar rápidamente el problema y encontrar una nueva ruta, RIP puede entrar en un ciclo de actualizaciones de enrutamiento que continúan propagándose entre los routers.</p>
        <p className='flex text-justify'>El problema radica en cómo RIP maneja las actualizaciones de enrutamiento. Cada router tiene un temporizador que se reinicia periódicamente y envía actualizaciones de enrutamiento a sus vecinos. Cuando se produce una falla en la red y un router deja de recibir actualizaciones de enrutamiento de un vecino, asume que la ruta está caída y la elimina de su tabla de enrutamiento. Luego, envía una actualización de enrutamiento a sus vecinos para informarles sobre la ruta eliminada.</p>
        <p className='flex text-justify'>El problema surge cuando otros routers reciben esta actualización y también eliminan la ruta de sus tablas de enrutamiento. Luego, envían actualizaciones a sus vecinos, incluido el router original que generó la actualización. Este proceso se repite en un ciclo continuo, conocido como conteo infinito, en el cual los routers continúan eliminando y enviando actualizaciones sobre la misma ruta caída.</p>
        <p className='flex text-justify'>El conteo infinito puede causar una congestión de red y un consumo excesivo de recursos de enrutamiento, lo que puede afectar negativamente el rendimiento de la red. Para mitigar este problema, se han desarrollado mejoras al protocolo RIP, como el uso de split horizon (horizonte dividido) y poison reverse (veneno reverso), que limitan la propagación de actualizaciones de enrutamiento para evitar el conteo infinito. También existen otros protocolos de enrutamiento más modernos y sofisticados, como OSPF (Open Shortest Path First) y BGP (Border Gateway Protocol), que se utilizan en redes más grandes y complejas, y que no sufren del problema de conteo infinito asociado con RIP.</p>
      </div>

    </Layout>
  )
}

export default Home
