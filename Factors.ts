
class Factors
{
    No : number;

    constructor(Value : number)
    {
        this.No = Value;
    }

    FindFactors() : void
    {
        var Cnt : number = 0;

        console.log("Factors are : ");

        for(Cnt = 1; Cnt <= this.No / 2; Cnt++)
        {
            if(this.No % Cnt == 0)
            {
                console.log(Cnt);
            }
        }
    }
}

var Obj1 = new Factors(15);
Obj1.FindFactors();

var obj2 = new Factors(20);
obj2.FindFactors();