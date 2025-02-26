import { useEffect, useState } from 'react'

function App() {
  const [getValue, setGetValue] = useState("");


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
  }, []);
  
  return(
    <>
      <h1>Test</h1>
      <h2>{getValue}</h2>
    </>
  );

}

export default App;
