//var shortid = require('short-id');
var Transfer= require('../models/transfer.model')
module.exports.transfer= async (req,res,next)=>{
    // res.render('transfer/create',{  
    //     csrfToken: req.csrfToken() // tạo ra 1 tooken,đúng tooken mới chuyển tiền được
    // });
    var user= await Transfer.find({userId:req.signedCookies.userId})
    res.render('users/transfer',{
        users:user
    })
    //res.send(req.csrfToken());
}
module.exports.postTransfer= async(req,res,next)=>{
    var data={
        amount:parseInt(req.body.amount),
        account:req.body.account,
        userId:req.signedCookies.userId  // người dang chuyển khoản
    }// tạo Id ngẫu nhiên lưu trên db
    Transfer.create(data);
    res.redirect('/index/transfer');
}
module.exports.delete = async(req,res) =>{
    var id=req.params.id;
    console.log(id);
    await Transfer.remove({_id:id});
    res.redirect('/index/transfer');
    // res.render('users/transfer')
}
