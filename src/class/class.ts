class Task {
  // Properties
  private id: number;
  private title: string;
  private description: string;
  private dueDate: Date;
  private completed: boolean;

  // Constructor
  constructor(taskInfo: {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
  }) {
    this.id = taskInfo.id;
    this.title = taskInfo.title;
    this.description = taskInfo.description;
    this.dueDate = taskInfo.dueDate;
    this.completed = taskInfo.completed;
  }

  //Method to mark the task as completed
  public complete() {
    this.completed = true;
  }

  //Method to mark task as incomplete
  public incomplete() {
    this.completed = false;
  }
}

// Create instances of the Task class using an object as a parameter
const task1 = new Task({
  id: 1,
  title: "Finish Report",
  description: "Write the quarterly report for the team meeting",
  dueDate: new Date("2120-08-22"),
  completed: false,
});


task1.complete();

console.log(task1);