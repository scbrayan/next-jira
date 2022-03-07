import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={"Pendientes"}></CardHeader>
            <CardContent>
              {/* Agregar una entrda */}
              {/* Listar entrdas */}
              <NewEntry></NewEntry>
              <EntryList status="pending"></EntryList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={"En Progreso"}></CardHeader>
            <CardContent>
              {/* Agregar una entrda */}
              {/* Listar entrdas */}
              <EntryList status="in-progress"></EntryList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={"Completadas"}></CardHeader>
            <CardContent>
              {/* Agregar una entrda */}
              {/* Listar entrdas */}
              <EntryList status="finished"></EntryList>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
