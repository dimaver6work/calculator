let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0','1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','X', '/']

const out = document.querySelector('p')

function clearAll (){ 
    a = ''
    b= ''
    sign = ''
    finish = false
    out.textContent = 0
}
document.querySelector('.ac').onclick = clearAll

let button = document.querySelector('#buttons')

button.addEventListener('click', function(event){ 
    if (!event.target.classList.contains('btn')) return
    if ( event.target.classList.contains('ac')) return
    out.textContent=''
    const key = event.target.textContent
    if (digit.includes(key)){
        
        if (b ==='' && sign===''){
        a+= key
        out.textContent = a 
        }
        else if (a!=='' && b!== ''&& finish){
            b= key
            finish = false
            out.textContent =b

        }
        else { 
            b+=key
            out.textContent = b
        }
        return

    }

    if (action.includes(key)){
        sign=key
        out.textContent = sign
return

    }


    if (key ==='='){ 
        switch(sign){
            case '+':
                a=(+a)+(+b);
                break
             case '-':
                a=(+a)-(+b);
                break
            case 'X':
                a=(+a)*(+b);
                break
             case '/':
                a=(+a)/(+b);
                break

        }
        finish = true
        out.textContent= a 
        
    }

}
)
