import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        }

        const url = `https://mysterious-sea-38335.herokuapp.com/addProduct`;
        console.log(productData.price)
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => console.log('server side response', response));
    };
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '875e6137692efb1eb37fa5fa44151987');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="text-center">
            <h4 className="mt-2">Add your new products here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue="Acer Spin 5 (2020)" ref={register} />
          <br/>
          <input name="price" defaultValue="55000" ref={register} />
          <br/>
          <input className="mt-2"name="exampleRequired" type="file" onChange={handleImageUpload} />
          <br/>
          <input className="mt-2" type="submit" />
        </form>
        </div>
    );
};

export default AddProducts;