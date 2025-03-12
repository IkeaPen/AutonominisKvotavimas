import { Link } from "react-router";
import "./HomePage.css"

function HomePage() {
  /*const [getValue, setGetValue] = useState("");

  
  useEffect(() => {
    fetch("/api/test").then((_res) => {
      if (_res.status === 200) {
        _res.text().then((_text: string) => {
          setGetValue(_text);
        });
      } else {
        setGetValue("Express server is not working.")
      }
    });
  }, []);*/
  
  return(
    <>
    <div className="div1">
      <h1 className="header1">Pervežimo tipas:</h1>
      <div className="div2">
        <Link className="button1" to="/spot">Spot</Link>
        <Link className="button1" to="/contract">Contract</Link>
      </div>
    </div>

    <div className="div3">
      <h1 className="header2">Indeksų nustatymai:</h1>
      <Link className="button2" to="/index">Indeksai</Link>
    </div>
    
    </>
  );

}

export default HomePage;
