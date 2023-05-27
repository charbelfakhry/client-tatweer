import React, { useEffect, useMemo, useState } from "react";
import ProductService from "../../services/ProductService";
import { useTable } from "react-table";

const ProductTable = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        ProductService.getProducts().then((response)=>{
            console.log(response?.data);
            //setProducts(response?.data === null ? [] : response?.data);
        }).catch((e)=>{
            console.log(e)
        })
    }

    const columns = useMemo(() => [

        {
            Header: "Product Name",
            accessor: "product_name"
        },
        {
            Header: "Des.",
            accessor: "product_desc"
        },
        {
            Header: "Price",
            accessor: "product_price"
        },
        {
            Header: "QTY",
            accessor: "product_qty"
        },
        {
            Header: "Cat. Name",
            accessor: "category_name"
        },
        {
            Header: "Supp. Name",
            accessor: "supplier_name"
        },

    ])
    const { headerGroups, rows, prepareRow, getTableBodyProps } = useTable({ columns, data: [] });

    return (
        <>
            <h3>Products</h3>
            <div className="container">
                <table className="table table-striped table-bordered">
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
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductTable;