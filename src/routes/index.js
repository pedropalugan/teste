import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import StatusVoo from "../screens/StatusVoo";
import DestinySant from "../screens/DestinySant";
import HomeVi from '../screens/HomeVi';
import BolosVi from '../screens/BolosVi';
import EditPage from "../screens/postPage";

const Rotas = {

  
  Login: {
    nome: "Login",
    screen: Login,
  },
  
  Cadastro: {
    nome: "Cadastro",
    screen: Cadastro,
  },
  
  Home: {
    nome: "Home",
    screen: Home,
  },

  StatusVoo:{
    nome : "StatusVoo",
    screen: StatusVoo
  },

  DestinySant:{
    nome: "DestinySant",
    screen: DestinySant
  },

  HomeVi:{
    nome: "HomeVi",
    screen: HomeVi
  },

  BolosVi:{
    nome: "BolosVi",
    screen: BolosVi
  },

  EditPage:{
    nome : "EditPage",
    screen : EditPage
  },
  
  
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);
