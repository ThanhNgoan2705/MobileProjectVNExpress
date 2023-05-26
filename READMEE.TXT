Tạo project NestJs
-- cài đặt thư viện nestjs
npm install -g @nestjs/cli 

-- kiểm tra thư viện nest
 nest

 -- tạo 1 project mới bằng nestjs

 nest new < tên project> 

  cd <tên project>

 -- run project
npm run start

làm sao để generate ra module: 
nest g module "module name"

-- có 2 entities : User and node
- User : viết chức năng đăng kí đăng nhập cho User và viết nhiều notes

Controller : nơi nhận request từ client
Controller sẽ gọi tới service để thực hiện request đó

Inject : Auto init whenever we use

method Post liên quan tới việc thêm mới bản ghi hay thêm new user

install prisma để có thể quản lý cơ sở dữ liệu bao gồm truy vấn và quản lý schema cơ sở dữ liệu

$ npm npm install @prisma/client

-- add prisma vào thư viện
npm add -D prisma

định nghĩa các thực thể trong schema

migrate tới cơ sở dữ liệu

 sư dụng thư viện validator và tranfomer để validate dữ liệu nhập vào
 npm add class-validator class-transformer

 bắt buộc người dùng nhập mật khẩu và email đúng định dạng và ko được để trống

 sử dụng argon2 để mã hóa mật khẩu khi người dùng nhập vào
 npm add argon2
