import Layout from '../Components/Layout'

const Rip1 = () => {
  return (
    <Layout>

      <div className="flex flex-col justify-center px-8 gap-5 mb-4">
        <h1 className='text-3xl font-medium'>RIP Version 1.0</h1>
        <p className='flex text-justify'>Es un protocolo estándar abierto, lo que significa que funciona en los enrutadores de varios proveedores. Funciona en la mayoría de los enrutadores, es un protocolo de enrutamiento con clase. Las actualizaciones se transmiten. Su valor de distancia administrativa es 120, quiere decir que no es confiable, cuanto menor sea el valor de distancia administrativa la confiabilidad es mucho mayor. Su métrica es el conteo de saltos y el conteo máximo de saltos es 15. Habrá un total de 16 enrutadores en la red. Cuando haya el mismo número de saltos para llegar al destino, Rip comienza a realizar el equilibrio de carga. Equilibrio de carga significa que si hay tres formas de llegar al destino y cada una tiene la misma cantidad de enrutadores, los paquetes se enviarán a cada ruta para llegar al destino. Esto reduce el tráfico y también se equilibra la carga. Se utiliza en pequeñas empresas, en este protocolo las tablas de enrutamiento se actualizan cada 30 seg. Cada vez que se rompe el enlace, traza otro camino para llegar al destino. Es uno de los protocolos más lentos.</p>
        <h2>Ventajas</h2>
        <ul className='list-disc'>
          <li>Fácil de configurar, el enrutador estático es complejo.</li>
          <li>Menos gastos generales</li>
          <li>Sin complejidad</li>
        </ul>
        <table className="table-fixed border-collapse border border-slate-500 w-96">
          <thead>
            <tr>
              <th className="border border-slate-600 text-center">Campo</th>
              <th className="border border-slate-600 text-center">Longitud (Bytes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 text-center">Command</td>
              <td className="border border-slate-700 text-center">1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Version</td>
              <td className="border border-slate-700 text-center">1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Unused</td>
              <td className="border border-slate-700 text-center">2</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Entries</td>
              <td className="border border-slate-700 text-center">Variable</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Authentication</td>
              <td className="border border-slate-700 text-center">16</td>
            </tr>
          </tbody>
        </table>
        <ul className='list-disc'>
          <li className='text-justify italic'>Command: Es un campo de 1 byte que especifica el tipo de mensaje RIP. El valor 1 indica que es un mensaje de solicitud (Request), y el valor 2 indica que es un mensaje de respuesta (Response).</li>
          <li className='text-justify italic'>Version: Es un campo de 1 byte que indica la versión del protocolo RIP. En la versión 1, el valor siempre es 1.</li>
          <li className='text-justify italic'>Unused: Es un campo de 2 bytes que no se utiliza en la versión 1 de RIP. Debe dejarse en cero.</li>
          <li className='text-justify italic'>Entries: Es un campo variable que contiene una lista de entradas de enrutamiento. Cada entrada tiene una longitud de 20 bytes y contiene información sobre una red de destino y su métrica asociada.</li>
          <li className='text-justify italic'>Authentication: Es un campo de 16 bytes que se utiliza para autenticar la trama RIP. Sin embargo, en la versión 1, este campo no se utiliza y todos los bytes deben dejarse en cero.</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Rip1
