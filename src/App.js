import logo from './logo.svg';
import './App.css';
import ListEmployees from './components/listemployees';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import EmployeeForm from './components/employeeform';
import Employee from './components/employee';
import DataComponentWithFetching from './components/datafetching';
import withPost from './components/withposts';
import WrappedComponent from './components/wrappedcomponent';
import { ThemeProvider } from './components/themecontext';
import ThemeToggle from './components/themetoggle';
import Navbar from './components/navbar';
import Login from './components/login';
import { AuthProvider } from './components/authcontext';
import Mouse from './components/mouse';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import './transition.css';
import CssTrans from './components/csstrans';
import Composable from './components/composable';

const Circle = ({x,y}) =>(
  <div  style={{
    position:'absolute',
    left : x- 25,
    top:y-25,
    width:50,
    height:50,
    borderRadius:'50%',
    backgroundColor:'red'


  }}/>
);

function App() {

 // const location = useLocation();
  return (
    <Router>
      <div>
      <nav>
        <a href="/">Employee</a> <br/>
        <a href="/add-emp">Add Employee</a> <br/>
        <a href="/css">Add Post</a> <br/>
        <a href="/compose">Composable Components</a> <br/>
        
       
      </nav>
    </div>
    
      <TransitionGroup>
     
        <CSSTransition classNames="fade-enter" timeout={300}>
          <Routes >
          <Route path="/" element={<ListEmployees/>} />
       <Route path="/add-emp" element={<EmployeeForm/>} />
       <Route path="/css" element={<CssTrans/>} />
       <Route path="/compose" element={<Composable/>} />


          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

const SourcePostList = ({ posts, title }) => (
  <div>
    <h2> Source Posts -  {title}</h2>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  </div>

)


export const TechCrunchPost = withPost(SourcePostList, 'techcrunch');
export const AftenpostenPost = withPost(SourcePostList, 'Aftenposten');
export default App;
