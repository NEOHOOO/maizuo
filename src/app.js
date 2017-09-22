
require("./styles/app.scss")

import RootComponent from './scripts/components/RootComponent'

import HomeComponent from './scripts/components/Home/HomeComponent'
import CardComponent from './scripts/components/Card/CardComponent'
import MovieComponent from './scripts/components/Movie/MovieComponent'
import MoviesComponent from './scripts/components/Movies/MoviesComponent'
import MyComponent from './scripts/components/My/MyComponent'
import StoreComponent from './scripts/components/Store/StoreComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={HomeComponent}/>
            <Route path="home" component={HomeComponent}></Route>
            <Route path="movie" component={MovieComponent}></Route>
            <Route path="movies" component={MoviesComponent}></Route>
            <Route path="my" component={MyComponent}></Route>
            <Route path="store" component={StoreComponent}></Route>
            <Route path="card" component={CardComponent}></Route>
            <Route path="*" component={HomeComponent}></Route>

        </Route>
    </Router>
    
    ,document.getElementById("app"))