import express from 'express';

const router = express.Router();

/* GET /fizzbuzz listing. */
router.get('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const fromStr = req.query.from as any;
    const toStr = req.query.to as any;

    // if either argument is missing
    if (!fromStr || !toStr) {
        res.json('Invalid request, specify `from` and `to` query arguments');
        return;
    }

    // try parsing the query arguments to integers, this will result in NaN if they aren't numeric
    let from = parseInt(fromStr,10);
    let to = parseInt(toStr,10);

    // if either arguments isn't numeric
    if (!from || !to) {
        res.json('Invalid request, `from` and `to` query arguments must be integers');
        return;
    }

    if(from < 0 || to < 0){
        res.json('Invalid request, `from` and `to` query arguments must be positive');
        return;
    }

    const result = []; // stores integer, fizz, buzz or fizzbuzz
    let str = ""; // buffer string to store fizzbuzz
    let three = 0; // variables to count how many iterations passed
    let seven = 0;

    for (let i = 0; i <= to; i++) { // loop must start from 0 for this to work
        if (three === 3) { // runs ever 3rd iteration
            str += "Fizz"; // put Fizz in buffer
            three = 0; // return the 3rd iteration counter to zero
        }
        if (seven === 7) { // runs every 7th iteration
            str += "Buzz";
            seven = 0;
        }

        if (!str.length) { // if iteration isn't of 3rd or 7th (or 21st) then put the iteration counter in the result array
            result.push(i);
        } else { // if it is of 3rd or 7th (or 21st) put the buffers content in the result array
            result.push(str);
            str = ""; // clear the buffer
        }

        three++;
        seven++;
    }

    // this is to fix the result array because we had to start from zero
    while (from) {
        result.shift();
        from--;
    }

    // return result array as json object
    res.json({
        result
    });
});

export default router;