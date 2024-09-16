import { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      alert('You must upload a file');
      return;
    }

    const formdata = new FormData();
    formdata.append('image', file);

    console.log('Sending file:', file); // Depuración

    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formdata,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.text();
      })
      .then((res) => console.log('Response text:', res))
      .catch((err) => {
        console.error('Error:', err);
      });

    document.getElementById('fileinput').value = null;
    setFile(null);
  };

  return (
    <>
      <div>
        <div>
          <input id="fileinput" onChange={selectedHandler} type="file" />
          <button type="button" onClick={sendHandler}>Upload</button>
        </div>
      </div>
    </>
  );
}

export default App;