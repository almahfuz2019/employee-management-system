import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EmployeeContext from "../../context/EmployeeContext";
import { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
const Card = ({ item, index }) => {
  const { firstName, lastName, position, _id } = item;
  const data = useContext(EmployeeContext);
  const { handleDataDelete } = data;
  return (
    <tbody>
      <tr className="border bg-white ">
        <th>{index + 1}</th>
        <td className="text-center">{firstName}</td>
        <td className="text-center">{lastName}</td>
        <td className="text-center">{position}</td>
        <td className="flex justify-center gap-3 text-2xl text-end">
          <Link to={`/employee/update/${_id}`}>
            <FaRegEdit />
          </Link>
          <Link onClick={() => handleDataDelete(_id)}>
            <FaRegTrashAlt />
          </Link>
          <Link to={`/employee/find/${_id}`}>
            <AiFillEye />
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
Card.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
