const http = require('http');
const multiparty = require('multiparty')// 中间件，处理FormData对象的中间件
const path = require('path')
const fse = require('fs-extra')//文件处理模块

const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian');

// 解析POST请求传递的参数
function resolvePost(req) {
  // 解析参数
  return new Promise(resolve => {
    let chunk = ''
    req.addListener('data', data => { //req接收到了前端的数据
      console.log(data, 'resolvePost')
      chunk += data //将接收到的所有参数进行拼接
    })
    req.on('end', (data) => {
      console.log('end', req)
      // resolve(JSON.parse(chunk))//将字符串转为JSON对象
    })
  })
}

server.on('request', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.url === '/api/upload') {
    const multipart = new multiparty.Form();
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        res.end(JSON.stringify({ //向前端输出
          code: -1,
          message: '切片上传失败'
        }))
        return;
      }

      // console.log('fields=', fields);
      // console.log('files=', files);

      const [file] = files.file;
      const [fileName] = fields.fileName;
      const [chunkName] = fields.chunkName;
      const [index] = fields.index;

      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)//在qiepian文件夹创建一个新的文件夹，存放接收到的所有切片
      if (!fse.existsSync(chunkDir)) { //文件夹不存在，新建该文件夹
        await fse.mkdirs(chunkDir);
      } else if (index == 0) {
        await fse.remove(chunkDir);
        await fse.mkdirs(chunkDir);
      }

      // 把切片移动进chunkDir
      await fse.move(file.path, `${chunkDir}/${chunkName}`)

      res.end(JSON.stringify({ //向前端输出
        code: 0,
        data: {
          message: '切片上传成功'
        }
      }))
    })
  }

  if (req.url === '/api/merge') {
    req.on('data', (data) => {
      console.log(data, 'on data')
    })
    const data = await resolvePost(req);
    console.log(data, 'data')
  }
})

server.listen(9999, () => {
  console.log('服务已启动');
})