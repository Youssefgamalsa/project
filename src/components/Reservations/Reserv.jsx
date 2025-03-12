import { Delete, Edit } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function Reserv() {
  return (
    <div className="w-100">
      <table className="table table-hover shadow w-100">
        <thead>
          <tr>
            <th scope="col"> بدايه خط السير </th>
            <th scope="col"> نهايه خط السير </th>
            <th scope="col"> العدد</th>
            <th scope="col"> حاله الرحله </th>
            <th scope="col"> تفاصيل </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <button className="">
                {" "}
                <Delete />{" "}
              </button>
              <button className="">
                {" "}
                <Edit />{" "}
              </button>
              <button className="">
                {" "}
                <RemoveRedEyeIcon />{" "}
              </button>
            </td>
          </tr>{" "}
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row">حولى - جمعيه حولى </td>
            <td> الكويت برج مزايا </td>
            <td>2</td>
            <td>العدد مكتمل </td>
            <td>
              <div className="details">
                <button>
                  {" "}
                  <Delete />{" "}
                </button>
                <button>
                  {" "}
                  <Edit />{" "}
                </button>
                <button>
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagi">
        <button className="mr-1">Previos </button>
        <button>1 </button>
        <button>2 </button>
        <button>3 </button>
        <button>Next</button>
      </div>
    </div>
  );
}
