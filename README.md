# chrome-aws-lambda-example

AWS LambdaでPuppeteerを動かすサンプルプログラムです。

Yahoo!占いにアクセスして獅子座の運勢を取得して、コンソールに出力します。

```
npm install
npm run pack
```

で`chrome-aws-lambda-example.zip`が作成されるので、それをLambdaにアップロードすると動きます。ただし、Lambda関数のメモリは1600MB、タイムアウト30秒に調整してください。

