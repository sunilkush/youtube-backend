import { asyncHandler } from "../utils/asynchronousHandlers.js";


const registerUser = asyncHandler(async(res,req) => {
 return  res.json({
      message:"ok"
     })
})


export {registerUser}
