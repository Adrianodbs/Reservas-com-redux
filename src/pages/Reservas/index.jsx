import './style.css'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeReserve } from '../../store/modules/reserve/actions'

function Reservas() {
  const reserves = useSelector(state => state.reserve)

  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch(removeReserve(id))
  }
  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reserva</h1>

      {reserves.map(reserve => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quatidade: {reserve.amount}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  )
}

export default Reservas
