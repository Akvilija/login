import './App.css'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import MainRouter from './navigation/MainRouter'

function App() {

  return (
    <>
      <Layout header={<Header />} footer={<h2>Footer</h2>}>
        <MainRouter />
      </Layout>
    </>
  )
}

export default App
