import"./react-vendor.354bfc68.js";import{p as u}from"./vendor.d893e9a4.js";import"./markmap.2d25d7f1.js";import"./__commonjsHelpers__.be7665b8.js";import"./lodash.b4f4b5bf.js";const E={},F="wrapper";function a({components:e,...n}){return u(F,{...E,...n,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"\u524D\u7AEF\u6301\u7EED\u96C6\u6210\u4E09\uFF1Anginx")),u("h2",null,"\u524D\u8A00"),u("p",null,"jenkins \u7684\u5927\u4F53\u6D41\u7A0B\u5904\u7406\u5B8C\u6BD5\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u642D\u5EFA nginx\uFF0C\u7136\u540E\u914D\u5408 webhook\uFF0C\u89E6\u53D1 jenkins \u7684\u81EA\u52A8\u6784\u5EFA\u548C\u53D1\u5E03"),u("h2",null,"\u5B89\u88C5 nginx"),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},`\u5B89\u88C5 nginx
apt-get install nginx`)),u("li",{parentName:"ul"},u("p",{parentName:"li"},`\u914D\u7F6E nginx
cd /etc/nginx/conf.d
vim jenkins.conf`),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`server {
listen  8091;
server_name 192.168.99.100;

location / {
  // \u5DE5\u7A0B\u7684\u6784\u5EFA\u540E\u7684build\u5730\u5740
  root /var/jenkins_home/workspace/blog/dist;
  index index.html;
  }
}
`))),u("li",{parentName:"ul"},u("p",{parentName:"li"},`\u914D\u7F6E\u6620\u5C04\u7AEF\u53E3
\u4E3A\u4E86\u7B80\u5355\uFF0C\u76F4\u63A5\u5728 jenkins \u5BB9\u5668\u91CC\uFF0C\u518D\u5F00\u4E00\u4E2A\u6620\u5C04\u7AEF\u53E3`),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`// \u505C\u6B62\u539F\u578B\u7684jenkins
docker stop jenkins
// \u7528jenkins\u751F\u6210\u4E00\u4E2A\u955C\u50CFjenkins1
docker commit 29d jenkins1
// \u7528jenkins\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668\uFF0C\u518D\u591A\u52A0\u4E00\u4E2A8091\u7684\u7AEF\u53E3
docker run -d --privileged --name jenkins1 -p 8091:8091 -p 8089:8080 -p 50000:50000 -v /docker/jenkins_home:/var/jenkins_home --privileged=true jenkins1
// \u8FDB\u5165\u5BB9\u5668
cd /usr/sbin
// \u542F\u52A8nginx
./nginx
`))),u("li",{parentName:"ul"},u("p",{parentName:"li"},`\u8BBF\u95EE http//:192.168.99.100:8091
\u6253\u5F00\u6210\u529F`))),u("h2",null,"\u8C03\u6574\u6784\u5EFA\u811A\u672C"),u("pre",null,u("code",{parentName:"pre"},`\`\`\`code
echo $WORKSPACE
node -v
npm install
npm run build:test
\`\`\`

\u62A5\u9519\uFF1A\`Read-only file system\`
\u5728 win7 com \u4E2D\u8FD0\u884C
VBoxManage setextradata default VBoxInternal2/SharedFoldersEnableSymlinksCreate/docker 1
VBoxManage getextradata default enumerate

\u7531\u4E8Eyarn \u5B89\u88C5\u8001\u662F\u62A5\`info There appears to be trouble with your network connection. Retrying...\`\u7684\u9519\u8BEF\uFF0C\u5C31\u6539\u6210\u7528npm\u8FD0\u884C
\u66F4\u6539yarn\u7684registry\u4E5F\u6CA1\u7528\uFF0C\u540E\u9762\u91CD\u542F\u4E0B\u770B\u770B
`)),u("h2",null,"\u603B\u7ED3"),u("p",null,"\u7531\u4E8E\u5185\u7F51\u7A7F\u900F\u5DE5\u5177\u4E0D\u597D\u627E\uFF0C\u4E0B\u8F7D ngrok \u53C8\u62A5\u75C5\u6BD2\uFF0C\u5C31\u6CA1\u505A webhook \u7684\u9A8C\u8BC1\u4E86\u3002"),u("p",null,"\u57FA\u672C\u4ECE\u5B89\u88C5 docker \uFF0C\u5230 jenkins\uFF0C\u518D\u5230 nginx\uFF0C\u4E00\u6B65\u6B65\u6D41\u7A0B\u4E0B\u6765\u81EA\u5DF1\u642D\u5EFA\uFF0C\u6536\u8D27\u633A\u5927\u7684\u3002"),u("p",null,"\u4ECE github actions \u7684\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u5230 docker +jenkins+nginx \u7684\u81EA\u52A8\u5316\u6784\u5EFA\u90E8\u7F72\uFF0C\u5B66\u4E60\u4E86\u5F88\u591A\u3002\u7279\u522B\u5BF9 docker \u53C8\u591A\u4E86\u4E00\u4E9B\u4E86\u89E3"),u("p",null,"\u63A5\u4E0B\u6765\u518D\u5B66\u4E60\u4E0B dockerfile\uFF0C\u670D\u52A1\u7AEF\u8FD9\u5757\u7684\u77E5\u8BC6\u5E94\u8BE5\u662F\u5DEE\u4E0D\u591A\u4E86\u3002"),u("h2",null,"\u53C2\u8003\u6587\u6863"),u("p",null,u("a",{parentName:"p",href:"https://juejin.cn/post/6844903986017878029"},"Jenkins \u5165\u95E8\u5B9E\u6218\uFF1AGitHub Push \u89E6\u53D1 Jenkins \u81EA\u52A8\u6784\u5EFA")))}a.isMDXComponent=!0;export{a as default};
