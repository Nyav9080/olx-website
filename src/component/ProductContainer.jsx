import React from 'react'
import Product from './Product'
import lenovo from '../lenovo.jpg'
import punch from '../punch.jpg'
import Appo from '../Appo.jpeg'
import refri from '../refri.jpeg'
import shoe from '../shoe.jpeg'
import shoe2 from '../shoe2.jpeg'
import th from '../th.jpeg'
import tv1 from '../tv1.jpeg'
import tv2 from '../tv2.jpeg'
import house from '../house.jpeg'
import house2 from '../house2.jpeg'
import smartwatch from '../smartwatch.jpeg'
import productcontainer from './productcontainer.css'


const ProductContainer = () => {
  return (
    <div className='main-container' style={{ display: "flex", flexWrap: "wrap" }}>
        
       <Product
        image={lenovo}
        price="20,000"
        desc="Lenovo laptop"
        locate="pune"
        date="25/12/2023"
        />
        <Product
        image={punch}
        price="4,00,000"
        desc="Punch car"
        locate="Akurdi"
        date="29/12/2023"
        />
        <Product
        image={Appo}
        price="10,000"
        desc="Appo mobile"
        locate="nigadi"
        date="20/12/2023"
        />
        <Product
        image={smartwatch}
        price="2,000"
        desc="smartwatch"
        locate="hadapsar"
        date="14/12/2023"
        /> 
        <Product
        image={shoe}
        price="1,000"
        desc="paragon"
        locate="deccan"
        date="1/10/2023"
        />
        <Product
        image={house}
        price="58,00,000"
        desc="pranshu square"
        locate="chikhali"
        date="18/10/2023"
        />
        <Product
        image={refri}
        price="10,000"
        desc="refrigarator"
        locate="manapa"
        date="28/11/2023"
        />
        <Product
        image={th}
        price="800"
        desc="watch"
        locate="katraj"
        date="14/11/2023"
        />
        <Product
        image={tv1}
        price="20,000"
        desc="sony tv"
        locate="bhaktishkti"
        date="31/12/2023"
        />
        <Product
        image={shoe2}
        price="300"
        desc="bata shoe"
        locate="dhayari"
        date="4/10/2023"
        />
        <Product
        image={house2}
        price="60,00,000"
        desc="taralight home"
        locate="vagholi"
        date="1/12/2023"
        />
        <Product
        image={tv2}
        price="9,000"
        desc="samsung tv"
        locate="baramati"
        date="14/11/2023"
        />
       </div>
        
  )
}

export default ProductContainer


