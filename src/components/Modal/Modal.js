import './Modal.css'
import React from 'react';

export const Modal = () =>{
    return(
        <div>
    <div id="myModal" class="modal_fade" tabindex="-1">
        <div class="modal-dialog_modal-sm" id="ab">
            <div class="modal-content">
                <div class="container">
                    <div class="row">
                        <h2 class="modal-header-h2">Введите данные:</h2>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="test@email.com" name="email" class="placeholder"/>
                        <input type="text" placeholder="ваш пароль" name="password" class="placeholder"/>
                        <button class="btn_btn-danger" type="submit">Вход/Регистрация</button>
                    </div>
                    <div class="row">
                        <button class="btn_btn-danger" id="clos" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}