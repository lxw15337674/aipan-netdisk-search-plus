# 爱盼-网盘资源搜索Web
基于[aipan-netdisk-search](https://github.com/unilei/aipan-netdisk-search),修复源、跳转。
有时间会继续维护。
 
### 建议
项目使用的是第三方的API，对ip有访问限制，建议自己部署使用。

## 快速开始

### 在 Vercel 上部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/unilei/aipan-netdisk-search.git&project-name=aipan-netdisk-search&repository-name=aipan-netdisk-search)

### 在 Vercel 上手动部署 操作方法

```
1. fork 本项目
2. 在 [Vercel] 官网点击 [New Project]
3. 点击 [Import Git Repository] 并选择你 fork 的此项目并点击 [import]
4. 然后直接点 [Deploy] 接着等部署完成即可
```

### Docker执行

#### docker cli

##### 编译

```bash
docker build -t unilei/aipan-netdisk-search:latest .
```
##### 运行

```bash
docker run -p 3000:3000 unilei/aipan-netdisk-search:latest
```
##### 停止

```bash
docker stop unilei/aipan-netdisk-search:latest
```

#### Docker-compose

##### 编译

```bash
docker compose build
```
##### 运行

```bash
docker compose up -d
```

##### 停止

```bash
docker compose down
```

### 1. 克隆项目

```bash
git clone https://github.com/unilei/aipan-netdisk-search.git
```

### 2. 安装依赖
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```
### 3. 运行到浏览器

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

### 4. 在浏览器打开 [http://localhost:3001](http://localhost:3001)
![success_deploy.jpg](/assets/readme/screen-1.png)
![success_deploy.jpg](/assets/readme/screen-2.png)

#### 如何部署到自己服务器？ NUXT.JS 打包部署文档
[部署文档](https://nuxt.com/docs/getting-started/deployment)

### 打赏
<img src="/assets/donation/wechat_pay.jpg" width=200  />

### 交流
<img src="/assets/readme/wechat.jpg" width=200  />
