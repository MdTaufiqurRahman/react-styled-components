import { ThemeProvider } from 'styled-components'
import {Container} from '../src/components/styles/Container.styles'
import Header from './components/Header';
import GlobalStyles from '../src/components/styles/Global'
import Content from './Content'
import Card from './components/Card';
import Footer from './components/Footer';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles></GlobalStyles>
        <Header></Header>
        <Container>
          {
            Content.map((item, index) =>(
               <Card key={index} item={item}/>
            ))}
        </Container>
        <Footer></Footer>
      </>
    </ThemeProvider>
    )
  };
    
export default App;
