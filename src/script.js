///////COUNTER COMPONENT
const counterEvent = () =>{
    const textAreaEl = document.querySelector('textarea.form__textarea');

    const maxLength = 150;
    const text = textAreaEl.value;
    let textLength = textAreaEl.value.length;

    document.querySelector(".counter").textContent = maxLength - textLength;
} 

export {counterEvent};

