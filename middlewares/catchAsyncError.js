module.exports = func => (req, res, next)=>
        Promise.resolve(func(req, res, next)).catch(next)

    //     module.exports = func => (req, res, next)=>{
    //   return  Promise.resolve(func(req, res, next)).catch(next)
    //     }