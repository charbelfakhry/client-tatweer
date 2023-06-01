import React, { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import CustTable from "../resuables/CustTable";

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        loadCategories();
    }, []);


    const loadCategories = () => {
        CategoryService.getCategories().then((result)=>{
            setCategories(result?.data);
            console.log(categories);
        })
    }

    return (
        <>
            <h3>Category</h3>
            {/* <CustTable data={categories} /> */}
        </>
    )
}

export default Category;