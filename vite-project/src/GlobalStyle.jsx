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
            height: 80vh;
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


                &>:nth-child(1){
                    display: flex;
                    flex-direction: column;

                    &>h1{
                        text-transform: uppercase;
                        font-size: 34px;
                        font-weight: bold;
                    }

                    &>div{
                        display: flex;
                        width: 300px;
                        gap: 8px;
                        align-items: center;

                        &>p{
                            font-size: 14px;
                            letter-spacing: .5px;
                        }

                        .vertical-line{
                            border-left: 1px solid white;
                            height: 50px;
                        }
                    }
                }

                &>:nth-child(2){

                }
            }
        }

    }

`;
