import { useState } from 'react'
import Header from './components/Header'
import Preview from './components/Preview';
import Content from './components/Content';
import './styles/App.css'

function App() {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => setShowPreview(!showPreview);

  return (
    <>
      <Header togglePreview={togglePreview}/>
      <div className='main'>
        <Content/>
        {showPreview && <Preview/>}
      </div>
    </>

  )
}

export default App
