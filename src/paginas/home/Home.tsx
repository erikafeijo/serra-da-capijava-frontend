
import React, { useEffect } from "react";
import { Button, ButtonBaseActions } from "@material-ui/core"
import "./Home.css";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokenReduce";
import { toast } from "react-toastify";
import TabProdutos from "../../Components/produtos/tabProdutos/TabProdutos";

function Home() {
    const navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);


    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token]);
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="subtitulo">Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/clJVUH7.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="produtos">
                </Grid>
            </Grid>
            <TabProdutos />
        </>
    );
}

export default Home;