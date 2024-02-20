import { Search } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

export function SearchComponent() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '20vw' }}>
      <Search sx={{ color: '#fff', mr: 1, my: 0.5, fontSize: 30 }} />
      <TextField fullWidth label="Buscar" variant="standard"
        InputLabelProps={{
          style: { fontSize: '1.6rem', color: '#fff' },
        }}
        inputProps={{
          style: { fontSize: '1.6rem', color: '#fff' },
        }}
      />
    </Box>
  );
}
