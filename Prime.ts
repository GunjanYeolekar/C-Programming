
class Prime
{

    No : number;

    constructor(Data : number)
    {
        this.No = Data;
    }

    PrimeNumber() : void
    {
        var Cnt : number = 0;
        var iCnt : number = 0;

        for(Cnt = 2; Cnt <= this.No/2; Cnt++)
        {
            if(this.No % Cnt == 0)
            {
               iCnt++;
            }
        }

        if(iCnt > 0)
        {
            console.log("It is not a prime number");
        }
        else
        {
            console.log("It is a prime number");
        }
    }
}

var Obj1 = new Prime(10);
var Obj2 = new Prime(13);

Obj1.PrimeNumber();
Obj2.PrimeNumber();
