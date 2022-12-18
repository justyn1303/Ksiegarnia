import { useState } from "react";
import "../../css/AddProduct.css"; 

const [id, setId] = useState('');;
const [nazwa, setNazwa] = useState('');
const [cena, setCena] = useState('');
const [kategoria, setKategoria] = useState('');
const [marka, setMarka] = useState('');

const add = () => {
    
}


const AddProduct = () => {
    return(
        <div className="add-product">
            <label>ID</label>
            <input value={id} onChange={(e)=>setId(e.target.value)} className="form-control"></input>
            <label>Nazwa</label>
            <input value={nazwa} onChange={(e)=>setNazwa(e.target.value)} className="form-control"></input>
            <label>Cena</label>
            <input value={cena} onChange={(e)=>setCena(e.target.value)} className="form-control"></input>
            <label>Kategoria</label>
            <input value={kategoria} onChange={(e)=>setKategoria(e.target.value)} className="form-control"></input>
            <label>Marka</label>
            <input value={marka} onChange={(e)=>{setMarka(e.target.value)}} className="form-control"></input>
            <button onClick={add}>Dodaj produkt</button>
        </div>
    )
}

export default AddProduct