import { Iworker } from "./iworker";
import { Worker } from "./worker";

export class Manager implements Iworker {
    private FirstName: string;
    private LastName: string;
    private Degree: string;

    private workers: Iworker[] = [];
  
    constructor(firstName: string, lastName: string, degree: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Degree = degree;
    }

    public addWorker(worker: Iworker): void {
        if(this.instance_already_in_hierarchy(worker)) {
            this.workers.push(worker)
        }else{
            console.log('already in the list')
        }
    }

    public displayInfomationWorker(): void {
        console.log("Subordinates manager: " + this.full_info())
        this.workers.forEach(worker => {
            worker.displayInfomationWorker()
        })
    }

    protected instance_already_in_hierarchy(add_worker: Iworker): boolean{
        return !this.workers.some(worker => this.compare_instance_value(worker,add_worker));
    }

    private compare_instance_value(worker: Iworker, add_worker: Iworker): boolean {
        return worker.full_info() === add_worker.full_info();
    }

    public full_info(): string {
        return this.FirstName + " " + this.LastName + " " + this.Degree;
    }
}

    const manager1 = new Manager("Andrej","Wardalo","head of the technology department");
    manager1.addWorker(new Worker("Anna", "Karbowska","embedded systems engineer"));
    manager1.addWorker(new Worker("Anna", "Karbowska","embedded systems engineer"));
    manager1.addWorker(new Worker("Mark", "Zelinski", "IOS application developer"));
    manager1.addWorker(new Worker("Slawomir", "Kowalski", "Web application developer"));
    const manager2 = new Manager("Jacek", "Nowak","team manager");
    manager1.addWorker(manager2);
    manager2.addWorker(new Worker("Waldemar", "Musal", "Evaluator"));
    manager2.addWorker(new Worker("Jan", "Pufund", "Graphic designer"));
 
    manager1.displayInfomationWorker();