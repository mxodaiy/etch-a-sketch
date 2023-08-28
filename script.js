let board = document.querySelector('#board');
let clearBtn = document.querySelector('#clear');
let sizeNInput = document.getElementById('sizeN');
let colorPicker = document.querySelector('#colorPicker');

let blockBorderSize = 1; // in pixels

function paintBlock(){
    colorType = document.querySelector('[type="radio"][name="colorType"]:checked').value;
    if (colorType === 'unicolor'){
        return(colorPicker.value)
    }else{
        return('#' + Math.floor(Math.random()*16777215).toString(16))
    }
}

function createBoard(){
    sizeN  =  parseInt(sizeNInput.value);
    blockSize = Math.floor(board.clientWidth / sizeN);

    for(let i=0; i<Math.pow(sizeN,2); i++){
        d = document.createElement('div');
        d.style.backgroundColor = 'White';
        d.style.border = '0.5px solid #888888';
        d.style.padding = 0;
        d.style.margin = 0;
        d.style.width = `${blockSize}px`;
        d.style.height = `${blockSize}px`;
        d.style.flex = '0 0 auto';
        d.addEventListener('mouseenter',(event)=> event.target.style.backgroundColor = paintBlock())
        board.appendChild(d);
    }
    board.style.gap = `${(board.clientWidth - blockSize*sizeN)/(sizeN+3)}px`;
}

function clearBoard(){
    board.innerHTML = '';
    createBoard()
}

createBoard();
sizeNInput.addEventListener('change',() => clearBoard())
clearBtn.addEventListener('click',() => clearBoard())
colorPicker.addEventListener('change',() =>{
    document.querySelector('#unicolor').checked = true;
    document.querySelector('#randColor').checked = false;
})
