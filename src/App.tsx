import { useCallback, useMemo, useState } from "react";
import { Box, Grid, Pagination, Paper, Typography } from "@mui/material";
import "./App.css";
import { useGetPokemon } from "./queries/useGetPokemon";
import { useNavigate } from "react-router-dom";

export function App() {
  return <HomePokemon />;
}

function HomePokemon() {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { isLoading, isError, data, error } = useGetPokemon(offset);
  const navigate = useNavigate();
  const handleChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setOffset(value * 20 - 20);
      setPage(value);
    },
    []
  );
  const onClickMoreInfo = useCallback(
    (id: string) => () => {
      navigate(`/pokemon/${id}`);
    },
    []
  );

  const count = useMemo(() => Math.ceil((data?.data?.count ?? 0) / 20), []);

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>error: {(error as any).message}</div>;

  return (
    <div className="App">
      <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
        {data?.data?.results?.map((r) => {
          return (
            <Grid
              item
              key={r.name}
              xs={2}
              onClick={onClickMoreInfo(r.url.slice(34, 36))}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "220px",
                }}
              >
                <Box component="span" sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ marginTop: "24px" }}>
                    {r.name}
                  </Typography>
                  <img
                    src={`/pokemon/${r.name}.jpg`}
                    style={{ height: "100px" }}
                  />
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        page={page}
        count={count}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
