import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";

const CustomSearchBar = ({ onSearch, onClose }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e);
    onSearch(e);
  };

  const handleClose = () => {
    setSearchText("");
    onClose("");
  };

  return (
    <TextField
      placeholder="Search"
      value={searchText}
      onChange={(e) => handleSearch(e.target.value)}
      variant="outlined"
      sx={{ borderRadius: 20 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton edge="start">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {searchText && (
              <IconButton onClick={handleClose} edge="end">
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomSearchBar;
