import { useTable, useSortBy } from "react-table";
import useRows from "./hooks/useRows";
import useColumns from "./hooks/useColumns";

import "./styles.css";

export default function App() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = table;

  return (
    <div className="container">
      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {

            rows.map((row) => {
              
              prepareRow(row);
              return (
                
                <tr {...row.getRowProps()}>
                  {
                   
                    row.cells.map((cell) => {
                     
                      return (
                        <td {...cell.getCellProps()}>
                          {
                           
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
