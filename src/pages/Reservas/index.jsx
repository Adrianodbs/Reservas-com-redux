import './style.css'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeReserve,
  updateAmountReserve
} from '../../store/modules/reserve/actions'
import { Link } from 'react-router-dom'

function Reservas() {
  const reserves = useSelector(state => state.reserve)

  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  function decrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1))
  }

  function increamentAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))
  }
  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reserva</h1>

      {reserves.map(reserve => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => increamentAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">
          <Link to="/">Solicitar reservas</Link>
        </button>
      </footer>
    </div>
  )
}

export default Reservas
