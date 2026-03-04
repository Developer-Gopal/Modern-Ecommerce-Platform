import * as authService from "../services/authService.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {

 try {

   const user = await authService.registerUser(req.body);

   res.json({
     user,
     token: generateToken(user)
   });

 } catch (err) {
   res.status(500).json({ message: err.message });
 }

};

export const login = async (req, res) => {

 try {

   const user = await authService.loginUser(
     req.body.email,
     req.body.password
   );

   res.json({
     user,
     token: generateToken(user)
   });

 } catch (err) {
   res.status(400).json({ message: err.message });
 }

};