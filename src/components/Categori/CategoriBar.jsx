import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

export default function CategoriBar({ getProducts }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const baseUrl = "https://fakestoreapi.com/products/categories";
  const getCategories = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <FormControl just sx={{ width: "100vw", m: 1 }}>
      <RadioGroup
        row
        sx={{ justifyContent: "center" }}
        name="row-radio-buttons-group"
        onChange={(e) =>
          getProducts(e.target.value && `/category/${e.target.value}`)
        }
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {categories?.map((categorie, i) => (
          <FormControlLabel
            key={i}
            sx={{ textTransform: "capitalize" }}
            value={categorie}
            control={<Radio />}
            label={categorie}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
