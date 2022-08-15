import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AllScreens from '../screens/AllScreens';
import "swiffy-slider/css"
import { swiffyslider } from 'swiffy-slider'
import "./style.css"
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';


//swiffy-slider uchun
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});



const Home = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const [vaqtinchaData, setVaqtinchaData] = useState([])
    console.log("redux", data);


    const key = "51cc7f5f459038d8f6fd27150449d6a1"
    const axios = require('axios').default;
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((value) => {

                setVaqtinchaData(value.data.results)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const SendRedux = () => {
        const action = { type: "ALL_DATA", payload: vaqtinchaData };
        dispatch(action)
    }

    const Liking = (i) => {
        const action = { type: "LIKE", payload: i };
        dispatch(action);
        console.log(i)

    }

    const Korzina=(i)=>{
        const action = { type: "KORZINA", payload: i };
        dispatch(action);
    }

    return (
        <AllScreens>
            <div>
                <div className="container">
                    <button className='btn btn-outline-danger' onClick={() => SendRedux()}>Send Redux</button>

                </div>

                <div class="swiffy-slider slider-item-show4 slider-nav-chevron slider-nav-outside">
                    <ul class="slider-container">
                        {
                            data.map((v, i) => {
                                return <li key={i}>
                                    <div id={`slide${i + 1}`}>
                                        <img src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="rasm" className='sliderPictures' />
                                    </div>
                                </li>
                            })
                        }

                    </ul>

                    <button type="button" class="slider-nav"></button>
                    <button type="button" class="slider-nav slider-nav-next"></button>

                    <ul class="slider-indicators">
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>


                <h1 className='text-light text-center mt-5'>Movies</h1>
                <div className="container">
                    <div className="row">

                        {
                            data.map((v, i) => {
                                return <div className="col-lg-2 col-md-4 col-sm-6" key={i}>
                                    <div className="filmCard">
                                        <div className="filmCardMini">
                                            <img src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="rasm" className='picturesCardMain' />

                                        </div>
                                        <div className="cardAbsolute">
                                            <div className='d-flex justify-content-end'>
                                                <button className='tugma' onClick={() => Liking(i)}>
                                                    <span className={v.adult ? "d-none" : "text-light"}><AiOutlineHeart /></span>
                                                    <span className={!v.adult ? "d-none" : "text-light"}><AiFillHeart /></span>

                                                </button>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='tugma text-light' onClick={()=>Korzina(i)}><AiOutlineShoppingCart /></button>
                                            </div>

                                            <div className="mt-4 ms-1">
                                                <h6 className='text-light'>Watches: {v.vote_count}</h6>
                                                <p className='text-danger'>Language: {v.original_language}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <p className='text-light fs-5 mb-0'>{v.title}</p>
                                    <p className='text-secondary mt-0'>{v.id}</p>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>

        </AllScreens>
    )
}

export default Home