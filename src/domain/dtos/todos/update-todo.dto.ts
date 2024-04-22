export class UpdateTodoDto {

  private constructor( 
    public readonly text: string,
    public readonly createAt: Date
  ) {}

  get values() {
    const values: {[key:string]: any} = {};

    if(this.text) values.text = this.text;
    if(this.createAt) values.createAt = this.createAt;

    return values;
  }

  static create = (props: {[key: string]: any}): [string?, UpdateTodoDto?] => {
    const { id, text, createAt } = props;

    if(!id || isNaN(id)) return ['Id is invalid', undefined]

    if(text && text.trim() === "") return ['Text is required', undefined];

    if(createAt && new Date(createAt).toString() === 'Invalid Date' ) return ['Invalid Date', undefined];

    return [undefined, new UpdateTodoDto(text, createAt && new Date(createAt))];
  } 

}