import './App.css';

function handleSubmit(event) {
  event.preventDefault()
}

const App = () => {
    return (
     <div>
         <form class="input-product" onSubmit={handleSubmit}>
           <label>
             <input type="text" />
             </label>
         <h4>Preço:</h4>
         <form class="input-price">
         </form>
     </div>
     )
}

export default App;
