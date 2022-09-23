import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import StatusVoo from "../screens/StatusVoo";
import EditPage from "../screens/EditPage";
import HomeVi from '../screens/HomeVi';
import BolosVi from '../screens/BolosVi';
import PostPage from "../screens/postPage";

const Rotas = {

  Home: {
    nome: "Home",
    screen: Home,
  },

  EditPage: {
    nome: "EditPage",
    screen: EditPage
  },

  Login: {
    nome: "Login",
    screen: Login,
  },
  
  Cadastro: {
    nome: "Cadastro",
    screen: Cadastro,
  },
  

  StatusVoo:{
    nome : "StatusVoo",
    screen: StatusVoo
  },


  HomeVi:{
    nome: "HomeVi",
    screen: HomeVi
  },

  BolosVi:{
    nome: "BolosVi",
    screen: BolosVi
  },
  PostPage:{
    nome : "PostPage",
    screen : PostPage
  },
  
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);
