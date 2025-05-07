import './style.css'
import {counterEvent} from './script.js';

document.querySelector('#app').innerHTML = `
  <footer class="footer">
            <small class="copyright">
                <p class="copyright__text">© Copyright by <a href="https://bytegrad.com" class="copyright__link"
                        target="_blank">ByteGrad.com</a> <i class="fa-solid fa-square-up-right copyright__icon"></i>
                    Intended for learning or your portfolio.</p>
                <p class="copyright__text"><span class="u-bold u-italic">Not allowed</span> to use as your own teaching
                    material.</p>
            </small>
        </footer>

        <main class="app">
            <header class="header">
                
                <h1 class="first-heading">Give Feedback. Publicly.</h1>
                <form action="#" class="form">
                    <textarea class="form__textarea" id="textarea" spellcheck="false" maxlength="150" type="text"
                        placeholder="Enter feedback"></textarea>
                    <label for="textarea" class="form__label">Enter your feedback here, remember to <span
                            class="u-medium">#hashtag</span> the company <i
                            class="fa-solid fa-pen form__icon"></i></label>
                    <div class="form__bottom">
                        <p class="counter u-italic">150</p>
                        <button class="submit-btn">
                            <span class="submit-btn__text">Submit</span>
                        </button>
                    </div>
                </form>
            </header>

            <ol class="feedbacks">
                <!-- <div class="spinner"></div> -->
            </ol>
        </main>

        <ul class="hashtags">
            <li class="hashtags__item">
                <button class="hashtag">#ByteGrad</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Nike</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Starbucks</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Netflix</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Amazon</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Microsoft</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#Adidas</button>
            </li>
            <li class="hashtags__item">
                <button class="hashtag">#McDonald's</button>
            </li>
        </ul>
`


document.querySelector('#textarea').addEventListener("input", counterEvent);



//FORM COMPONENT
const formEl = document.querySelector('.form');

const checkForm = (e) => {
    e.preventDefault();
    console.log('form submitted');
}

formEl.addEventListener('submit', checkForm);
