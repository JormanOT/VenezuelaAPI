import 'dotenv/config'
export default (req, res , next)=>{
    const USER = process.env.USER;
    const PASS = process.env.PASS;

    if(USER === req.body.User){
        if(PASS === req.body.Pass){
            next()
        } else {
            res.status(401).json({
                message : 'Acceso no Autorizado'
            })
        }
    } else {
        res.status(401).json({
            message : 'Acceso no Autorizado'
        })
    }
}