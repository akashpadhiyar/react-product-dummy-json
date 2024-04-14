import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
    const [myData, setData] = useState({});
    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setData(response.data);
            });
    }, [id]);



    return (
        <>
            <h2>Product Details</h2>
            <hr />
            <h1>{myData.title} </h1>
            <h3> Rs. {myData.price}</h3>
            <img alt='Product' src={myData.thumbnail} /> <br/><br/>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default ProductDetails;