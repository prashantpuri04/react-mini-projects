import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"

// const HeadingComponent = () => {
//     return(
//     <div>
//         <p>Hello world from react</p> 
//     </div>
//     )
    
// }

const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout />);
