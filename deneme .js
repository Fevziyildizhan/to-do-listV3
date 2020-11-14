class Add{
    constructor(text){
       this.text = text;
       
    }
}

class UI{
    addToDoList(add){
       const list = document.getElementById('list-item')

      var html = `
          
      <li> ${add.text}</li>
       
       
     
       `
      list.innerHTML +=html 
    }

     listDelete(element){
      if(element.classList.toggle('delete')){
          element.remove()
      }
     }

}



document.getElementById('enter').addEventListener('click',()=>{

  const text =  document.getElementById('userInput').value 

  const add = new Add(text)

  const ui = new UI()

  ui.addToDoList(add)




})

document.getElementById('list-item').addEventListener('click',(e)=>{
const ui = new UI()

ui.listDelete(e.target)

})


