export const MEDIA_QUERIES = {
    phone: {
        /* Small phones [<320px] (iPhone 5, iPhone 4, Galaxy Fold) */
        small: '(max-width: 320px)',

        /* Medium phones [321px-380px] (iPhone X, iPhone 6/7/8, Galaxy s5, Moto G4) */
        medium: '(min-width: 321px) and (max-width: 380px)',

        /* Large phones [381px-480px] (iPhone Plus, iPhone Max, Pixel 2) */
        large: '(min-width: 381px) and (max-width: 480px)'
    },
    /* Small devices [481px-600px] (portrait tablets and large phones) */
    smallDevice: '(min-width: 481px) and (max-width: 600px)',

    /* Medium devices [601px-768px] (landscape tablets) */
    mediumDevice: '(min-width: 601px) and (max-width: 768px)',

    /* Large devices [769px-1025px] (laptops/desktops) */
    largeDevice: '(min-width: 769px) and (max-width: 1025px)',

    /* Extra large devices [1026px<] (large laptops and desktops) */
    extraLargeDevice: '(min-width: 1026px)'
};
