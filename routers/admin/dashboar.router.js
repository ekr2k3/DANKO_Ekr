var express = require('express');
var router = express.Router();


var controller_dash = require("../../controllers/admin/dashboarh.controller")
router.get('/', controller_dash.dashboarh);
/*Error: Route.get() requires a callback function but got a [object Object]
    at Route.<computed> [as get] (C:\Users\HOANG NAM\OneDrive\Desktop\project web\bai14\node_modules\express\lib\router\route.js:216:15)      
    at proto.<computed> [as get] (C:\Users\HOANG NAM\OneDrive\Desktop\project web\bai14\node_modules\express\lib\router\index.js:521:19)      
    at Object.<anonymous> (C:\Users\HOANG NAM\OneDrive\Desktop\project web\bai14\routers\admin\dashboar.router.js:6:8)
    at Module._compile (node:internal/modules/cjs/loader:1233:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Module.require (node:internal/modules/cjs/loader:1115:19)
    at require (node:internal/modules/helpers:130:18)
    at Object.<anonymous> (C:\Users\HOANG NAM\OneDrive\Desktop\project web\bai14\routers\admin\index.router.js:2:10)
    
    lỗi vì trong get tham số 2 ta để là controller_dash nhưng đúng phải là
    controller_dash.dashboarh
    */

module.exports = router;