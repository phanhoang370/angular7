import { Component, OnInit } from '@angular/core';



declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  todoData: any = [
    {id: 1, name: 'Todo 1', completed: true},
    {id: 2, name: 'Todo 2', completed: false},
    {id: 3, name: 'Todo 3', completed: false},
    {id: 4, name: 'Todo 4', completed: true},
    {id: 5, name: 'Todo 5', completed: false}
  ];
  todos:any;
  filter: string = 'SHOW_ALL';
  public name:string;
  public nameEdit:string;
  dataAdd:Object;
  dataEdit:Object;
  dataConvertEdit:Object;
  constructor() { }

  ngOnInit() {
    this.todos = this.todoData;
  }
  addTodo () {
    console.log(this.name, 'tday la name');
    console.log(this.todoData.length);
    console.log(this.todoData);
    // alert("Username bạn vừa nhập là : " + );
    if(this.name) {
      this.dataAdd = {id:(this.todoData.length + 1), name:this.name, completed:false};
      this.todoData.push(this.dataAdd)
    }
    console.log(this.todoData);
    
  }

  delete (todo) {
      this.todoData.pop(todo);
  }

  showModal(data){
    document.getElementById("myModal").classList.add("show");
    this.nameEdit = data.name ;
    this.dataEdit = data ;
    console.log(this.dataEdit)
    console.log(this.todoData)

  }
  sendModal(nameEdit, dataEdit) {
    //do something here
    console.log(this.nameEdit)
    console.log(nameEdit)
    console.log(this.dataEdit)
    console.log(dataEdit)
    console.log(this.todoData)
    if(this.nameEdit) {
      this.dataEdit = {id:(dataEdit.id), name:dataEdit.name, completed:dataEdit.completed}
      console.log(this.dataEdit)
      // this.dataConvertEdit = {id:(this.dataEdit.length), name:this.nameEdit, completed:false};
      this.dataConvertEdit = this.todoData.filter(data =>data.id == dataEdit.id);
      console.log(this.dataConvertEdit)
      this.todoData = this.todoData.pop(this.dataConvertEdit[0]);
console.log(this.todoData)
      // if()
      // this.todoData.push(dataEdit)
    }
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

  changeFilter(filter) {
    this.filter = filter;
    switch (filter) {
      case 'SHOW_ALL':
      this.todos = this.todoData;
        break;
      case 'IN_PROGRESS':
        this.todos = this.todoData.filter(t => t.completed)
        console.log(this.todos)
        break;
      case 'DONE':
        this.todos = this.todoData.filter(t => !t.completed)
        console.log(this.todos)
        break;
    }
  }


}
