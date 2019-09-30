const  express = require('express');
const port = 3000;
const ValidMethods = ['add','substract', 'mutliply', 'divide']

const app = express();
app.listen(port);
app.get('/',(req, res)  =>{
   // the method is come from query params
    const method = req.query.method;
    //check the array method
    const isValidMethod = ValidMethod .includes(req.query.method);
    
    if (!isValidMethod) {
        return res.send(`type a valid method[${validMethods.toString()}]`
        );
        }
        
    
        const x =parseInt(req.query.x);
        const y =parseInt(req.query.y);  
    
        if(isNaN(x) || isNan(y)){
          return res.send('X and Y must be a number');
    
        }
         if (method ==='add'){
    
          return res.send(`${x} + ${y} = ${x + y}`);
    
    
         }
         res.send(isValidMethod); 
    
    
    
    //}
    app.on('listen', () => console.log('listening on port 3000'));
    res.send(method);
} );
