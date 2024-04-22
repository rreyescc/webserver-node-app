import { Request, Response } from "express";
import { prisma } from '../../data/postgresql'
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos/todos'

let todos = [
  { id: 1, todo: 'Buy milk', createAt: new Date(), isDeleted: false },
  { id: 2, todo: 'Buy meat', createAt: new Date(), isDeleted: true },
  { id: 3, todo: 'Buy bread', createAt: new Date(), isDeleted: false }
];

export class TodoController {

  constructor(){}

  getTodos = async ( req: Request, res: Response ) => {
    //res.json(todos.filter( todo => !todo.isDeleted ));
    const todos = await prisma.todo.findMany()
    res.status(200).json(todos);
  }

  getTodoById = async (req: Request, res: Response ) => {
    const todoId = +req.params.id;
    if(isNaN(todoId)) return res.status(400).json({ error: `El ID no es numerico` });
    //const todo = todos.find( todo => todo.id === todoId && !todo.isDeleted );
    const todo = await prisma.todo.findFirst({ where: { id: todoId } });
    todo ? res.json(todo) : res.status(404).json({ error: `No se encontro el todo con id ${todoId}` })
  }
  
  createTodo = async ( req: Request, res: Response ) => {
    const [ error, createTodoDto ] = CreateTodoDto.create(req.body);

    if(error) return res.status(400).json({ error });

    //const props = ['text'];
    //const body = req.body;
    //const { todo } = body;

    //const invalidProp = Object.getOwnPropertyNames(body).find( prop => !props.includes(prop));
    //if(invalidProp) return res.status(400).json({ error: `${invalidProp} es una propiedad invalida`});

    //todos.push(body);
    //res.json(body)

    const newTodo = await prisma.todo.create({ 
      data: createTodoDto!
    })

    res.status(200).json(newTodo);

  }

  updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [ error, updateTodoDto ] = UpdateTodoDto.create({ ...req.body, id })

    if(error) return res.status(400).json({ error });
    //const id = +req.params.id;

    //if(isNaN(id)) return res.status(400).json({ error: `invalid id` });

    //const todo = todos.find( todo => todo.id === id && !todo.isDeleted);
    const todo = await prisma.todo.findFirst({ where: { id } })

    if(!todo) return res.status(404).json({ error: `todo not found` });

    //const { text } = req.body;
    //todo.todo = newTodo;

    const newTodo = await prisma.todo.update({
      data: updateTodoDto!.values,
      where: {
        id
      }
    })
    // const newTodo = await prisma.todo.update({ 
    //   data: {
    //     text
    //   }, 
    //   where: {
    //     id
    //   }
    // })

    res.status(200).json(newTodo);
  }

  deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if(isNaN(id)) return res.status(400).json({ error: `invalid id` });

    const todo = await prisma.todo.findFirst({ where: { id } })
    //const todo = todos.find( todo => todo.id === id && !todo.isDeleted);

    if(!todo) return res.status(404).json({ error: `todo not found` });

    const deleteTodo = await prisma.todo.delete({ where: { id } });

    //todo.isDeleted = true;

    res.status(200).json(deleteTodo);

  }

}