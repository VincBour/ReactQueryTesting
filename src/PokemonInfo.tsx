import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetPokemonById } from "./queries/useGetPokemonById";

export function PokemonInfo() {
  const { id } = useParams();
  const { data } = useGetPokemonById(id);

  const pokemon = data?.data;
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Link to="/">Back to the list</Link>
      </div>
      <Paper elevation={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={`/pokemon/${pokemon?.name}.jpg`}
              style={{ height: "100px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">{pokemon?.name.toUpperCase()}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Height: {pokemon?.height}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Weight: {pokemon?.weight}</Typography>
          </Grid>
          <Grid item xs={6}>
            <div style={{ alignSelf: "center" }}>
              <Typography variant="h6">Types</Typography>
            </div>
            {pokemon?.types.map((t) => {
              return (
                <div>
                  {t.type.name}: {t.slot}
                </div>
              );
            })}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div style={{ alignSelf: "center" }}>
              <Typography variant="h6">Stats</Typography>
            </div>
            {pokemon?.stats.map((s) => {
              return (
                <div>
                  {s.stat.name}: {s.base_stat}
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
