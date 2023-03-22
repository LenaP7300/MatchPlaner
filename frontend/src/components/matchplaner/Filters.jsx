import { MenuItem, Button, TextField } from "@mui/material";
import {
  locationSelection,
  fieldSelection,
  modusSelection,
  allAges,
} from "../../utils/filter";

export function Filters(props) {
  // handler functions for changing the filter input values
  const handleAgeChange = (name, value) => {
    if (value !== "") {
      props.filterProps.setAgeFilter({
        name: name,
        value: value,
        applied: true,
      });
    } else {
      props.filterProps.setAgeFilter({
        name: name,
        value: value,
        applied: false,
      });
    }
  };

  const handleDateChange = (name, value) => {
    if (value !== "") {
      props.filterProps.setDateFilter({
        name: name,
        value: value,
        applied: true,
      });
    } else {
      props.filterProps.setDateFilter({
        name: name,
        value: value,
        applied: false,
      });
    }
  };

  const handleDestinationChange = (name, value) => {
    if (value !== "") {
      props.filterProps.setDestFilter({
        name: name,
        value: value,
        applied: true,
      });
    } else {
      props.filterProps.setDestFilter({
        name: name,
        value: value,
        applied: false,
      });
    }
  };

  const handleFieldChange = (name, value) => {
    if (value !== "") {
      props.filterProps.setTofFilter({
        name: name,
        value: value,
        applied: true,
      });
    } else {
      props.filterProps.setTofFilter({
        name: name,
        value: value,
        applied: false,
      });
    }
  };

  const handleModusChange = (name, value) => {
    if (value !== "") {
      props.filterProps.setModFilter({
        name: name,
        value: value,
        applied: true,
      });
    } else {
      props.filterProps.setModFilter({
        name: name,
        value: value,
        applied: false,
      });
    }
  };

  // resetting the filter input values
  const resetFilters = () => {
    props.filterProps.setAgeFilter({ name: "age", value: "", applied: false });
    props.filterProps.setDateFilter({
      name: "date",
      value: "",
      applied: false,
    });
    props.filterProps.setDestFilter({
      name: "destination",
      value: "",
      applied: false,
    });
    props.filterProps.setTofFilter({
      name: "typeOfField",
      value: "",
      applied: false,
    });
    props.filterProps.setModFilter({
      name: "modus",
      value: "",
      applied: false,
    });
  };

  return (
    <ul className="filter-list">
      <li>
        <TextField
          select
          name="age"
          label="Spielklasse"
          variant="outlined"
          value={props.filterProps.ageFilter.value}
          onChange={(e) => handleAgeChange(e.target.name, e.target.value)}
        >
          <MenuItem key={0} value={""}>
            Wählen Sie eine Option
          </MenuItem>
          {allAges.map((option, idx) => (
            <MenuItem key={idx + 1} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </li>
      <li className="filter-li">
        <TextField
          inputProps={{ style: { textAlign: "center" } }}
          name="date"
          type="date"
          variant="outlined"
          value={props.filterProps.dateFilter.value}
          onChange={(e) => handleDateChange(e.target.name, e.target.value)}
        />
      </li>
      <li className="filter-li">
        <TextField
          select
          name="destination"
          label="Spielort"
          variant="outlined"
          value={props.filterProps.destFilter.value}
          onChange={(e) =>
            handleDestinationChange(e.target.name, e.target.value)
          }
        >
          <MenuItem key={0} value={""}>
            Wählen Sie eine Option
          </MenuItem>
          {locationSelection.map((option, idx) => (
            <MenuItem key={idx + 1} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </li>
      <li className="filter-li">
        <TextField
          select
          name="typeOfField"
          label="Rasenart"
          variant="outlined"
          value={props.filterProps.tofFilter.value}
          onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
        >
          <MenuItem key={0} value={""}>
            Wählen Sie eine Option
          </MenuItem>
          {fieldSelection.map((option, idx) => (
            <MenuItem key={idx + 1} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </li>
      <li className="filter-li">
        <TextField
          select
          name="modus"
          label="Spielmodus"
          variant="outlined"
          value={props.filterProps.modFilter.value}
          onChange={(e) => handleModusChange(e.target.name, e.target.value)}
        >
          <MenuItem key={0} value={""}>
            Wählen Sie eine Option
          </MenuItem>
          {modusSelection.map((option, idx) => (
            <MenuItem key={idx + 1} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </li>
      <li>
        <Button
          // style={{ padding: "0 2.5rem" }}
          variant="contained"
          onClick={resetFilters}
        >
          {/* Reset */}
          Zurücksetzen
        </Button>
      </li>
    </ul>
  );
}
