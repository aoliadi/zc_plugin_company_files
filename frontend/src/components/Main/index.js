import React from "react";
import SearchBar from "../SearchBar";
import Header from '../Help/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Files from "../Home/Files";
import FileUpload from "../Home/index";
import Home from "../Home";

import NewFolder from "../FolderCreation/Folder";
import TrashApp from "../TrashListView/TrashApp";
import Starred from "../Starred/index";
import Help from '../Help/index';
{/* import AddNewTextDoc from "../AddNewTextDoc/AddNewTextDoc" */}

const Main = () => {
  return (
    <Router basename="/">
      <div className="bg-white h-screen flex flex-1 flex-col items-center overflow-y-auto ">
        <SearchBar />
        <Header />
        {/* <div className="block w-full h-11 bg-primary"></div> */}
        {/* <ComponentToTest /> */}

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          {/* <Route path="/add-new" exact>
            <AddNewTextDoc />
          </Route> */}
          <Route path="/files" exact>
            <Files />
          </Route>
          <Route path="/starred" exact>
            <Starred />
          </Route>
          <Route path="/upload" exact>
            <FileUpload />
          </Route>
          <Route path="/newfolder" exact>
            <NewFolder />
          </Route>
          <Route path="/trashapp" exact>
            <TrashApp />
          </Route>
          <Route path="/help" exact>
            <Help />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
