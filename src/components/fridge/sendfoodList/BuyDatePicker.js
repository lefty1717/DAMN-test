import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

export default function BuyDatePicker(props) {
  const [{ checkedList }, dispatch] = useStateValue();
    
  const handleCheckListChange = function(newValue){
      let oldList = [...checkedList];
      oldList[props.index] = {...oldList[props.index],startDate:newValue}
      dispatch({
        type: actionTypes.SET_CHECKEDLIST,
        checkedList: [...oldList],
      });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="購買日期"
        value={checkedList[props.index].startDate}
        onChange={(newValue) => {
          handleCheckListChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}