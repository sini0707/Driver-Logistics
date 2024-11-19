
import './App.css';
import OrderManagement from './Components/OrderManagement';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
// import PickupDetailsForm from './Components/PickupDetailsForm.jsx';
// import PaymentButton from './Components/PaymentButton.jsx';
// import OrderSummary from './Components/OrderSummary.jsx';





function App() {
  return (
    <div className="App">

      <Header/>
     <OrderManagement/>
     <Footer/>
     {/* <OrderSummary/> */}
     {/* <PaymentButton/> */}
     {/* <PickupDetailsForm/> */}
    
    
  
 
    </div>
  );
}

export default App;
