export class CounterService{
    activeCount: number = 0;
    inactiveCount: number = 0;

    countToActive(){
        this.activeCount++;
        console.log("Number of Inactive to Active switches: " + this.activeCount);
    }

    countToInactive(){
        this.inactiveCount++;
        console.log("Number of Active to Inactive switches: " + this.inactiveCount);
    }
}