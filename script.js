let board = document.querySelector('#board');
let clearBtn = document.querySelector('#clear');
let sizeNInput = document.getElementById('sizeN');
let colorPicker = document.querySelector('#colorPicker');


function paintBlock(){
    colorType = document.querySelector('[type="radio"][name="colorType"]:checked').value;
    if (colorType === 'unicolor'){
        return(colorPicker.value)
    }else{
        return('#'+Math.floor(Math.random()*16777215).toString(16))
    }
}

function createBoard(){
    sizeN  =  parseInt(sizeNInput.value);
    blockSize = board.clientWidth / sizeN;

    for(let i=0; i<Math.pow(sizeN,2); i++){
        d = document.createElement('div');
        d.style.backgroundColor = 'White';
        d.style.border = '1px solid #eeeeee';
        d.style.padding = 0;
        d.style.margin = 0;
        d.style.width = `${blockSize}px`;
        d.style.height = `${blockSize}px`;
        d.addEventListener('mouseenter',(event)=> event.target.style.backgroundColor = paintBlock())
        board.appendChild(d);
    }
}

function clearBoard(){
    board.innerHTML = '';
    createBoard()
}

createBoard();
sizeNInput.addEventListener('change',() => clearBoard())
clearBtn.addEventListener('click',() => clearBoard())
