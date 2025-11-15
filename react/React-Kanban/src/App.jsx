// Importing React's useState hook and the CSS styles
import { useState } from 'react';   // useState is a React hook used to manage state
import './styles.css';             // Importing the styles you previously had in style.css

// Defining the App component — this is the main part of your React application
export default function App() {
  const [items, setItems] = useState(["eggs","chicken","beef"]);
    const add = () => {
    setItems([...items,"food"]);
  };

  const remove = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };


  return (
    // JSX Syntax: JSX is similar to HTML but can also include JavaScript expressions
    <div>
    <div>
        <link rel="stylesheet" href="styles.css"/>
        
        
    </div>

    <div>
        <script src="script.js"></script>
        <h1>
            My first page of things
        </h1>
        <p> This is my intro paragraph describing what I like to consume on a really good day in no particualr order</p>
        <ul>
            <li> Rasta Pasta</li>
            <li> Jerk Chicken</li>
            <li> water </li>
            <li> Boulder potato chips</li>
        </ul>

        <h2> Second page of things</h2>
        <p> My favorite games of all time</p>
        <ol>
            <li> Titanfall 2 </li>
            <li> Red dead redemption 2</li>
            <li> The last of us</li>
            <li> Sekiro Shadows die twice</li>
            <li> The Walking Dead Telltale Series</li>
        </ol>
        
        <div class="grocerylist">
            <h3> My grocery list</h3>
            <ul id = "glist">
             {items.map((num)=> (
              <li key={num}>{num}</li>

             ))
            }
            </ul>
            
            <button onClick={remove}>Remove</button>
            <button id="Add" onClick={add}>Add</button>
        </div>
        
    </div>

    </div>
  );
};
