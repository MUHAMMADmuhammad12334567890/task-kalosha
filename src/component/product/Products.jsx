import React, { useState } from 'react';
import img from  '../../img/i (1).webp';
import '../product/product.css';
const Products = () => {

    const removeInfo = () => {
        setInfo()
    }

    const [info, setInfo] = useState('')
 const detalis = () => {
setInfo(<div className='bloc_list_detals'><p className='p'>Все новое это хорошо забытое старо <button className='delete_list_info' onClick={() => removeInfo()}>x</button></p></div>)
 }
 const [block, setBlock] = useState(false)
 const [addToGlass, setAddToGlass] = useState(true)
 const [dalete_Bloc, setDalete_Bloc] = useState()

 const remove = () => {
setAddToGlass(true)
setBlock(false)
setDalete_Bloc()
 }
const clic = () => {
setAddToGlass(!addToGlass)
setBlock(true)
setDalete_Bloc(<button className='delete_button' onClick={() => remove()}>Удалить из стакана</button>)
}
    
    return (
        <>
       <div className='product_conteyner'>
       
           <img src={img} alt="Bitcoin-img" /> 
           <div className='conteyner'>
           <div> 
            <h1>Nike Galoshes</h1>
            <h1>20000$</h1>
            </div>
            <div className='button_info_conteyner'>
            <button className='botton_info' onClick={() => detalis()}>Детали</button>
            
            </div>
          
           </div>
           
           <hr />
           <div>
            <p>Наша Калоша</p>
            <button className={addToGlass ? 'basket_Button' : 'stopClic'} onClick={() => clic()} disabled={block}>{ addToGlass ? "Добавит в Стакан" : "Уже в стакане" }</button>  
            
             
            <div className='conteyner'>
          
            </div>
            <div>{dalete_Bloc}</div>
           
           </div>
          
           
           </div>
           <div>{info} </div>
           </>
    );
};

export default Products;