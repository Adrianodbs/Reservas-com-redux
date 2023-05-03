import './style.css'
import { MdDelete } from 'react-icons/md'

function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reserva</h1>

      <div className="reservas">
        <img src="" alt="" />
        <strong>Viagem maceio</strong>
        <span>Quatidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  )
}

export default Reservas
