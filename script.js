let i,j;
let container = document.querySelector('.container');
let color = document.querySelector('#colorpicker');
let slider = document.querySelector('#slider');
let sliderValue = 15;
let output = document.querySelector('.gValue');
let colorValue = '#ffcc66';
let delBtn = document.querySelector('button');
let gridlist; 
let clearBtn = document.querySelector('#clear');

color.addEventListener('input',(e)=>{
  colorValue =e.target.value;
})

function CreateGrid(sliderVal){
for(i=0;i<sliderVal*sliderVal;i++){
  divs = document.createElement('div');
  divs.style.display = 'flex';
  divs.style.height = '30px';
  divs.style.width = '30px';
  divs.style.margin = '0.5px';
  container.appendChild(divs);
 
}
gridlist = document.querySelectorAll('div.container > div');
}

function gridEvent() {
  let isMouseDown = false;
  gridlist.forEach((grid) => {
  grid.addEventListener('mousedown',()=>{
    isMouseDown = true;
   grid.style.backgroundColor = colorValue;
  })
})
  gridlist.forEach((grid) => {
  grid.addEventListener('mouseover',(e)=>{
  if(e.buttons===1&&isMouseDown){
    grid.style.backgroundColor = colorValue;
   }
  
})
  })

}
    




CreateGrid(sliderValue);
slider.addEventListener('change',(e)=>{
   sliderValue = e.target.value;
   output.innerHTML = sliderValue;
   container.style.width = sliderValue * 31 + 'px';
   console.log(sliderValue);
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
    CreateGrid(sliderValue);
    gridEvent();
  })



 gridEvent();
 color.addEventListener('click',()=>{
    gridEvent();
  })

  delBtn.addEventListener('click', () => {
    gridlist.forEach((grid) => {
      grid.addEventListener('mouseover',()=>{
      grid.style.backgroundColor = '#fae7d8';
    })
    })
  });
  

 clearBtn.addEventListener('click',()=>{
  gridlist.forEach((grid)=>{
       grid.style.backgroundColor = '#fae7d8';
 })
})







