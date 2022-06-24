
import Card from './components/Card/Card'
import Container from './components/Container/Container'
import UserForm from './components/UserForm/UserForm'
import { useState } from 'react'
const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario])
  }
  console.log(usuarios)
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: '20px' }} >
            <UserForm submit={submit}></UserForm>
          </div>
        </Card>
        <Card>
          <ul>
            {
              usuarios.map(x => {
                return <li key={x.email}> {`${x.name} || ${x.lastname} || ${x.email} || ${x.password}`} </li>
              })
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
