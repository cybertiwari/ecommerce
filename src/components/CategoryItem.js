import { Link } from "react-router-dom";

const CategoryItem = ({ data, filterProduct }) => {
  return (
    <li className="nav-item">
      <Link to="/category"  onClick={() => filterProduct(data)} className="nav-link">{data.toUpperCase()}</Link>
    </li>
  );
};

export default CategoryItem;
