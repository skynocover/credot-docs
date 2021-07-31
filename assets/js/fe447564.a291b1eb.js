(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(159)),o={title:"docker",sidebar_position:1},l={unversionedId:"advanced/dbdump/docker",id:"advanced/dbdump/docker",isDocsHomePage:!1,title:"docker",description:"sh",source:"@site/docs/advanced/dbdump/docker.md",sourceDirName:"advanced/dbdump",slug:"/advanced/dbdump/docker",permalink:"/credot-docs/docs/advanced/dbdump/docker",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/dbdump/docker.md",version:"current",sidebarPosition:1,frontMatter:{title:"docker",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"setting",permalink:"/credot-docs/docs/advanced/CloudRun/setting"},next:{title:"\u5be6\u9ad4\u6a5fdb\u5099\u4efd",permalink:"/credot-docs/docs/advanced/dbdump/\u5be6\u9ad4\u6a5f"}},b=[{value:"sh",id:"sh",children:[]},{value:"\u5099\u4efd",id:"\u5099\u4efd",children:[]},{value:"cron",id:"cron",children:[]},{value:"\u9084\u539f",id:"\u9084\u539f",children:[{value:"postgres",id:"postgres",children:[]},{value:"mysql",id:"mysql",children:[]}]},{value:"\u53c3\u8003\u9023\u7d50",id:"\u53c3\u8003\u9023\u7d50",children:[]}],s={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"sh"},"sh"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'container_name=postgres\ndb_user=root\ndb_pw=2wsx4rfv6yhn\ndatabase_name=peman\nbackup_path=/root/dbbackup/$database_name\ncount=30\ndate_time=`date +%Y-%m-%d-%H-%M`\nsql_command="pg_dump -U ${db_user} ${database_name}"\n# msql\n# mysqldump -u ${db_user} -p ${db_pw} ${database_name} \n\n#\u5982\u679c\u8cc7\u6599\u593e\u4e0d\u5b58\u5728\u5247\u5efa\u7acb\nif [ ! -d $backup_path ];\nthen\n mkdir -p $backup_path;\nfi\n\ndocker exec $container_name sh -c "${sql_command}" > $backup_path/$database_name-$date_time.sql\n\n#\u958b\u59cb\u58d3\u7e2e\ncd $backup_path\ntar -zcvf $database_name-$date_time.tar.gz $database_name-$date_time.sql\n\n#\u522a\u9664\u539f\u59cb\u6a94\nrm -rf $backup_path/$database_name-$date_time.sql\n\n#\u66f4\u65b0\u5099\u4efd\u65e5\u8a8c\necho "create $backup_path/$database_name-$date_time.tar.gz" >> $backup_path/dump.log\n\n#\u627e\u51fa\u9700\u8981\u522a\u9664\u7684\u5099\u4efd\ndelfile=`ls -l -crt $backup_path/*.tar.gz | awk \'{print $9 }\' | head -1`\n\n#\u5224\u65b7\u73fe\u5728\u7684\u5099\u4efd\u6578\u91cf\u662f\u5426\u5927\u65bc\u95be\u503c\nnumber=`ls -l -crt $backup_path/*.tar.gz | awk \'{print $9 }\' | wc -l`\n\nif [ $number -gt $count ]\nthen\n #\u522a\u9664\u6700\u65e9\u751f\u6210\u7684\u5099\u4efd\uff0c\u53ea\u4fdd\u7559count\u6578\u91cf\u7684\u5099\u4efd\n rm $delfile\n #\u66f4\u65b0\u522a\u9664\u6a94\u6848\u65e5\u8a8c\n echo "delete $delfile" >> $backup_path/dump.log\nfi\n')),Object(c.b)("h2",{id:"\u5099\u4efd"},"\u5099\u4efd"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5168\u90e8\u8cc7\u6599\u5eab\u5099\u4efd")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},"docker exec some-mysql sh -c 'exec mysqldump --all-databases -u root -p\"$MYSQL_ROOT_PASSWORD\"' > /some/path/on/your/host/all-databases.sql\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5099\u4efd\u6307\u5b9a\u8cc7\u6599\u5eab")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},"docker exec some-mysql sh -c 'exec mysqldump --databases db1 -uroot -p\"$MYSQL_ROOT_PASSWORD\"' > /some/path/on/your/host/db1.sql\n")),Object(c.b)("h2",{id:"cron"},"cron"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"crontab -e")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u65b0\u589e\u6307\u4ee4")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"}," 0 * * * * /app/dump_db.sh")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"minute hour day month week\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u67e5\u770bcron\u5de5\u4f5c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"crontab -l")),Object(c.b)("h2",{id:"\u9084\u539f"},"\u9084\u539f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u89e3\u58d3\u7e2e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"tar zxvf my-file.tgz")),Object(c.b)("h3",{id:"postgres"},"postgres"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u9084\u539f")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"docker exec -i postgres sh -c 'exec psql peman' < peman-2021-05-27-05-55.sql\n")),Object(c.b)("h3",{id:"mysql"},"mysql"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5168\u90e8\u9084\u539f")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-docker"},"docker exec -i some-mysql sh -c 'exec mysql -u root -p\"$MYSQL_ROOT_PASSWORD\"' < /some/path/on/your/host/all-databases.sql\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u55ae\u500b\u9084\u539f")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"# \u6aa2\u8996\u5099\u4efd\u7684\u8cc7\u6599\u5eabsql\n[root@VM_0_9_centos sqlbackup]# ls\n76base_20200508.sql  backup_database.sh  backup.log  clear_history_backup.sh  clear.log  pizza_20200508.sql\n\n# \u8907\u88fd\u5099\u4efd\u904e\u7684sql\u5230mysql\u5bb9\u5668\u7684\u6839\u76ee\u9304\n[root@VM_0_9_centos sqlbackup]# docker cp ./76base_20200508.sql mysql_5.7:/\n\n# \u9032\u5165mysql\u5bb9\u5668\n[root@VM_0_9_centos sqlbackup]# docker exec -it mysql_5.7 /bin/bash\n\n# \u767b\u5165msyql\nroot@3527bdeca151:/# mysql -uroot -proot\n\n# \u5207\u63db\u5230\u8981\u6062\u5fa9\u7684\u8cc7\u6599\u5eab\nmysql> use 76base;\nDatabase changed\n\n# \u6062\u5fa9\u8cc7\u6599\u5eab\nmysql> source /76base_20200508.sql\n")),Object(c.b)("h2",{id:"\u53c3\u8003\u9023\u7d50"},"\u53c3\u8003\u9023\u7d50"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://iter01.com/505137.html"},"docker \u4e2d MySQL \u5099\u4efd\u53ca\u6062\u5fa9")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://blog.gtwang.org/linux/linux-crontab-cron-job-tutorial-and-examples/"},"cron\u8a2d\u5b9a"))))}d.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},i=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=d(n),i=a,m=u["".concat(o,".").concat(i)]||u[i]||p[i]||c;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=i;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);