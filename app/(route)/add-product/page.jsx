"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ImageUpload from "./_components/imageUpload";
import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const CategoryOption = [
    "Fashion",
    "Electronics",
    "Home",
    "Beauty",
    "Sports",
    "Toys",
    "Books",
    "Automotive",
    "other",
  ];
  const [formData, setFormData] = useState([]);
  const handleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formData);
  };
  const onAddProductBtnClick = async () => {
    console.log(formData);
    const formDataObj = new FormData();
    formDataObj.append("image", formData.image);
    formDataObj.append("file", formData.file);
    formDataObj.append("data", JSON.stringify(formData));

    const result = await axios.post("/api/products", formDataObj, {
      headers: {
        "Content-Type": "multipart/form-data", // passing JSON data + Files
      },
    });

    console.log(result);
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Add New Product</h2>
      <p>start adding product details</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col gap-5">
          <ImageUpload
            onImageSelect={(e) =>
              handleInputChange(e.target.name, e.target.files[0])
            }
            className="w-20 h-20"
          />
          <div>
            <h4>Upload File which you want to Sell</h4>
            <Input
              type="file"
              name="file"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.files[0])
              }
            />
          </div>
          <div>
            <h4>Seller's Note</h4>
            <Textarea
              name="sellerNote"
              placeholder="Write your note here"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h4>product title</h4>
            <Input
              name="title"
              placeholder="Product Name"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <h4>Price</h4>
            <Input
              type="number"
              name="Price"
              placeholder="price"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <h4>Category</h4>
            <Select
              onValueChange={(value) => handleInputChange("category", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {CategoryOption?.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <h4>Description</h4>
            <Textarea
              name="description"
              placeholder={"product description"}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <h4>about the product</h4>
            <Textarea
              name="about"
              placeholder={"product Info"}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <Button onClick={onAddProductBtnClick}>Add Product</Button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
