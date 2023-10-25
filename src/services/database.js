import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-phonestore.tvhwtff.mongodb.net/?retryWrites=true&w=majority`;

export const databaseConnection = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Connect Db success!");
    })
    .catch((error) => {
      console.log("Error in Database Service: ", error);
    });
};
// mongoose.connection.on("connected", () => {
//   // Lấy thông tin cơ sở dữ liệu
//   const db = mongoose.connection.db;

//   console.log("Kết nối cơ sở dữ liệu thành công");
//   console.log(" cơ sở dữ liệu:", db);

//   // Lấy danh sách các collection trong cơ sở dữ liệu
//   db.listCollections().toArray((err, collections) => {
//     console.log("Các collection trong cơ sở dữ liệu:");
//     collections.forEach((collection) => {
//       console.log(collection.name);
//     });
//   });
// });
