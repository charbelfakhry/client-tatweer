import React from "react";

const CustTable = ({ data }) => {

    const renderHeaders = () => {
        const columns = Object.keys(data[0]);
            return (
              <th>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </th>
            );  
    }

    const renderRows = () => {
        return data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ));
      };

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>{renderHeaders()}</tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </React.Fragment>
    )
};

export default CustTable;