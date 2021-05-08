module.exports = {
    index: (req, res, next) => {
        res.send("Index");
    },

    result: (req, res, next) => {

        try {

            if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
                res.status(404).json({ "Error": "The operands are not numeric" });

            } else {
                const num1 = parseInt(req.params.num1),
                    num2 = parseInt(req.params.num2),
                    op = req.params.op;
                    
                if (op == "+") {   
                    var result = num1 + num2;

                } else if (op == "-") {
                    var result = num1 - num2;

                } else if (op == "*") {
                    var result = num1 * num2;

                } else if (op == ":") {
                    var result = parseFloat((num1 / num2).toFixed(2));

                } else {
                    res.json({
                        "Error": 'Bad request: The supported operators are: Addition (+) Subtraction (-), Multiplication (*) and Division (:)'
                    })
                }
                res.json({ "resultado ": result});
            } 

        } catch (error) {
            res.json({ "Error": error });
        }

    },

    history: (req, res, next) => { 
        res.send("History");
    }

};



