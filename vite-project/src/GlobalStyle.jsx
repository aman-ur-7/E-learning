import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .main-page{

        .hero-section{
            display: flex;
            flex-direction: column;
            background: #6176F7;
            height: 76vh;
            gap: 50px;
            color: white;

    .header{
            .clip-path
            {

                display: flex;
                height: 500px;
                width: 500px ;
                clip-path: polygon(0 0, 0 55%, 100% 0);
                position: absolute ;
                background-color: rgba(255, 255, 255, 0.021);
                top:-57px ;
                left: 0px ;
            }


            &>div{


                display: flex;
                min-width: 300px;
                justify-content: space-around;
                padding:10px;
                text-transform:capitalize;
                align-items: center;

                .logo{
                    font-size: 18px;
                    display: flex;
                    align-items: baseline;
                    color: #FFC27A;

                    &>span{
                        color: white;
                        font-size: 24px;
                        font-weight: bold;
                    }

                }

                .header-content{

                    color: white;
                    display: flex;
                    gap: 50px;

                    &>span{
                        cursor: pointer;
                    }

                    &>:nth-child(1){
                        color: #FFC27A;
                    }
                }

                .auth-buttons{
                    color: white;
                    display: flex;
                    gap: 30px;

                .nav-link{
                        &>div{
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        cursor: pointer;

                            &>button{
                                background: none;
                                outline: none;
                                border: none;
                            }
                    }
                }
                    :active{
                        color: orange;
                    }
                    
                    button{
                        background:linear-gradient(#FFC27A, #FFA337);
                        border-radius: 15px;
                        padding: 2px 8px;
                    }

                }
                }
            }

            .hero-content{
                display: flex;
                justify-content: space-around;
                align-items: center;

                &>div{
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                &>:nth-child(1){
                    display: flex;
                    flex-direction: column;

                    &>h1{
                        text-transform: uppercase;
                        font-size: 35px;
                        font-weight: bold;
                    }

                    &>div{
                        display: flex;
                        width: 300px;
                        gap: 8px;
                        align-items: center;

                        &>p{
                            font-weight: 100;
                        }

                        .vertical-line{
                            border-left: 1px solid white;
                            height: 50px;
                        }
                    }

                    .hero-buttons{
                        display: flex;
                        gap: 20px;

                        &>:nth-child(1){
                            background: #FFA337;
                            padding: 8px;
                            border-radius: 25px;
                        }
                        &>:nth-child(2){
                            border: 2px solid black;
                            color: black;
                            padding: 8px;
                            border-radius: 25px;
                        }
                    }
                }

                .arrow-png{

                    &>:nth-child(1){
                        position: absolute;
                        height: 24px;
                        bottom: 180px;
                        right: 380px;
                    }
                    &>:nth-child(2){
                        position: absolute;
                        height: 24px;
                        top: 120px;
                        right: 430px;
                    }
                    &>:nth-child(3){
                        position: absolute;
                        height: 45px;
                        bottom: 210px;
                        left: 410px;
                    }
                }

                .hero-jpg{
                    &>:nth-child(1){
                    position: relative;
                    height: 240px;
                    z-index: 1;
                }
                
                &>:nth-child(2){
                    display: flex;
                    justify-self: center;
                    position: absolute;
                    height: 240px;
                    width: 260px;
                    top: 100px;
                    right: 90px;
                    z-index: 2;
                }
                &>:nth-child(3){
                    display: flex;
                    justify-self: center;
                    position: absolute;
                    height: 240px;
                    width: 250px;
                    top: 110px;
                    right: 100px;
                    z-index: 0;
                }
            }
        }
        }

        footer{
            padding: 10px;
            background: #F1F2F8;
            height: 24vh;
            display: flex;
            justify-content: space-around;
            align-items: center;

            &>div{
                h1{
                    font-size: 30px;
                    text-transform: uppercase;
                }

            &>p{
                width: 300px;
            }

            &>span{
                font-size: 20px;
                text-transform: uppercase;
                font-weight: bold;
            }
            
            .react-icons{
                border-radius: 8px;
                color: white;
                size: 20px;
                padding: 8px;
            }
        }

            &>:nth-child(2)>:nth-child(1)
            {
            background-color: #1CD7AF;
             }
            &>:nth-child(3)>:nth-child(1)
            {
            background-color: #92DAF0;
             }
            &>:nth-child(4)>:nth-child(1)
            {
            background-color: #525BF1;
             }
        }

    }

    .login{
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        
    .image-section{
        background-image: url('https://cdn.pixabay.com/photo/2020/05/15/19/37/book-5174879_1280.jpg');
        background-position: center top;
        padding: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        
        &>p
        {
            color: white;
            font-size: 18px;
        }
        }

        .login-form{
            display: flex;
            flex-direction: column;
            background: #F1F2F8;
            justify-content: center;
            text-align: center;
            align-items: center;
            padding: 20px;
            gap: 50px;

            &>h1{
                font-size: 30px;
                font-weight: bold;
                text-transform: capitalize;
                color: #375137;
            }
            &>h3{
                font-size: 20px;
                font-weight: bold;
                text-transform: capitalize;
                color: #b2d6b2;
            }
            
            .login-inputs{
                display: flex;
                flex-direction:column;
                gap: 16px;
                align-items: start;
                text-align: start;
                color: #7e7e7e;

                &>div{
                    display: flex;
                    flex-direction: column;
                    gap: 4px;

                    &>input{
                        outline: none;
                        border: none;
                        background: none;
                        border-bottom: 1px solid #afaeae;
                    }
                }
            }
            .form{
                display: flex;
                flex-direction: column;
                gap: 20px;

                &>button{
                    border-radius: 22px;
                    padding: 4px;
                    background: #707970;
                }
            }
        }
    }

    .landing-holder{
        
        .ladning-page{
            padding: 10px 80px;
            background: #6176F7;
            height: 85vh;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 80px;

            .landing-header{
                display: flex;
                align-items: center;
                justify-content: space-between;

                &>:nth-child(1){
                    font-size: 25px;
                    font-style: italic; 
                    color: #FFC27A;

                    &>span{
                        font-size: 30px;
                        color: white;
                    }
                }
                
                &>:nth-child(2){
                    display: flex;
                    align-items: center;
                    gap: 50px;
                    text-transform: capitalize;
                }
                &>:nth-child(3){
                    position: absolute;
                }
                &>.landing-nav>button{
                    padding: 5px;
                    color: white;
                    border-radius: 23px;
                    background: linear-gradient(0deg, rgba(255,163,55,1) 0%, rgba(255,194,122,1) 100%);
                    width: 100px;
                }
            }

            .landing-content{
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                justify-content: center;

                .landing-about{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h3{
                        color: #FFC27A;
                    }

                    h1{
                        font-size: 34px;
                    }
                    p{
                        color: #ffffff85;
                    }

                    .search-bar{
                        display: flex;
                        align-items: center;

                        &>input{
                            color: #FFA337;
                            width: 60%;
                            outline: none;
                            border: none;
                            padding: 5px 10px;
                            border-radius: 50px;
                        }

                        .mic{
                            position: relative;
                            left: -68px;
                            padding: 8px;
                            cursor: pointer;
                            
                        }
                        .search{
                            position: relative;
                            left: -66px;
                            background:linear-gradient(#FFC27A, #FFA337);
                            padding: 8.5px;
                            border-radius: 50%;
                            cursor: pointer;
                        }
                    }
                }

                .landing-image{
                    
                    &>img{
                        height: 300px;
                        position: relative;
                        transform: translate(45%, -15%);
                        text-align: center;

                    }
                }
            }
        }
    }

    .number-counts{
        height: 15vh;
        background: #F1F2F8;
        display: flex;
        align-items: center;
        padding: 0px 80px;
        justify-content: space-between;
        gap: 20px;

        &>div{
            display: flex;
            align-items: center;
            gap: 10px;

            &>div>span{
                font-size: 18px;
                font-weight: 600;
            }
        }

        &>:nth-child(1)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #2AF9B1 0%, #20B486 100%);
                color: white;
        }

        &>:nth-child(2)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #A988F9 0%, #6D3AE9 100%);
                color: white;
        }

        &>:nth-child(3)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #FFA4AF 0%, #EE455A 100%);
                color: white;
        }

        &>:nth-child(4)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #92DAF0 0%, #21C9FF 100%);
                color: white;
        }
    }

    .about-page{
        padding: 40px 80px;
        display: flex;
        gap: 50px;
        flex-direction: column;


        &>:nth-child(1){

        &>h1{
            font-size: 30px;
            font-weight: 700;
            
        &>span{
            color: #3461FD;
        }
        }
    }

    .swiper{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .swiper-slide{ 
        padding: 30px;

        &>section{
            height: 260px;
            width: 200px;
            padding: 10px;
            background: #FFFFFF;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.13), 0 13px 16px rgba(0, 0, 0, 0.107);

            &>:nth-child(4){
                display: flex; 
                justify-content: space-between;

                &>span{
                    cursor: pointer;
                }

                &>:nth-child(2){
                    color: tomato;
                }
            }


        &>:nth-child(1)>span{
            position: absolute;
            background: #ffffff6c;
            margin: 3px;
            padding: 3px;
            border-radius: 8px;
        }
    }
    }

    .swiper-pagination-bullet-active{
        background: #FFC27A;
    }
}

.auth-page{
    height: 100vh;
    flex-wrap: wrap;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://cdn.pixabay.com/photo/2020/05/15/19/37/book-5174879_1280.jpg');
    background-position: center;
    background-size: cover;
    padding: 30px;


    .chakra-tabs{
        margin: auto;
        width: 35%;
        padding: 30px;
        background: #ffffff12;
        border-radius: 15px;
    }
}

.sign-up{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    &>h1{
        font-size: 20px;
        font-weight: 600;
        color: #7dab7d;
    }

    &>form{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 40px;
        align-items: center;

        &>section{
            display: flex;
            flex-direction: column;
            gap: 8px;

            &>div{
                display: flex;
                flex-direction: column;
            }
        }
        .eye-display{
            display: flex;
            align-items: center;

            &>span{
                cursor: pointer;
            }
        }

        input{
            border: none;
            outline: none;
            background: none;
            border-bottom: 1px solid black;
        }

        button{
            background: #64d764;;
            padding: 5px 10px;
            border-radius: 22px;
        }
        span{
            color: #000000ac;
        }
    }
}

.css-1mbanyi[aria-selected=true], .css-1mbanyi[data-selected]{
    color: white;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    border: none;
}

.css-fgp5ep{
    border-bottom: 1px solid black;
}

.css-1mbanyi{
    outline: none;
    border: none;
}

.course-list{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-size: 20px;

    :hover{
        color: white;
    }
}

.courses{
    background: #E7E9EB;
    padding: 30px 80px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;

    &>div{

        &>h1{
            font-size: 30px;
            font-weight: 600;

            &>span{
                color: #3461FD;
            }
        }

        &>p{
            color: grey;
        }
    }

    .courses-categories{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        &>div{
            padding: 8px;
            background: white;
            display: flex;
            gap: 12px;
            align-items: center;
            border-radius: 12px;
            width: 210px;
            justify-content: space-between;
            cursor: pointer;
            
            &>div{
                display: flex;
                gap: 8px;
                align-items: center;
            }

            &>:nth-child(2){
                border: 1px solid white;
                padding: 2px;
                border-radius: 50%;

                    &:hover {
                    background: var(--secondary-500, #FFC27A);
                    color: white;
                    cursor: pointer;
    }
            } 

            &:active{
                border: 1px solid var(--secondary-500, #FFC27A);
                box-shadow: 0px 12px 48px 0px rgba(255, 194, 122, 0.26);
            }
        }
    }
}

.blog{
    background: #A988F9;
    display: flex;
    flex-direction: column;
    &>span{
        font-size: 30px;
        margin: auto;
    }
    .blog-form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 30px;
        gap: 10px;

        &>:nth-child(1){
            width: 300px;
            color: black;
            outline: none;
            background: none;
            border-bottom: 1px solid white;
        }

        &>:nth-child(2){
            width: 300px;
        }

        textarea{
            resize: none;
            outline: none;
            border: none;
            background: #e5efe5;
        }

        .btn{
            font-weight: 600;
            font-size: 23px;
            width: 260px;
            margin: auto;
            background: #f47180;
        }
    }
}

.react-blog{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 60px;

    &>div{
        display: flex;
        flex-direction: column;
        gap: 80px;
        padding: 10px 50px;


        &>img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center;
            border-radius: 20px;
        }

        &>div{
            display: flex;
            flex-direction: column;
            gap: 10px;

            &>span{
                font-size: 35px;
                font-weight: 600;
                color: #3461FD;
            }
            &>p{
                color: #7e7e7e;
                line-height-step: 3px;
            }
            &>h3{
                font-weight: 600;
            }
            hr{
                height: 3px;
                background: #FFA337;
            }
        }
    }
}

.blog-page{
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &>div{

        h1{
            font-size: 35px;
            font-weight: 600;
            
            &>span{
                color: #3461FD;
            }
        }

        &>p{
            color: #6D737A;
        }
    }

    .swiper-slider{
        display: flex;
        justify-content: space-between;

        &>div{
            padding:10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);
            border-radius: 20px;

            &>img{
                height: 150px;
                object-fit: contain;
            }
            &>span{
                font-weight: 600;
            }
        }
    } 
}
.landing-footer{
    background: #F8F4FF;
    padding: 40px 80px;
    display: flex;
    flex-direction: column;

    &>div{
        display: flex;
        flex-direction: column;
        gap: 40px;

        &>:nth-child(1){
        &>h1{
            font-size: 35px;
            font-weight: 600;
            &>span{
                color: #3461FD;
            }
        }
        &>p{
            color: #6D737A;
        }
    }

    &>:nth-child(2){
        display: flex;
        gap: 20px;
    }
}
    .feedback-content{
        background: white;
        width: 35%;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: var(--gray-700, #363A3D);

        &>div{
            display: flex;
            align-items: center;
            display: flex;
            justify-content: space-between;

            &>div{
                display: flex;
                gap: 20px;

                &>img{
                height: 50px;
                border-radius: 50px;
                }
                
                &>div{
                &>h1{
                    font-weight: 600;
                    font-size: 18px;
                }
            }
            }
        }

        &>p{
            color: #363A3D;
        }
    }
}

.contact-footer{
    display: flex;
    flex-direction: column;

    .advertise{
        padding: 40px 80px;
        display: flex;
        align-items: center;

        &>div{
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            &>h1{
                font-size: 35px;
                font-weight: 600;
                &>span{
                    color: #3461FD;
                }
            }
            &>h3{
                font-size: 20px;
                color: #52565C;
            }
            &>p{
                color: #6D737A;
            }
            &>button{
                border-radius: 8px;
                padding: 4px;
                border-radius: 100px;
                background: linear-gradient(180deg, #FFC27A 0%, #FFA337 100%);
                color: white;
                width: 30%;
                margin: auto;
            }
        }
    }

    .contact-page{
        padding: 40px 80px;
        background: var(--2nd-primary-900, #21212F);
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        &>section{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .e-dex{
            &>h1{
                font-size: 25px;
                font-style: italic;
                &>span{
                    color: #FFA337;
                }
            }
            .contact-content{
                display: flex;
                flex-direction: column;
                gap: 6px;

                
                &>h3{
                        font-weight: 600;
                }

                &>div{
                    display: flex;
                    flex-direction: column;
                    gap: 6px;

                    &>span{
                        color: #E7E9EB;
                    }

                    .social-media{
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        color: #53586c;
                    }
                }
            }
        }
        .explore{
            display: flex;
            flex-direction: column;
            gap: 10px;

             &>h1{
                font-size: 25px;
            }

            &>div{
                display: flex;
                flex-direction: column;
                gap: 6px;
                color: #CFD3D6;
            }
        }
        .category{
            display: flex;
            flex-direction: column;
            gap: 10px;

            &>h1{
                font-size: 25px;
            }

            &>div{
                display: flex;
                flex-direction: column;
                color: #CFD3D6;
                gap: 6px;
            }
        }
        .subscribe{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 300px;

            &>h1{
                font-size: 25px;
            }

            &>div{
                display: flex;
                flex-direction: column;
                gap: 6px;
                color: #CFD3D6;

                &>input{
                    padding: 8px;
                    border-radius: 8px;
                    border: none;
                    outline: none;
                    color: #FFA337;
                }
                &>button{
                    width: 40%;
                    padding: 2px;
                    border-radius: 20px;
                    background: linear-gradient(180deg, #FFC27A 0%, #FFA337 100%);
                    color: white;
                }
            }
        }
    }
}

.advertise-component{
    height: 400px;
    width: 400px;
    position: relative;

    &>img{
        z-index: 3;
    }

    &>div{
        width: 230px;
        height: 230px;
        background:#85A0FE;
        position: inherit;
        border-radius: 50%;
        top: -210px;
        left: 60px;
        z-index: -1;
    }
}

`;
