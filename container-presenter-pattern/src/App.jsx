import UserProfileContainer from "./components/Profile/UserProfileContainer";
import "./App.css"
function App() {
  console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);

  return (
      <UserProfileContainer userId={2} />
    
  );
}

export default App;
