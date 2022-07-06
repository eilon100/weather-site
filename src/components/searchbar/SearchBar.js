import React, { useState, useMemo, Fragment } from "react";
import "./_search-bar.scss";
import SearchIcon from "@mui/icons-material/Search";
import onChange from "../../requests/AutoComplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "lodash";
import { useStateValue } from "../../context/StateProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-inputRoot": {
    color: "grey",
    backgroundColor: "white",
    height: "100%",
    padding: 5,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-root": { paddingRight: 10 },
});

function SearchBar() {

  const [inputValue, setInputValue] = useState("");
  const [data, status] = onChange(inputValue);
  const { setLocation } = useStateValue();
  const deb = useMemo(
    () =>
      debounce((e) => {
        setInputValue(e.target.value);
      }, 300),
    []
  );
  const onChangeInput = (e) => {
    deb(e);
  };

  return (
    <div className="search_bar">
      <Stack spacing={2} sx={{ width: 700 }}>
        <StyledAutocomplete
          className="input"
          freeSolo
          disableClearable={true}
          onChange={(event, value) => {
            setLocation(value);
          }}
          options={
            status === "success"
              ? [...new Set(data?.data?.data?.map((option) => option?.name))]
              : []
          }
          renderInput={(params) => (
            <TextField
              onChange={onChangeInput}
              {...params}
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <Fragment>
                    {status === "loading" && (
                      <CircularProgress
                        style={{ color: "grey" }}
                        className="search_icon"
                        size={20}
                      />
                    )}
                  </Fragment>
                ),
                startAdornment: (
                  <SearchIcon htmlColor="grey" className="search_icon" />
                ),
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}

export default SearchBar;
