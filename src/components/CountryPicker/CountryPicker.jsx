/** @format */

import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { featchcountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [featchdCountries, setFeatchdCountries] = useState([]);

  useEffect(() => {
    const featchAPI = async () => {
      setFeatchdCountries(await featchcountries());
    };
    featchAPI();
  }, [setFeatchdCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {featchdCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
