import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null)

  const selecteHandler = e => {
    setFile(e.target.file[0])
  }
  const sendHandler = () =>{
    if(!file){
      alert("tienes que cargar una imagen")
      return
    }
    const formdata = new FormData()
    formdata.append("image", file)

    fetch("http://localhost:9000/images/post",{
      method: "POST",
      body:formdata
    }).then(res => res.text()).then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })
    document.getElementById("fileInput").vale = null
    setFile(null)
  }

  return (
    <>
      <div>
        <div>
          <input id="fileInput" onChange={selecteHandler} type="file" name=""/>
          <button type='button' onClick={sendHandler}>Cargar</button>
        </div>
      </div>
    </>
  )
}

export default App
