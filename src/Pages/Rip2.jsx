import Layout from '../Components/Layout'

const Rip2 = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center px-8 gap-5 mb-4">
        <h1 className='text-3xl font-medium'>RIP Version 2.0</h1>
        <p className='flex text-justify'>Debido a algunas deficiencias en la especificación RIP original, la versión 2 de RIP se desarrolló en 1993. Es compatible con el enrutamiento entre dominios sin clase (CIDR) y tiene la capacidad de transportar información de subred, su métrica también es el conteo de saltos y el conteo máximo de saltos 15 es Igual que la versión 1 de rip. Admite autenticación y realiza subredes y multidifusión. El resumen automático se puede hacer en cada enrutador. En RIPv2, las máscaras de subred se incluyen en la actualización de enrutamiento. RIPv2 multidifunde toda la tabla de enrutamiento a todos los enrutadores adyacentes en la dirección 224.0.0.9, a diferencia de RIPv1, que usa la transmisión (255.255.255.255).</p>

        <h2>Ventajas</h2>
        <ul className='list-disc'>
          <li>Es un protocolo estandarizado.</li>
          <li>Es compatible con VLSM.</li>
          <li>Proporciona una convergencia rápida.</li>
          <li>Envía actualizaciones activadas cuando cambia la red.</li>
          <li>Funciona con enrutamiento de instantáneas, lo que lo hace ideal para redes de marcación.</li>
        </ul>

        <h2>Desventajas</h2>
        <ul className='list-disc'>
          <li>Max hopcount de 15, debido a la vulnerabilidad de ‘contar hasta el infinito’.</li>
          <li>Sin concepto de vecinos.</li>
          <li>Intercambia toda la tabla con todos los vecinos cada 30 segundos (excepto en el caso de una actualización desenstringda).</li>
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
              <td className="border border-slate-700 text-center">Version</td>
              <td className="border border-slate-700 text-center">1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Reserved</td>
              <td className="border border-slate-700 text-center">1</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Family</td>
              <td className="border border-slate-700 text-center">2</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Authentication</td>
              <td className="border border-slate-700 text-center">8</td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-center">Entries</td>
              <td className="border border-slate-700 text-center">Variable</td>
            </tr>
          </tbody>
        </table>

        <ul className='list-disc'>
          <li className='text-justify italic'>Versión: Indica la versión del protocolo RIP utilizado. Para RIP versión 2, este campo tiene un tamaño de 1 byte y se establece en 2.</li>
          <li className='text-justify italic'>Reservado: Campo de 1 byte reservado para uso futuro. Actualmente, se establece en cero y no se utiliza.</li>
          <li className='text-justify italic'>Familiaridad: Campo de 2 bytes que identifica el tipo de familia de direcciones de red utilizadas en el paquete RIP. Para RIP versión 2, este campo normalmente se establece en 0x0000, que indica direcciones IPv4.</li>
          <li className='text-justify italic'>Autenticación: Campo de 8 bytes utilizado para la autenticación del paquete RIP. Si no se está utilizando autenticación, todos los bytes se establecen en cero.</li>
          <li className='text-justify italic'>Entradas: Este campo contiene una lista de entradas de ruta RIP. Cada entrada incluye información sobre una red de destino y su métrica asociada. Las entradas tienen una longitud variable dependiendo del número de rutas incluidas en el paquete RIP.</li>
        </ul>

        <h2>Cada entrada de ruta RIP contiene los siguientes campos:</h2>
        <ul className='list-disc'>
          <li className='text-justify italic'>Familia de direcciones: Identifica el tipo de dirección de red utilizada en la entrada de ruta. Para IPv4, este campo tiene un valor de 0x0000.</li>
          <li className='text-justify italic'>Etiqueta de ruta: Se utiliza para la propagación de información específica de enrutamiento. En RIP versión 2, este campo se establece en cero.</li>
          <li className='text-justify italic'>Dirección IP de red: La dirección de red de destino para la ruta.</li>
          <li className='text-justify italic'>Máscara de red: La máscara de red que se aplica a la dirección de destino para determinar la subred.</li>
          <li className='text-justify italic'>Próximo salto: La dirección IP del siguiente salto en la ruta hacia la red de destino.</li>
          <li className='text-justify italic'>Métrica: Un valor que indica la distancia o costo asociado con la ruta. Cuanto más bajo sea el valor, mejor es la ruta. En RIP versión 2, la métrica se basa en el número de saltos hasta la red de destino.</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Rip2
