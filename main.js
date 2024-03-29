const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const pressBtn = btn.textContent;

        if(btn.id === 'c'){
            screen.textContent = '0';
            return
        }
        if(btn.id === 'clear'){
            if(screen.textContent.length === 1){
                screen.textContent = '0';
            }else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }
        if(btn.id === 'equal'){
            try{
                screen.textContent = (eval(screen.textContent));
                if(screen.textContent.includes('.') && screen.textContent.length > 8){
                    screen.textContent = (eval(screen.textContent)).toFixed(2)
                }
                areResult = !areResult
            } catch (e){
                screen.textContent = e
            }
            return
        }

        if(screen.textContent === '0' || screen.textContent === 'Math Error'){
            screen.textContent = pressBtn;
            
        } else {
            screen.textContent += pressBtn
        }


    })
})