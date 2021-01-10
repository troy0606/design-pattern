import { Iworker } from "./iworker";

export class Worker implements Iworker {
  private FirstName: string;
  private LastName: string;
  private Degree: string;

  constructor(firstName: string, lastName: string, degree: string) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Degree = degree;
  }

  public displayInfomationWorker(): void {
      console.log(this.full_info())
  }

  public full_info(): string {
      return this.FirstName + " " + this.LastName + " " + this.Degree;
  }
}
