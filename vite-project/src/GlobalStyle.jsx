import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .main-page{

        .hero-section{
            background: #4378e3;
            height: 80vh;

            .header{
                display: flex;
                justify-content: space-around;
                padding:10px;
                text-transform:capitalize;
                align-items: center;

                .logo{
                    font-size: 18px;
                    display: flex;
                    align-items: baseline;
                    color: orange;

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

                    :active{
                        color: orange;
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
                        background: orange;
                        border-radius: 15px;
                        padding: 2px 8px;
                    }

                }
            }

        }

    }
`;
