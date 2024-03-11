import React, {useEffect, useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./styles/Navbar.css";
import "./styles/Modal.css";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/all";
import emailjs from "@emailjs/browser";



export default function Navbar () {

    const form = useRef();

    gsap.registerPlugin(ScrollToPlugin)

    const [modalDisplay, setModalDisplay] = useState(false);

    

    function handleOuterClick() {
       setModalDisplay(false)
    }

    let {pathname} = useLocation(); 

    let navMobModal = document.getElementById("check")

  function navigateToCurrent () {
    gsap.to(window,{
        duration:0.3,
        scrollTo:{y:0},
        ease: "power2"
      });
      if (navMobModal) {navMobModal.checked=false}
  }

    function handleOpenModal() {
        if (navMobModal) {navMobModal.checked=false}
        setModalDisplay(true);
    }

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_z55chzf', 'template_k278ybq', form.current, {
        publicKey: 'HptqdJezDz5cY2lSE',
      }).then(() => {console.log('SUCCESS!')},(error) => {console.log('FAILED...', error.text)});

        setModalDisplay(false);
        console.log("Form submitted, customer name: "+formData.user_name+", customer phone number: "+formData.user_phoneNumber+ ", customer task is: "+ formData.message);
        setFormData({user_name:"",user_phoneNumber:"",message:""})
    }

    const [formData,setFormData] = useState({user_name:"",user_name_valid:false,user_phoneNumber:"",user_phoneNumber_valid:false,message:"",message_valid:false})

    function handleChange(e) {
        setFormData((prevValue)=>{
            return ({...prevValue,[e.target.name]:e.target.value})
        })

        
        
    }

    // name validation
    useEffect(()=>{
        if (formData.user_name.length!==0) {
            setFormData((prevValue)=>{
                return({...prevValue,user_name_valid: true})
            })
        } else {
            setFormData((prevValue)=>{
                return({...prevValue,user_name_valid: false})
            })
        }
    },[formData.user_name])

    // phoneNumber validation
    useEffect(()=>{
        if (formData.user_phoneNumber.length!==0&&formData.user_phoneNumber.length!==12) {
            gsap.to( ".user_phoneNumber_input",{
                className:"modal-input invalid_input user_phoneNumber_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,user_phoneNumber_valid: false})
            })
        } else if (formData.user_phoneNumber.length===0) {
            gsap.to( ".user_phoneNumber_input",{
                className:"modal-input user_phoneNumber_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,user_phoneNumber_valid: false})
            })
        } else {
            gsap.to(".user_phoneNumber_input",{
                className:"modal-input user_phoneNumber_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,user_phoneNumber_valid: true})
            })
        }
    },[formData.user_phoneNumber.length])

    // message validation
    useEffect(()=>{
        if(formData.message.length!==0&&formData.message.length<100) {
            gsap.to(".user_message_input",{
                className: "modal-input invalid_input user_message_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,message_valid: false})
            })
        } else if (formData.message.length===0) {
            gsap.to(".user_message_input",{
                className: "modal-input user_message_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,message_valid: false})
            })
        } else {
            gsap.to(".user_message_input",{
                className: "modal-input user_message_input"
            })
            setFormData((prevValue)=>{
                return({...prevValue,message_valid: true})
            })
        }
    },[formData.message.length])

    // whole validation

    useEffect(()=>{
        if (formData.user_name_valid&&formData.user_phoneNumber_valid&&formData.message_valid) {
            gsap.to(".modal-button",{
                className: "modal-button",
                duration: 0.5
            })
            gsap.to(".form_valid_requirement",{
                opacity: 0,
                duration: 0.5
            })
        } else {
            gsap.to(".modal-button",{
                className: "modal-button disabled_modal_button",
                duration: 0.5
            })
            gsap.to(".form_valid_requirement",{
                opacity: 1,
                duration: 0.5
            })
        }
    },[formData.user_name_valid,formData.user_phoneNumber_valid,formData.message_valid])




    function addPlusSeven() {
        if (formData.user_phoneNumber==="") {
            setFormData((prevValue)=>{
                return (
                    {...prevValue, user_phoneNumber:"+7"}
                )
            })
        }   
    }

    function removePlusSeven() {
        if (formData.user_phoneNumber==="+7"||formData.user_phoneNumber==="+") {
            setFormData((prevValue)=>{
                return (
                    {...prevValue, user_phoneNumber:""}
                )
            })
        } else {
            setFormData((prevValue)=>{
                return (
                    {...prevValue}
                )
            })
        }
    }


    return (
        <nav className='navBlock'>
            <input type='checkbox' id='check' ></input>
            <label for="check" className="checkbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <label class="logo"><Link to={"/"} onClick={pathname==="/"&&navigateToCurrent}>INREAL — ANOTHER REALITY</Link></label>
            <ul>
                <li>
                    <Link to={"/"} onClick={pathname==="/"&&navigateToCurrent}>На главную</Link>
                </li>
                <li>
                    <Link to={"/products"} onClick={()=>{handleOuterClick()}}>Наши продукты</Link>
                </li>
                <li>
                    <Link to={"/about"} onClick={()=>{handleOuterClick()}}>О нас</Link>
                </li>
                <li>
                    <Link onClick={handleOpenModal}>Обратная связь</Link>
                </li>
            </ul>
            <div className='modal' id="modalOut" onClick={handleOuterClick} style={modalDisplay?{display:"block"}:{display: "none"}}>
                <div className='modal-content' onClick={(e)=>{e.stopPropagation()}}>

                    <form ref={form} onSubmit={(e)=>{handleSubmit(e)}}>
                        <label for="user_name">Ваше имя</label>
                        <input name="user_name" type="text" placeholder='Иван' className="modal-input user_name_input" value={formData.user_name} onChange={handleChange}></input>
                        <br></br>
                        <label for="user_phoneNumber">Номер телефона</label>
                        <input name="user_phoneNumber" type="text" placeholder='+71234567890' className="modal-input user_phoneNumber_input" value={formData.user_phoneNumber} onFocus={addPlusSeven} onBlur={removePlusSeven} onChange={handleChange}></input>
                        <br></br>
                        <label for="message">В чем состоит ваша задача?</label>
                        <textarea name="message" placeholder='Минимум 100 символов' className='modal-input invalid_input user_message_input ' cols="22" rows="6" value={formData.message} onChange={handleChange}></textarea>
                        <br></br>
                        <h3 className="form_valid_requirement">Для отправки заполните все поля</h3>
                        <button type="submit" value="Send" className='modal-button disabled_modal_button'>Отправить</button>
                    </form>

                </div>
            </div>
        </nav>
    )
}