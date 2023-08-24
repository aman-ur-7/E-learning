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
                    h3{
                        color: #FFC27A;
                    }

                    h1{
                        font-size: 34px;
                    }
                    p{
                        color: #ffffff85;
                    }
                }

                .landing-image{
                    border: 1px solid red;

                    &>img{
                        height: 300px;
                        position: relative;
                        margin: auto;
                    }
                }
            }
        }
    }

`;
