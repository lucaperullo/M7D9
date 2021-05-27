import * as React from "react";
import {
  ChakraProvider,
  Box,
 
  VStack,
  
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Search from "./components/SearchSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AlbumDetail from "./components/AlbumDetail";

export const App = () => (
  <Router>
  <ChakraProvider theme={theme}>
   
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Route exact path="/" render={props=><Search />}></Route>
       
       
        </VStack>
      </Grid>
    </Box>
    <Route exact path={"/:id"} component={AlbumDetail} ></Route>
  </ChakraProvider>
  </Router>
);
