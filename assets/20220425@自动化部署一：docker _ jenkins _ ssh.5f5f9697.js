import{v as u}from"./vendor.e6348de1.js";const n={},F="wrapper";function t({components:e,...a}){return u(F,{...n,...a,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"\u524D\u7AEF\u6301\u7EED\u96C6\u6210\u4E00\uFF1Adocker + jenkins + ssh")),u("h2",null,"\u524D\u8A00"),u("p",null,"CI\uFF1AContinuous Integration\uFF0C\u4E5F\u5C31\u662F\u6301\u7EED\u96C6\u6210"),u("p",null,"CD\uFF1AContinuous Delivery \u548C Continuous Deployment\uFF0C\u4E5F\u5C31\u662F\u6301\u7EED\u4EA4\u4ED8\u3001\u6301\u7EED\u90E8\u7F72"),u("p",null,"\u4F5C\u4E3A\u4E00\u4E2A\u524D\u7AEF\uFF0C\u4E0D\u80FD\u53EA\u77E5\u5176\u7136\u4E0D\u77E5\u5176\u6240\u4EE5\u7136\uFF0C\u63D0\u4EA4\u4E0B\u4EE3\u7801\uFF0C\u70B9\u51FB\u53D1\u5E03\uFF0C\u5C31\u5B8C\u4E8B\u4E86\u3002\u60F3\u5F04\u6E05\u695A\u4E00\u6574\u4E2A\u6D41\u7A0B\uFF0C\u81EA\u5DF1\u642D\u5EFA\u4E00\u6B21\uFF0C\u662F\u5F88\u6709\u5FC5\u8981\u7684\u3002"),u("p",null,"\u6301\u7EED\u96C6\u6210\u4E3B\u8981\u6709\u4E09\u70B9\uFF1A"),u("ol",null,u("li",{parentName:"ol"},"\u51C6\u5907\u4EE3\u7801\u5E93\uFF1Agithub \u4E0A\u521B\u5EFA\u4E00\u4E2A\u4ED3\u5E93"),u("li",{parentName:"ol"},"\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF1A\u901A\u8FC7 eslint, typescript \u505A\u9759\u6001\u4EE3\u7801\u68C0\u67E5"),u("li",{parentName:"ol"},"\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF1A\u901A\u8FC7 husky+lint-staged+prettier\uFF0C\u505A git \u7684\u4EE3\u7801\u89C4\u8303\u68C0\u67E5"),u("li",{parentName:"ol"},"\u73AF\u5883\u642D\u5EFA\uFF1A\u901A\u8FC7 docker\uFF0C\u5B89\u88C5 jenkins \u5BB9\u5668\uFF0C\u5E76\u5728 jenkins \u5BB9\u5668\u4E2D\u5B89\u88C5 nodejs\u3001Nginx"),u("li",{parentName:"ol"},"\u6784\u5EFA\u90E8\u7F72\uFF1A\u5728 jenkins \u4E0A\u90E8\u7F72\u4E00\u4E2A\u6D41\u6C34\u7EBF\u5E76\u81EA\u52A8\u6784\u5EFA\u53D1\u5E03")),u("h2",null,"\u80CC\u666F"),u("p",null,`\u6709\u4E2A\u9879\u76EE A \u7528 jenkins \u6784\u5EFA\uFF0C\u6240\u4EE5\u60F3\u987A\u4FBF\u719F\u6089\u4E0B\u7528 jenkins \u505A CICD\uFF0C\u4E4B\u524D\u6709\u63A5\u89E6\u8FC7 nestjs\uFF0C\u7528 docker \u53D1\u5E03\u3002
\u6240\u4EE5\u60F3\u7528 docker + jenkins \u505A\u4E2A\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u987A\u4FBF\u5B66\u4E60\u4E0B\u6574\u4E2A\u6D41\u7A0B\uFF0C\u8FD8\u6709\u642D\u5EFA\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898`),u("p",null,"\u7535\u8111\u914D\u7F6E\u6709\u70B9\u5DEE\uFF0C\u76EE\u524D\u8FD8\u662F\u7528\u7684 win7\uFF0C\u4EE5\u4E0B\u90FD\u662F\u5728 win7 \u4E2D\u64CD\u4F5C"),u("h2",null,"docker \u5E38\u7528\u547D\u4EE4"),u("table",null,u("thead",{parentName:"table"},u("tr",{parentName:"thead"},u("th",{parentName:"tr",align:null},"\u547D\u4EE4"),u("th",{parentName:"tr",align:null},"\u63CF\u8FF0"))),u("tbody",{parentName:"table"},u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker rm ${id}"),u("td",{parentName:"tr",align:null},"\u5220\u9664\u5BB9\u5668")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker pull jenkins/jenkins"),u("td",{parentName:"tr",align:null},"\u4E0B\u8F7D jenkins")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker images -a"),u("td",{parentName:"tr",align:null},"\u67E5\u770B\u6240\u6709\u955C\u50CF")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker rmi jenkins/jenkins"),u("td",{parentName:"tr",align:null},"\u5220\u9664\u955C\u50CF")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker ps -a"),u("td",{parentName:"tr",align:null},"\u67E5\u770B\u6240\u6709\u5BB9\u5668")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker stop ${id}"),u("td",{parentName:"tr",align:null},"\u505C\u6B62\u5BB9\u5668")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker-machine env"),u("td",{parentName:"tr",align:null},"\u67E5\u770B docker \u670D\u52A1\u5668\u7684\u4FE1\u606F\uFF0C\u67E5\u770B ip")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker run -d --name jenkins jenkins/jenkins"),u("td",{parentName:"tr",align:null},"\u542F\u52A8 jenkins \u5BB9\u5668\uFF08\u7AEF\u53E3\u662F 8080\uFF09")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker exec -it jenkins bash"),u("td",{parentName:"tr",align:null},"\u8FDB\u5165\u5BB9\u5668\u865A\u62DF\u673A")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker exec -it -u root jenkins bash"),u("td",{parentName:"tr",align:null},"\u4EE5 root \u8EAB\u4EFD\u8FDB\u5165\u5BB9\u5668\u865A\u62DF\u673A")),u("tr",{parentName:"tbody"},u("td",{parentName:"tr",align:null},"docker exec {containerID} env"),u("td",{parentName:"tr",align:null},"\u67E5\u770B\u73AF\u5883\u53D8\u91CF")))),u("h2",null,"\u5B89\u88C5 docker"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u4E0B\u8F7D",u("inlineCode",{parentName:"p"},"Docker Toolbox")),u("p",{parentName:"li"},u("a",{parentName:"p",href:"http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/?spm=5176.8351553.0.0.4bc61991tQpsnV"},"\u963F\u91CC\u955C\u50CF\u5F00\u6E90 Docker Toolbox"))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5B89\u88C5 docker"))),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},"boot2docker.iso \u4F1A\u6BD4\u8F83\u65E7\uFF0C\u9700\u8981\u53BB",u("a",{parentName:"p",href:"https://github.com/boot2docker/boot2docker/releases"},"github"),"\u4E0B\u4E2A\u6700\u65B0\u7684\u955C\u50CF")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u9ED8\u8BA4\u4F1A\u5B89\u88C5 virtualBox v5 \u7248\u672C\uFF0C\u5982\u679C\u6709\u63D0\u793A v5b \u4E0D\u80FD\u7528\u7684\u8BDD\uFF0C\u53BB ",u("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"virtualBox \u5B98\u7F51"),"\uFF0C\u624B\u52A8\u4E0B\u8F7D\u6700\u65B0\u7684\u7248\u672C v6")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u5B89\u88C5\u5B8C\u540E git \u8DEF\u5F84\u53EF\u80FD\u8DDF\u539F\u6765\u7684\u4E0D\u5339\u914D\uFF0C\u53F3\u952E\u6253\u5F00",u("inlineCode",{parentName:"p"},"Docker Quickstart Terminal"),"\uFF0C\u8BBE\u7F6E git \u7684\u5B89\u88C5\u8DEF\u5F84")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u70B9\u51FB",u("inlineCode",{parentName:"p"},"Docker Quickstart Terminal"),"\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA\u865A\u62DF\u673A\uFF0C\u521B\u5EFA ssh \u7B49\u4E00\u7CFB\u5217\u64CD\u4F5C"),u("p",{parentName:"li"},u("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/yaolx/picBed@main/blogs/pics/20220426125227.png",alt:"20220426125227"})),u("p",{parentName:"li"},"\u8FDB\u5165\u8FD9\u4E2A\u9875\u9762\uFF0C\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u4E86"))),u("ol",{start:3},u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8BBE\u7F6E\u5171\u4EAB\u6587\u4EF6\u5939\uFF0C\u65B9\u4FBF\u7EF4\u62A4\u6570\u636E"),u("p",{parentName:"li"},"\u5728 virtualBox \u4E2D\u6253\u5F00",u("inlineCode",{parentName:"p"},"\u5171\u4EAB\u6587\u4EF6\u5939"),`\uFF0C\u5C06 win7 \u4E2D\u7684 D:/docker \u6307\u5B9A\u5230\u865A\u62DF\u673A\u4E2D\u7684 dokcer\uFF0C\u52FE\u9009\u81EA\u52A8\u6302\u8F7D\u3002
\u4EE5\u540E\u5728 docker \u4E2D\u542F\u52A8\u5BB9\u5668\uFF0C\u53EF\u4EE5\u5C06\u5BB9\u5668\u6570\u636E\u6307\u5B9A\u5230 docker \u76EE\u5F55\u4E0B\uFF0C\u65B9\u4FBF\u76F4\u63A5\u64CD\u4F5C\u6570\u636E`)),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u914D\u7F6E docker \u52A0\u901F\u5668"),u("p",{parentName:"li"},"\u7528",u("a",{parentName:"p",href:"http://docs.daocloud.io/faq/what-is-daocloud-accelerator"},"daocloud"),"\uFF0C\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\uFF0C\u62FF\u5230\u955C\u50CF\u5730\u5740\u3002\u786E\u8BA4 Docker Toolbox \u5DF2\u7ECF\u542F\u52A8\uFF0C\u5E76\u6267\u884C\u4E0B\u5217\u547D\u4EE4\uFF08\u5C06 \u52A0\u901F\u5730\u5740 \u66FF\u6362\u4E3A\u5728",u("a",{parentName:"p",href:"https://www.daocloud.io/mirror#accelerator-doc"},"\u52A0\u901F\u5668"),"\u9875\u9762\u83B7\u53D6\u7684\u4E13\u5C5E\u5730\u5740\uFF09"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`  docker-machine ssh default
  sudo sed -i "s|EXTRA_ARGS='|EXTRA_ARGS='--registry-mirror=\u52A0\u901F\u5730\u5740 |g" /var/lib/boot2docker/profile
  exit
  docker-machine restart default
`)))),u("h2",null,"\u5B89\u88C5\u3001\u914D\u7F6E jenkins"),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"docker pull jenkins/jenkins"),"\uFF1A\u4E0B\u8F7D jenkins")),u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"docker images -a"),"\uFF1A\u67E5\u770B\u6240\u6709\u955C\u50CF")),u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"docker-machine env"),"\uFF1A\u67E5\u770B docker \u670D\u52A1\u5668\u7684\u4FE1\u606F\uFF0C\u83B7\u53D6 ip ",u("inlineCode",{parentName:"p"},"http://192.168.99.100:2376"))),u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"docker run -d --privileged --name jenkins -p 8089:8080 -p 50000:50000 -v /docker/jenkins_home:/var/jenkins_home --privileged=true jenkins/jenkins")),u("p",{parentName:"li"},"\u751F\u6210\u5BB9\u5668\uFF0C\u5C06\u6570\u636E\u5377\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684 docker/jenkins_home \u76EE\u5F55\uFF0C\u53EF\u4EE5\u907F\u514D\u6BCF\u6B21\u91CD\u542F\u5BB9\u5668\uFF0C\u5BFC\u81F4\u6570\u636E\u4E22\u5931"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},"\u62A5\u9519\uFF1A `pool: crypto/x509: system root pool is not available on Windows`\ndocker-toolbox\u7248\u672C\u7684\u95EE\u9898\uFF0C\u964D\u7EA7\u52301.12.x\n")),u("p",{parentName:"li"},"\u542F\u52A8 jenkins \uFF08\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\u662F 8089\uFF09")),u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"docker ps -a")),u("p",{parentName:"li"},"\u67E5\u770B\u6240\u6709\u5BB9\u5668\u72B6\u6001\uFF0C",u("inlineCode",{parentName:"p"},"status:up"),"\u8BF4\u660E\u542F\u52A8\u6210\u529F\u4E86")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u8BBF\u95EE jenkins \u9996\u9875",u("inlineCode",{parentName:"p"},"http://192.168.99.100:8089")),u("p",{parentName:"li"},"\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u4E86")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u914D\u7F6E ssh \u4FE1\u606F"),u("p",{parentName:"li"},"\u8FDB\u5165",u("inlineCode",{parentName:"p"},"jenkins"),"\u5BB9\u5668"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`docker exec -it jenkins /bin/bash
mkdir ~/.ssh && cd ~/.ssh
ssh-keygen -t rsa
`)),u("p",{parentName:"li"},"\u4E00\u76F4\u56DE\u8F66\uFF0Cid_rsa \u521B\u5EFA\u6210\u529F\u3002\u518D\u901A\u8FC7 cat id_rsa.pub \u590D\u5236\u8BE5\u79D8\u94A5"),u("p",{parentName:"li"},"\u5C06\u5B83\u590D\u5236\u5230 ssh \u670D\u52A1\u5668\u90A3\u8FB9\u7684 authorized_keys \u91CC\uFF0C\u65B9\u4FBF\u540E\u7EED\u514D\u5BC6\u767B\u5F55"))),u("h2",null,"\u5B89\u88C5\u670D\u52A1\u5668 ssh \u670D\u52A1"),u("p",null,"\u5047\u8BBE\u8FD8\u6709\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u7136\u540E\u7528 docker \u5B89\u88C5\u4E00\u4E2A\u865A\u62DF\u673A\uFF0C\u9700\u8981\u5728\u4E0A\u9762\u90E8\u7F72 ssh \u670D\u52A1"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5B89\u88C5 linux \u865A\u62DF\u673A\uFF0C\u5B89\u88C5\u4F9D\u8D56\u7B49"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`  docker pull centos:7
  docker run -it centos:7 /bin/bash
  yum -y update
  yum install passwd openssl openssh-server net-tools vim -y
  ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
  ssh-keygen -t rsa -f /etc/ssh/ssh_host_ecdsa_key
  ssh-keygen -t rsa -f /etc/ssh/ssh_host_ed25519_key

  //\u4FEE\u6539\u6587\u672C\u4F8B\u5B50   sed -i "s/#StrictHostKeyChecking.*/StrictHostKeyChecking no/g" /etc/ssh/sshd_config

  # \u4FEE\u6539\u5BC6\u7801
  passwd
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8BBE\u7F6E\u542F\u52A8\u811A\u672C run.sh"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`  # \u5728/\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2A run.sh \u7684\u811A\u672C
  vi /run.sh

  # \u8BBE\u7F6E\u811A\u672C\u5185\u5BB9\u542F\u52A8 sshd \u670D\u52A1
  #!/bin/bash
  /usr/sbin/sshd -D

  # \u8BBE\u7F6E\u53EF\u6267\u884C\u6743\u9650
  chmod +x /run.sh
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u751F\u6210\u65B0\u955C\u50CF"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},`docker ps -a
docker commit 4eb ssh
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u542F\u52A8\u5BB9\u5668 ssh"),u("p",{parentName:"li"},"// docker run -d --name ssh -p 2222:22 ssh /run.sh"),u("p",{parentName:"li"},"docker run -d --name ssh -p 2223:22 --privileged=true ssh /usr/sbin/init"),u("p",{parentName:"li"},`--privileged=true \u53EF\u4EE5\u5F00\u542F systemctl \u6743\u9650\uFF0C\u53EF\u4EE5\u67E5\u770B sshd \u670D\u52A1\u662F\u5426\u542F\u52A8\uFF0C\u8FD8\u6709\u91CD\u542F\uFF0C\u505C\u6B62\u7B49
systemctl status sshd.service`)),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8FDC\u7A0B\u8FDE\u63A5 ssh \u9A8C\u8BC1"),u("p",{parentName:"li"},"systemctl status sshd.service"),u("ul",{parentName:"li"},u("li",{parentName:"ul"},"\u8FDB\u5165 jenkins \u5BB9\u5668\uFF1Assh ",u("a",{parentName:"li",href:"mailto:root@192.168.99.100"},"root@192.168.99.100"),` -p 2223
\u8981\u6C42\u8F93\u5165\u5BC6\u7801\uFF0C\u9A8C\u8BC1\u901A\u8FC7`),u("li",{parentName:"ul"},"win7 \u4E3B\u673A\u9A8C\u8BC1\uFF0C\u7528 secureCRT \u8FDE\u63A5\uFF0C\u4E5F\u662F\u8F93\u5165\u5BC6\u7801\uFF0C\u9A8C\u8BC1\u901A\u8FC7"))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5728 ssh \u5BB9\u5668\u4E2D\uFF0C\u521B\u5EFA\u5141\u8BB8\u5916\u90E8\u8BBF\u95EE\u7684\u8BA4\u8BC1\u6587\u4EF6\uFF08TO \u514D\u5BC6\u529F\u80FD\u8FD8\u5F85\u5904\u7406\uFF09"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-code"},"mkdir -p ~/.ssh\n> ~/.ssh/authorized_keys\nvim authorized_keys\n\u5C06jenkins\u4E2D\u7684`cat id_rsa.pub`\uFF0C\u590D\u5236\u5230`authorized_keys`\n")))),u("h2",null,"\u603B\u7ED3"),u("p",null,"docker + jenkins + ssh \u5DF2\u642D\u5EFA\u5B8C\u6BD5\uFF0C\u7528 ssh \u8BBF\u95EE\u90FD\u6B63\u5E38\u8FDE\u63A5"),u("p",null,"\u4E0B\u4E00\u7BC7\u4ECB\u7ECD\uFF0Cjenkin \u7684\u914D\u7F6E\uFF0C\u8FDE\u63A5 github\uFF0C\u81EA\u52A8\u6784\u5EFA"),u("h2",null,"\u53C2\u8003\u6587\u6863"),u("p",null,u("a",{parentName:"p",href:"https://juejin.cn/post/6844904197549391879#heading-6"},"Docker \u4F7F\u7528 Centos \u955C\u50CF\u5B89\u88C5 Openssh \u670D\u52A1")),u("p",null,u("a",{parentName:"p",href:"https://juejin.cn/post/6869736425953165319"},"Docker+Nginx+Jenkins \u5B9E\u73B0\u524D\u7AEF\u81EA\u52A8\u5316\u90E8\u7F72")),u("p",null,u("a",{parentName:"p",href:"https://blog.csdn.net/wy_______/article/details/114387265"},"Docker \u7B80\u4ECB\u548C Win7 \u5B89\u88C5 Docker")))}t.isMDXComponent=!0;export{t as default};
