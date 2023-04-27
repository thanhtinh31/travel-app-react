import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {PhoneOutlined} from '@ant-design/icons';
import BaseUrl from '../../util/BaseUrl';
import {
  BsClockFill,
  BsFillCarFrontFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { MdAirplanemodeActive, MdLocationOn, MdTrain } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Divider, Form, Input, Radio, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function BookingPage() {
  const b=(name,title,price,people,inteval,dayStart,amount,tourGuide,phone,status)=>{return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
   <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New message 2</title>
    <style type="text/css">
  #outlook a {
    padding:0;
  }
  .es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:18px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
  </style>
   </head>
   <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#FFFFFF">
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
       <tr>
        <td valign="top" style="padding:0;Margin:0">
         <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" background="https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png" style="padding:0;Margin:0;background-image:url(https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png);background-repeat:no-repeat;background-position:left top">
             <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tr>
                <td align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;line-height:45px;color:#000000;font-size:30px"><strong>TRAVEL APP BOOKING</strong></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" background="https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png" style="padding:0;Margin:0;background-image:url(https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png);background-repeat:no-repeat;background-position:left top">
             <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tr>
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://thuenhadulich.vn/wp-content/themes/thuenhanghiduong/images/done_icon.png" alt="Eid Mubarak" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px" width="150" title="Eid Mubarak"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:30px">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;font-size:30px;font-style:normal;font-weight:normal;color:#000000;text-align:center"><strong><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">ĐẶT TOUR THÀNH CÔNG!</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></strong></h1></td>
                       </tr>
                       <tr>
                        <td align="center" style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0">
                         <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:40% !important" role="presentation">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #806b64;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:27px;color:#333333;font-size:18px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Cảm ơn bạn,&nbsp;</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font><span style="color:#000000"><b><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">${name}</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></b></span><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">&nbsp;đã đặt tour&nbsp;của chúng tôi.</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:27px;color:#333333;font-size:18px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Dưới đây là biên lai của bạn&nbsp;( Chúc bạn có một chuyến đi vui vẻ )</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr>
            <td align="center" background="https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png" style="padding:0;Margin:0;background-image:url(https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png);background-repeat:no-repeat;background-position:left top">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;border-top:3px solid #cccccc;border-right:3px solid #cccccc;border-left:3px solid #cccccc;width:600px;border-bottom:3px solid #cccccc">
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-top:10px;background-color:#efefef">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:596px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;font-size:26px;font-style:normal;font-weight:normal;color:#000000"><strong><font style="vertical-align:inherit"><font style="vertical-align:inherit"># T</font></font></strong><b><font style="vertical-align:inherit"><font style="vertical-align:inherit">HÔNG TIN ĐẶT TOUR</font></font></b></h3></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:100% !important" role="presentation">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Tên Tour</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>${title}</strong></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Giá tour / 1 người</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${price}&nbsp;₫</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Số khách</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${people} người</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Lịch trình</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${inteval}</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Ngày&nbsp;xuất phát:&nbsp;</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${dayStart}&nbsp;</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:556px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:100% !important" role="presentation">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Tổng phụ thu</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${amount}&nbsp;₫</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><b>Thuế</b></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">0&nbsp;₫</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Tổng Cộng</strong></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${amount}&nbsp;₫</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
               <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                  <tr>
                   <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><strong>Tình Trạng</strong></p></td>
                      </tr>
                    </table></td>
                   <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                  </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                  <tr>
                   <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                      </tr>
                    </table></td>
                  </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                  <tr>
                   <td align="left" style="padding:0;Margin:0;width:172px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#bb0d0d;font-size:20px">${status}</p></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
                
              </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#efefef">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:555px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:25px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:100% !important" role="presentation">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;font-size:22px;font-style:normal;font-weight:normal;color:#000000;text-align:left"><b>#Thông Tin Hướng Dẫn Viên</b></h3></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:100% !important" role="presentation">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><b>Họ và Tên</b></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${tourGuide}</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" bgcolor="#efefef" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#efefef"><!--[if mso]><table style="width:556px" cellpadding="0" cellspacing="0"><tr><td style="width:192px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><b>Số điện thoại</b></p></td>
                       </tr>
                     </table></td>
                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px"><br></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table>
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:172px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;line-height:30px;color:#333333;font-size:20px">${phone}</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr>
            <td class="es-info-area" align="center" background="https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png" style="padding:0;Margin:0;background-image:url(https://vjbnkp.stripocdn.email/content/guids/CABINET_66f950c6b738d24a0c0ae438e5a17e95/images/81281619674014888.png);background-repeat:no-repeat;background-position:left top">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tr>
                <td align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#999999;font-size:14px"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Bạn nhận được email này vì bạn đã truy cập trang web của chúng tôi hoặc hỏi chúng tôi về bản tin thường xuyên. </font><font style="vertical-align:inherit">Đảm bảo thư của chúng tôi đến được Hộp thư đến của bạn (chứ không phải thư mục rác hoặc thư rác của bạn). </font></font><br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:14px;line-height:21px" href="https://viewstripo.email"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Cảnh sát riêng tư</font></font></a><font style="vertical-align:inherit"><font style="vertical-align:inherit"> | </font></font><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:14px;line-height:21px" href=""><font style="vertical-align:inherit"><font style="vertical-align:inherit">hủy đăng ký</font></font></a></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table></td>
       </tr>
     </table>
    </div>
   </body>
  </html>`}
  const account  = JSON.parse(sessionStorage.getItem('user'));
  const [loading,setLoading]=useState(false)
  const [payments, setPayments] = useState(false);
  const[schedule,setSchedule] =useState({});
  const[tour,setTour] =useState({});
  const [invoice,setInvoice]=useState({});
  const [image,setImgage]=useState();
  const [fullName,setFullName]= useState(account.nameAccount);
  const [address,setAddress]= useState(account.address);
  const [email,setEmail]= useState(account.email);
  const [phone,setPhone]= useState(account.phoneNumber);
  const [note,setNote]= useState("");
  const [typePayment,setTypePayment]= useState("paypal");
  
  var url_string = window.location;
  var url = new URL(url_string);
  var sl = url.searchParams.get("sl");
  const navigate = useNavigate();
  var idSchedule=url.searchParams.get("idSchedule");
  
  const taiquay = () => {
    console.log("tại quầy");
    setPayments(false);
  };
  
  const atm = () => {
    console.log("ATM");
    setPayments(true);
  };
  const handleTypeChange=(e)=>{
    setTypePayment(e.target.value)
    console.log(e.target.value)
  }

  function sendNotification (mess,type) {
     addDoc(collection(db, "notification"), {
      text: mess,
      account:account.nameAccount,
      type:type,
      status:0,
      dayCreate:new Date().toDateString(),
      createdAt: serverTimestamp()
    });
  };

  async function getScheduleById() {
    try{        
        const schedule= await axios.get(BaseUrl+'schedule/getschedule/'+idSchedule); 
        const tour= await axios.get(BaseUrl+'schedule/gettour/'+idSchedule); 
        setSchedule(schedule?.data);
        setTour(tour?.data);  
        setImgage(tour?.data.image[0].url)
        
    }catch(err){alert('Khong co ket noi');}        
  }
  const handlePayPal = async(e)=>{
    setLoading(true)
    let amount=((tour.price)-tour.sale*tour.price)*sl;
    let regObj = {fullName,email,phone,address,note,people:sl,amount,idSchedule,idAccount:account.id,status:0}; 
    let mail={toEmail:email,subject:"Booking thành công",body:b(fullName,tour.title,tour.price-(tour.price*tour.sale),sl,tour.inteval,schedule.dayStart,amount,schedule.tourGuide,schedule.phone,"...Paypal")}
    try{
      const sendmail=await axios.post(BaseUrl+'mail/html',mail)
      const res= await axios.post(BaseUrl+'invoice', regObj);
      console.log(res?.data)
      sendNotification("Booking & Thanh toan thanh cong","invoice"); 
      const pay= await axios.post(BaseUrl+'pay/paypal', res?.data.invoice);
      setLoading(false)
      window.location=pay?.data;
    }catch(err){alert('Email không tồn tại');setLoading(false)}
  }
  const handleVnpay =async(e)=>{
        const check =axios.get("https://emailvalidation.abstractapi.com/v1/?api_key=183dde3bc7654e83bcbda3ca0942296a&email="+email);
        console.log(JSON.parse(check))
        if(check?.data.deliverability==="DELIVERABLE"){
        setLoading(true)
        let amount=((tour.price)-tour.sale*tour.price)*sl;
        let regObj = {fullName,email,phone,address,note,people:sl,amount,idSchedule,idAccount:account.id,status:0}; 
        let mail={toEmail:email,subject:"Booking thành công",body:b(fullName,tour.title,tour.price-(tour.price*tour.sale),sl,tour.inteval,schedule.dayStart,amount,schedule.tourGuide,schedule.phone,"...VNPAY")}
        try{
          const res= await axios.post(BaseUrl+'invoice', regObj);
          console.log(res?.data)
          sendNotification("Booking & Thanh toan thanh cong","invoice"); 
          const sendmail=await axios.post(BaseUrl+'mail/html',mail)
          window.location="http://travel-app.infinityfreeapp.com/VNPAY_TT/thanhtoanvnpay.php?id="+res?.data.invoice.id+"&amount="+res?.data.invoice.amount;
          setLoading(false)
        }catch(err){alert('Khong co ket noi');setLoading(false)}
      }
      else toast.warning("Email không tồn tại")

  }
  
  const HandleBookTour=async(e)=>{  
    if(!email){}else
    {
   // e.preventDefault();
    setLoading(true)
    let amount=((tour.price)-tour.sale*tour.price)*sl;
    let regObj = {fullName,email,phone,address,note,people:sl,amount,idSchedule,idAccount:account.id,status:0};
    let mail={toEmail:email,subject:"Booking thành công",body:b(fullName,tour.title,tour.price-(tour.price*tour.sale),sl,tour.inteval,schedule.dayStart,amount,schedule.tourGuide,schedule.phone,"Chưa thanh toán - Chờ xác nhận")}
    try{
      const res= await axios.post(BaseUrl+'invoice', regObj);
      sendNotification("Booking thanh cong","invoice");
      const sendmail=await axios.post(BaseUrl+'mail/html',mail)
      setLoading(false)
      toast.success("Đặt tour thành công")
      navigate("/home")
    }catch(err){alert('Vui lòng kiểm tra email');setLoading(false)}
  }
  }
  
  useEffect(() => {
    getScheduleById();   
  }, []);
  const book=()=>{
    if(payments){
      if(typePayment==="paypal")
        handlePayPal()
      else handleVnpay();
    }else {HandleBookTour()}

  }

  return (
    <Form  onFinish={book}>
    <Spin spinning={loading} >

        <div className="shadow-md p-3 bg-white my-4 rounded-md mt-28">
        <div className="flex justify-center items-center font-[700] text-3xl text-maintext uppercase">
          Booking tour
        </div>
        
        <div>
          <h2 className=" flex md:inline-block mt-4 justify-center items-center font-[500] text-2xl text-maintext uppercase px-2 border-b-2 border-maintext mb-6">
            Thông tin liên lạc
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            
            <div className="w-full"   >
              <div className="flex flex-col lg:flex-row items-center m-3">
                <div className="relative z-0 w-full mb-6 group mr-8">
                  <Input
                    value={fullName}
                    onChange={(e)=>{setFullName(e.target.value)}}
                    type="text"
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Họ và tên
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group mr-8">
                  <Input
                  value={address}
                  onChange={(e)=>{setAddress(e.target.value)}}
                    type="text"
                    name="floating_address"
                    id="floating_address"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required={true}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Địa chỉ
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center m-3">
                <div className="relative z-0 w-full mb-6 group mr-8">
                  <Input
                    type="email"
                    name="floating_email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    autoFocus
                    id="floating_email"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group mr-8">
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Số điện thoại
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group pr-8">
                <TextArea
                  type="text"
                  value={note}
                  onChange={(e)=>{setNote(e.target.value)}}
                  name="floating_other"
                  id="floating_other"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Yêu cầu khác
                </label>
              </div>

              <div className="">
                <h2 className=" flex md:inline-block mt-4 justify-center items-center font-[500] text-xl text-maintext uppercase border-b-2 border-maintext mb-6">
                  Hình thức thanh toán
                </h2>
                <div className="mx-2">
                  <div className=" flex flex-col md:flex-row justify-start">
                    <label className="flex items-center mr-6">
                      <input
                        type="radio"
                        name="pttt"
                        onChange={taiquay}
                        className="m-2"
                      />
                      Thanh toán tại quầy
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pttt"
                        onChange={atm}
                        className="m-2"
                      />
                      Chuyển khoản
                    </label>
                  </div>

                <div>
                  {payments?( <div className="w-full">
                    <div className="flex items-center my-4 ">

                    <Radio.Group value={typePayment} onChange={handleTypeChange}>
                      <Radio.Button value="paypal">Paypal</Radio.Button>
                      <Radio.Button value="vnpay">VnPay</Radio.Button>
       
                    </Radio.Group>

                      <div className="p-2 rounded-md mx-4 bg-slate-100 shadow-md cursor-pointer">
                        <img src='https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg' className="w-24 h-12 hover:scale-105"/>
                      </div>
                      <div className="p-2 rounded-md mx-4 bg-slate-100 shadow-md cursor-pointer">
                        <img src='https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/07/1581089357407-1580819448160-vnpay.png' className="w-24 h-12 hover:scale-105"/>
                      </div>

                    </div>
                  <Button type='primary' htmlType="submit"  >Xác nhận tour & Thanh toán</Button>
                  </div> 
                  ):(<div className="flex flex-col text-maintext m-3">
                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>
                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>

                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>
                    <Button type='primary' htmlType="submit"  >Xác nhận và đặt tour</Button>
                  </div>)}
                </div>

                </div>
              </div>
            </div>
            

            <div className="mt-16 md:mt-2">
              <div className="w-full md:w-80 lg:w-96">
                <img
                  src={image}
                  className="rounded-t-md"
                />
              </div>
              <div className="text-white bg-mainbg w-full md:w-80 lg:w-96 p-2">
              <Divider style={{}}>{tour.title}</Divider>
                {/* <span className="font-[500]">
                  {tour.title}| {tour.subTitle}
                </span><br/> */}
                Mã tour:
                <span className="uppercase font-[600] mr-2 text-[#f8d000]">
                  {tour.id}
                </span>
                
                <div className="flex items-center">
                  <MdLocationOn size={20} />{" "}
                  <span className="ml-2">{tour.address}</span>
                </div>
                <div className="flex items-center">
                  <AiFillSchedule size={20} />
                  <span className="ml-2">Giá tour / 1 người: {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tour.price - tour.price * tour.sale)}{" "}</span>
                </div>
                <div className="flex items-center">
                  <BsFillPersonFill size={20} />
                  <span className="ml-2">{sl} người</span>
                </div>
                <div className="flex items-center">
                  <BsClockFill size={20} />
                  <span className="ml-2">{tour.inteval}</span>
                </div>
                <div className="flex items-center">
                <BsFillCarFrontFill size={20} /> <span className="ml-2">{tour.vehicle}</span>
                </div>
                <Divider>Chi tiết</Divider>
                <div className="flex items-center">
                  <AiFillSchedule size={20} />
                  <span className="ml-2">{schedule.dayStart}</span>
                </div>
                <div className="flex items-center">
                <BsFillCarFrontFill size={20} />
                  <span className="ml-2">{schedule.addressStart}</span>
                </div>
                <div className="flex items-center">
                  <AiFillSchedule size={20} />
                  <span className="ml-2">Hướng dẫn viên: {schedule.tourGuide}</span>
                </div>
                <div className="flex items-center">
                <PhoneOutlined style={{fontSize:20}} />
                  <span className="ml-2">{schedule.phone}</span>
                </div>
              </div>
              <div className="flex items-center justify-around bg-[#f8d000] rounded-b-md text-maintext font-[500] w-full md:w-80 lg:w-96 text-xl">
                Tổng <span>{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format((tour.price - tour.price * tour.sale)*sl)}{" "}</span>
              </div>
              <div className="w-full md:w-80 lg:w-96 bg-mainbg p-2 text-justify my-3 font-[500] text-[#f8d000] rounded-md">
                <p>
                  Sau khi hoàn tất hóa đơn, nhân viên của Green House sẽ liên hệ
                  với quý khách để xác nhận tình trạng tour
                </p>
                <p>Mọi thắc mắc xin liên hệ hotline: 1900 111 222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
    </Form>
  )
}

export default BookingPage