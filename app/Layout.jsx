import React from 'react';
import { Link } from 'react-router';

export default (props) => {
   return (
       <div>
           <ul className="nav-bar-links">
               <li className="nav-bar-link"><Link to="/login">login</Link></li>
               <li className="nav-bar-link"><Link to="/chat">chat</Link></li>
           </ul>
           <div>{props.children}</div>
       </div>
   )
};
