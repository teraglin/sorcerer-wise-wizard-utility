import React, {useState} from "react";

import {
  Box,
  Typography
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'

export const Energy = () => {
  const [energy, setEnergy] = useState(6);

  const addFour = () => {
    const result = energy + 4;

    if (result > 10) {
      setEnergy(10);
    } else {
      setEnergy(result);
    }
  }

  return (
    <Box
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    >
      <Typography
      variant="h5"
      >
        <ValueCounter
        min={0}
        max={10}
        color="blue"
        counterName="Energy"
        value={energy}
        setValue={setEnergy}
        />
      </Typography>
      <button onClick={addFour}>+ Add 4</button>
    </Box>
  )
}