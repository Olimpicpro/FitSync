import Card from './card'
import Button from './Button';
import NavBar from './NavBar';
import bttnlrn from './card'
import profilePic1 from './assets/download.png'
import profilePic2 from './assets/2.jpg'
import { useEffect } from 'react';

function App() {
  return (
    <>
  
    <NavBar pic={profilePic1}></NavBar>
    <Card name='Vip' text='Unlimited 1-on-1 private messaging with your dedicated coach Weekly plus 20-minute video check-ins to review progress data and Daily accountability messages to maximize consistency'></Card>
    <Card name='Standard' text='Personalized 4-week workout plan tailored to your goal and In-app tracking for your weights, reps, and measurements
'></Card>
    <Button name='About Us'></Button>
    <Button name='Exit'></Button>


    <p className='copy'>&copy; Taymour Sherif and FitSync 2026</p>
    </>
    
  );
}

export default App
