// import { useState, useEffect } from "react";
import "./App.css";
import { HomeScreen, ListScreen } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { ListCard } from "./components/ListCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/list" element={<ListScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

/* 

const fakeList = [
  {
    id: 0,
    name: "Arroz",
    quantity: 2,
    checked: false,
  },
  {
    id: 1,
    name: "Feijão",
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: "Macarrão",
    quantity: 4,
    checked: false,
  },
  {
    id: 3,
    name: "Tomate",
    quantity: 3,
    checked: false,
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [marketList, setMarketList] = useState([]);

  const loadList = () => {
    setLoading(true);
    setTimeout(() => {
      setMarketList(fakeList);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        marketList.map((item) => (
          <ListCard key={`item_${item.id}`} item={item} />
        ))
      )}
    </div>
  );
}

export default App;

**/
