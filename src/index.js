import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {Button, Container, Row, Col} from "react-bootstrap"
import Hat from "./image/hat.jpg"
import Cen from "./image/cen.jpg"

const products = [
    {
        id: 0,
        name: "เสื้อยืด",
        price: 1500,
        image: Cen
    }, {
        id: 1,
        name: "หมวก",
        price: 2000,
        image: Hat
    },
]

function Product(props) {
    return (
        <>
            <div>
                <img src={
                        props.image
                    }
                    className='img-fluid'
                    style={
                        {width: "20rem"}
                    }
                    alt='gg'/>
                <h1 className='p-2'>
                    {
                    props.name
                }</h1>
                <p>ราคา : {
                    props.price
                } บาท</p>
            </div>
        </>
    )
}

function ProductShow(props) {
    return(
        // <div className='border '>
        //     <div className='p-2'>
        //         <img width={"300rem"} src={props.image}/>
        //     </div>


        // </div> 
        <Container className='border my-3 bg-white'>
            <Row className='my-4 mx-1'>
                <Col md="auto"><img width={"150rem"} src={props.image}/></Col>
                <Col>
                    <h2><b>ชื่อสินค้า : {props.name}</b></h2>
                    <h6>จำนวน {props.count} ชิ้น</h6>
                    <h4>ราคา {props.price*props.count} บาท</h4>
                </Col>
            </Row>
        </Container>
    )
}


export default function App() {

    const [Allitem, setallitem] = useState(0)
    const [Allprice, setallprice] = useState(0)
    const [IdProduct0, setidproduct0] = useState(0)
    const [IdProduct1, setidproduct1] = useState(0)
    return (
        <>
            <div>
                <Container className=''>
                    <Row className='border p-3 text-center'>
                        <h1>สินค้า</h1>
                        <Col className='text-center'>
                            <Product name={
                                    products[0].name
                                }
                                price={
                                    products[0].price
                                }
                                image={
                                    products[0].image
                                }/>
                            <Button onClick={
                                    () => {
                                        setallitem(Allitem + 1)
                                        setallprice(Allprice + products[0].price)
                                        setidproduct0(IdProduct0 + 1)

                                    }
                                }
                                style={
                                    {margin: "5px 0px"}
                            }>
                                เพิ่มลงตะกร้า
                            </Button>
                        </Col>

                        <Col>
                            <Product name={
                                    products[1].name
                                }
                                price={
                                    products[1].price
                                }
                                image={
                                    products[1].image
                                }/>
                            <Button onClick={
                                    () => {
                                        setallitem(Allitem + 1)
                                        setallprice(Allprice + products[1].price)
                                        setidproduct1(IdProduct1 + 1)
                                    }
                                }
                                style={
                                    {margin: "5px 0px"}
                            }>
                                เพิ่มลงตะกร้า
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='p-3 my-3'
                            style={
                                {backgroundColor: "ghostwhite"}
                        }>
                            <h1 className='text-center'>รายการทั้งหมด</h1>
                            <p className='text-center'>จำนวนสินค้าทั้งหมด {Allitem} ชิ้น</p>
                            <p className='text-center'>จำนวนราคารวมทั้งหมด {Allprice} บาท</p>

                           <div className='mx-52'>
                           {IdProduct0 <= 0 ?<></>:<><ProductShow image={products[0].image} name={products[0].name} price={products[0].price} count={IdProduct0}/></>}
                            {IdProduct1 <= 0 ?<></>:<><ProductShow image={products[1].image} name={products[1].name} price={products[1].price} count={IdProduct1}/></>}
                           </div>
                                 
                            
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
    // return (
    //     <>
    //         <Container className='p-5 m-2' style={{backgroundColor:"ghostwhite"}}>
    //             <h1>Bootstrap</h1>
    //             <Button variant='success' style={
    //                 {margin: "0px 3px"}
    //             }>
    //                 Click Me
    //             </Button>
    //             <Button style={
    //                 {margin: "0px 3px"}
    //             }>
    //                 Click Me
    //             </Button>
    //             <Button variant='danger' style={
    //                 {margin: "0px 3px"}
    //             }>
    //                 Click Me
    //             </Button>
    //         </Container>
    //     </>
    // )


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
