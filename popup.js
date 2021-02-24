
// переменная с кодом попапа
const popup =`
<div class="popup_before" id="popupBeforeRedirect" style="display: none;">
<style>
    #popupBeforeRedirect{
        font-family: Arial, Helvetica, sans-serif;
        position: fixed;
        z-index: 9999;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #00000075;
        display: flex;
        align-items:center;
        justify-content: center;
        overflow-y: auto;
        font-size: 26px;
        
    }
    #popupBeforeRedirect .popup_before--btn{
        border: none;
        outline: none;
        padding: 0;
        background: none;
        cursor: pointer;
        
    }
    #popupBeforeRedirect .popup_before--wrapper{
        width: 100%;
        max-width: 550px;
        position: relative;
        background-color:#fff;
        box-sizing: border-box;
        padding: 30px 50px 50px;
        margin: 0 auto;
        text-align: center;
        /* transform: translateY(-50%);
        top: 50%; */
        height: fit-content;
    }
    #popupBeforeRedirect .popup_before--close{
        position: absolute;
        border: none;
        width: 50px;
        height: 50px;
        background-color:transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5px;
        right: 5px;
    }
    #popupBeforeRedirect .popup_before--cross{
        width: 33px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #popupBeforeRedirect .popup_before--cross svg{
        transform: scale(0.85)
    }
    #popupBeforeRedirect .popup_before--text{
        color: #000000;
        font-style: normal;
        font-weight: bold;
        font-size: inherit;
        line-height: 115%;
        padding: 30px 0;
    }
    #popupBeforeRedirect .popup_before--buy_btn{
        border: 9px solid #000000;
        box-sizing: border-box;
        padding: 15px 10px;
        font-weight: bold;
        font-size: inherit;
        line-height: 120%;
        text-transform: uppercase;
        display: block;
        width: 100%;
        color: #000000;
        max-width: 768px;
        transition: ease 0.5s;
    }
    #popupBeforeRedirect .popup_before--buy_btn:hover{
        color: #fff;
        background-color: #000;
        box-shadow: 0 0 15px 2px rgb(0 0 0 / 40%);
    }
    #popupBeforeRedirect .popup_before--read{
        width: 100%;
        padding: 15px 10px;
        border: 9px solid #03A831;
        background-color: #03A831;
        color: #fff;
        font-weight: bold;
        font-size: inherit;
        line-height: 120%;
        transition: ease 0.5s;
        max-width: 768;
        box-shadow: 0 0 15px 2px rgba(3, 168, 49, 0.3);
    }
    #popupBeforeRedirect .popup_before--read:hover{
        box-shadow: 0 0 18px 5px rgb(3 168 49 / 70%);
    }
    .stop-scrolling{
        height: 100% !important;
        overflow: hidden !important;
    }



    @media (max-width:767px){
        #popupBeforeRedirect .popup_before--wrapper{
            padding-left: 20px;
            padding-right: 20px;
        }
        #popupBeforeRedirect{
            font-size: 30px;
        }
        #popupBeforeRedirect .popup_before--close{
            right: 0;
        }

        #popupBeforeRedirect .popup_before--close{
            width: 60px;
            height: 60px;
        }
        #popupBeforeRedirect .popup_before--read,#popupBeforeRedirect .popup_before--buy_btn{
            padding: 26px 10px;
        }

        #popupBeforeRedirect .popup_before--wrapper{
            padding-top: 60px;
        }
        #popupBeforeRedirect .popup_before--wrapper{
            display: flex;
            align-items:center;

        }
    }
    @media (max-width:400px){
        #popupBeforeRedirect{
            font-size: 26px;
        }
        #popupBeforeRedirect .popup_before--buy_btn,#popupBeforeRedirect .popup_before--read{
            border-width: 6px;
        }
    }
    @media (max-width:350px){
        #popupBeforeRedirect{
            font-size: 24px;
        }
        #popupBeforeRedirect .popup_before--buy_btn,#popupBeforeRedirect .popup_before--read{
            border-width: 6px;
        }
    }
</style>
<div class="popup_before--wrapper">
    <button class="popup_before--close popup_before--btn popup_before--close-control">
        <span class="popup_before--cross">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L36.5 36.5M36.5 3L3 36.5" stroke="black" stroke-opacity="0.1" stroke-width="6"/>
                </svg>
        </span>

    </button>
    <div class="popup_before--content">
        <div class="popup_before--text popup_before--text-buy">
            Subscribe to access paid content:
        </div>
        <a  class="popup_before--buy_btn popup_before" id="popupGoTotarget">
            Subscribe
        </a>
        <div class="popup_before--text popup_before--text-free">
            You can also continue reading this article for free!
        </div>
        <button class="popup_before--btn popup_before--read popup_before--close-control">
            READ FOR FREE
        </button>
    </div>
</div>
</div>
`;
$('body').append(popup);
// добавляем попап
$(document).ready(function () {
    
    $('.popup_before--text-buy').text('Subscribe to access paid content:');
    $('.popup_before--buy_btn').text('Subscribe');
    $('.popup_before--text-free').text('You can also continue reading this article for free!');
    $('.popup_before--read').text('READ FOR FREE');
    // тут можно поменять текст на попапе 
    $('a,#popupBeforeRedirect').on('click',function(e){
        e.stopPropagation(); //если клик доходит до ссылки или попапа отключем всплытие
    });

    $('body').on('click',function(e){

        e.preventDefault();
        if(window.innerWidth>1140){
            $('body').addClass('stop-scrolling')
        }
        $('#popupBeforeRedirect').fadeIn(500);
    });

    $('.popup_before--close-control').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('stop-scrolling');
        $('#popupBeforeRedirect').fadeOut(500);
    })
});