import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
     .clearfix::after { content: ""; display: table; clear: both; }
    .blind{position:absolute;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px}
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button,figure{margin:0;padding:0;box-sizing:border-box;}
    fieldset,img{border:0 none; vertical-align: bottom;}
    dl,ul,ol,li{list-style:none}
    input,select,textarea,button{border-radius:0;vertical-align:middle}
    body{background:#fff;direction:ltr;-webkit-text-size-adjust:none}
    body,th,td,input,select,textarea,button {font-size:16px;line-height:1.5;font-family:'Noto Sans KR','Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;color:#333;}
    a{color:#222;text-decoration:none}
    a:active{background-color:transparent}
    address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
    #skip { position: relative; z-index: 99; }
    #skip > a { display: block; position: absolute; left: 0; top: -35px; width: 130px; height: 35px; background: #444; color: #fff; line-height: 35px; text-align: center;  }
    #skip > a:focus, #skip > a:active { top: 0; }
    button, .button {border-radius: 4px;}
 `;

export default globalStyles;
