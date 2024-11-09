import Settings from './components/settings'
import './App.css';
import ProfileCard from './components/ProfileCard'
import withPermission from './components/withPermission'


function App() {
  const ProtectedSettings = withPermission(Settings);
  return (
    <div className="App">
      
      <ProfileCard
        name="Thiago"
        bio="QA Manager"
        imageUrl="https://media.licdn.com/dms/image/v2/D4D03AQE7MeEAiommYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672850111228?e=1736380800&v=beta&t=qNKEhdhdBArouHhWt_b30aTa6AQr9-lXoUpeBYg3XAo"
      />

      <h1>Testando</h1>
      <ProtectedSettings hasPermission={false} />


    </div>
  );
}

export default App;
