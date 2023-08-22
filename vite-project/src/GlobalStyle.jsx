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
            height: 78vh;
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

                    &>div{
                        display: flex;
                        align-items: center;
                        gap: 6px;

                        &>button{
                            background: none;
                            outline: none;
                            border: none;

                        }
                        :active{
                            color: orange;
                        }
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
                        font-size: 40px;
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
                    height: 280px;
                    z-index: 1;
                }
                
                &>:nth-child(2){
                    display: flex;
                    justify-self: center;
                    position: absolute;
                    height: 280px;
                    width: 320px;
                    top: 100px;
                    right: 60px;
                    z-index: 2;
                }
                &>:nth-child(3){
                    display: flex;
                    justify-self: center;
                    position: absolute;
                    height: 280px;
                    width: 320px;
                    top: 110px;
                    right: 60px;
                    z-index: 0;
                }
            }
        }
        }

        footer{
            padding: 10px;
            background: #F1F2F8;
            height: 30vh;
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
        }

    }

`;
