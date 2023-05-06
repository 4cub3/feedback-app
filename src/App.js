import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// function App (){
//     const title = 'blog post';
//     const body = 'This is a blog post';
//     const comments = [
//         {
//             id: 1,
//             title: 'title1'
//         },
//         {
//             id: 2,
//             title: 'title2'
//         },
//         {
//             id: 3,
//             title: 'title3'
//         }
//     ];
//     const showBlogPost = false;
//     const commentBlock = ( <div className="comments">
//     <h3>Comments({comments.length})</h3>
//     <ul>

//         {
//             comments.map((comment, index) => (
//             <li key={index}>
//             {comment.title}
//             </li>
//             ))
//         }

//      </ul>
//     </div>);

//     return (
//         <div className="container">
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>
//         {showBlogPost && commentBlock}
//         </div>
//     )
// };

// export default App

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/about" Component={AboutPage} />
          <Route path='*' Component={NotFound}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
