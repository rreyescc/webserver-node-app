import { Request, Response } from "express";

let todos = [
  { id: 1, todo: 'Buy milk', createAt: new Date(), isDeleted: false },
  { id: 2, todo: 'Buy meat', createAt: new Date(), isDeleted: true },
  { id: 3, todo: 'Buy bread', createAt: new Date(), isDeleted: false }
];

export class TodoController {

  constructor(){}

  getTodos = ( req: Request, res: Response ) => {
    res.json(todos.filter( todo => !todo.isDeleted ));
  }

  getTodoById = (req: Request, res: Response ) => { 
    const todoId = +req.params.id;
    if(isNaN(todoId)) return res.status(400).json({ error: `El ID no es numerico` });
    const todo = todos.find( todo => todo.id === todoId && !todo.isDeleted );
    todo ? res.json(todo) : res.status(404).json({ error: `No se encontro el todo con id ${todoId}` })
  }
  
  createTodo = ( req: Request, res: Response ) => {
    const props = ['todo'];
    const body = req.body;
    const { todo } = body;

    const invalidProp = Object.getOwnPropertyNames(body).find( prop => !props.includes(prop));
    if(invalidProp) return res.status(400).json({ error: `${invalidProp} es una propiedad invalida`});

    todos.push(body);
    res.json(body)
  }

  updateTodo = (req: Request, res: Response) => {
    const id = +req.params.id;

    if(isNaN(id)) return res.status(400).json({ error: `invalid id` });

    const todo = todos.find( todo => todo.id === id && !todo.isDeleted);

    if(!todo) return res.status(404).json({ error: `todo not found` });

    const { todo: newTodo } = req.body;
    todo.todo = newTodo;

    res.status(200).json(todo);
  }

  deleteTodo = (req: Request, res: Response) => {
    const id = +req.params.id;

    if(isNaN(id)) return res.status(400).json({ error: `invalid id` });

    const todo = todos.find( todo => todo.id === id && !todo.isDeleted);

    if(!todo) return res.status(404).json({ error: `todo not found` });

    todo.isDeleted = true;

    res.status(200).json(todo);

  }

}