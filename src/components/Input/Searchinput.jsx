import React from "react";
import { TextField, IconButton, Grid } from "@mui/material";

const SearchInput = ({
    onSearch,
    placeholder,
    CustomStyle,
    customClass,
    icon,
    iconImage,
}) => {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
             variant="standard"
                sx={{ ...CustomStyle, border: "none", }}
                className={customClass}
                placeholder={placeholder || "Search..."}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={onSearch} edge="end" >
                            {icon ? (
                                <img src={iconImage} alt="icon" />
                            ) : (
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 11 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    
                                >
                                    <path
                                        d="M5 10.2656C6.19347 10.2656 7.33807 9.79152 8.18198 8.9476C9.02589 8.10369 9.5 6.9591 9.5 5.76562C9.5 4.57215 9.02589 3.42756 8.18198 2.58364C7.33807 1.73973 6.19347 1.26563 5 1.26562C3.80653 1.26563 2.66193 1.73973 1.81802 2.58364C0.974106 3.42756 0.5 4.57215 0.5 5.76562C0.5 6.9591 0.974106 8.10369 1.81802 8.9476C2.66193 9.79152 3.80653 10.2656 5 10.2656ZM8.965 10.6106C9.23 11.4106 9.835 11.4906 10.3 10.7906C10.725 10.1506 10.445 9.62562 9.675 9.62562C9.105 9.62062 8.785 10.0656 8.965 10.6106Z"
                                        stroke="black"
                                        strokeOpacity="0.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    ),
                    disableUnderline: true,
                }}
            />
        </Grid>
    );
};

export default SearchInput;
