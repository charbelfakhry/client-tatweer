import React, { useEffect, useMemo, useState } from "react";
import ProductService from "../../services/ProductService";
import { useTable } from "react-table";

const ProductTable = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await ProductService.getProducts();
      console.log(response?.data);
      setProducts(response?.data === null ? [] : response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      { Header: "Product Name", accessor: "product_name" },
      { Header: "Des.", accessor: "product_desc" },
      { Header: "Price", accessor: "product_price" },
      { Header: "QTY", accessor: "product_qty" },
      { Header: "Cat. Name", accessor: "category_name" },
      { Header: "Supp. Name", accessor: "suplier_name" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: products });

  return (
    <>
      <h3>Products</h3>
      <div className="container">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
