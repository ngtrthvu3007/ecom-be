# Sử dụng ảnh node.js v14
FROM node:20-alpine3.16

# Tạo thư mục ứng dụng
WORKDIR /app

# Sao chép tất cả các file từ thư mục hiện tại vào thư mục ứng dụng
COPY . .


RUN npm install


EXPOSE 8080

# Chạy ứng dụng khi container được khởi chạy
CMD ["npm", "start"]
