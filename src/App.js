import React, { Component } from "react";
import GraphSolde from "./GraphSolde/GraphSolde";

class App extends Component {
  render() {
    const data = [
      { jour: 1, debut: 10, fin: 10 },
      { jour: 2, debut: 10, fin: 5 },
      { jour: 3, debut: 5, fin: 5 },
      { jour: 4, debut: 5, fin: 5 },
      { jour: 5, debut: 5, fin: 15 },
      { jour: 6, debut: 15, fin: 2 },
      { jour: 7, debut: 2, fin: 2 },
      { jour: 8, debut: 2, fin: 2 },
      { jour: 9, debut: 2, fin: 12 },
      { jour: 10, debut: 12, fin: 15 },
      { jour: 11, debut: 15, fin: 12 },
      { jour: 12, debut: 12, fin: 12 },
      { jour: 13, debut: 12, fin: 3 },
      { jour: 14, debut: 3, fin: 5 },
      { jour: 15, debut: 5, fin: 10 },
      { jour: 16, debut: 10, fin: 10 },
      { jour: 17, debut: 10, fin: 10 },
      { jour: 18, debut: 10, fin: 20 },
      { jour: 19, debut: 20, fin: 25 },
      { jour: 20, debut: 25, fin: 12 },
      { jour: 21, debut: 12, fin: 15 },
      { jour: 22, debut: 15, fin: 10 },
      { jour: 23, debut: 10, fin: 8 },
      { jour: 24, debut: 8, fin: 12 },
      { jour: 25, debut: 12, fin: 12 },
      { jour: 26, debut: 12, fin: 12 }
    ];
    return (
      <div className="App">
        <h2>Graphique du solde</h2>
        <div>
          <GraphSolde data={data} size={[1000, 500]} />
        </div>
      </div>
    );
  }
}

export default App;
