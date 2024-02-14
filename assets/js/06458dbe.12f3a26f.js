"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[464],{968:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=i(5893),o=i(1151);const t={},r="Using the commandline",a={id:"on-premises/commandline/index",title:"Using the commandline",description:"An image is specified by a blueprint and an image type. Unless you specify otherwise, it will use the same distribution and version (e.g. Fedora 33) as the host system. The architecture will always be the same as the one on the host.",source:"@site/docs/on-premises/02-commandline/index.md",sourceDirName:"on-premises/02-commandline",slug:"/on-premises/commandline/",permalink:"/docs/on-premises/commandline/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/on-premises/02-commandline/index.md",tags:[],version:"current",frontMatter:{},sidebar:"onPremises",previous:{title:"Managing repositories",permalink:"/docs/on-premises/installation/managing-repositories"},next:{title:"Building OSTree image",permalink:"/docs/on-premises/commandline/building-ostree-images"}},c={},l=[{value:"Blueprints management using composer-cli",id:"blueprints-management-using-composer-cli",level:2},{value:"Building an image using composer-cli",id:"building-an-image-using-composer-cli",level:2},{value:"Tip: Booting the image with qemu",id:"tip-booting-the-image-with-qemu",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-the-commandline",children:"Using the commandline"}),"\n",(0,s.jsx)(n.p,{children:"An image is specified by a blueprint and an image type. Unless you specify otherwise, it will use the same distribution and version (e.g. Fedora 33) as the host system. The architecture will always be the same as the one on the host."}),"\n",(0,s.jsx)(n.h2,{id:"blueprints-management-using-composer-cli",children:"Blueprints management using composer-cli"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"osbuild-composer"})," provides a storage for blueprints. To store a ",(0,s.jsx)(n.code,{children:"blueprint.toml"})," blueprint file, run this command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ composer-cli blueprints push blueprint.toml\n"})}),"\n",(0,s.jsx)(n.p,{children:"To verify that the blueprint is available, list all currently stored blueprints:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ composer-cli blueprints list\nbase-image-with-tmux\n"})}),"\n",(0,s.jsx)(n.p,{children:"To display the blueprint you have just added, run the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ sudo composer-cli blueprints show base-image-with-tmux\nname = "base-image-with-tmux"\ndescription = "A base system with tmux"\nversion = "0.0.1"\nmodules = []\ngroups = []\n\n[[packages]]\nname = "tmux"\nversion = "*"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"building-an-image-using-composer-cli",children:"Building an image using composer-cli"}),"\n",(0,s.jsx)(n.p,{children:"To build a customized image, start by choosing the blueprint and image type you would like to build. To do so, run the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo composer-cli blueprints list\n$ sudo composer-cli compose types\n"})}),"\n",(0,s.jsx)(n.p,{children:"and trigger a compose (example using the blueprint from the previous section):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ composer-cli compose start base-image-with-tmux qcow2\nCompose ab71b61a-b3c4-434f-b214-1e16527766ff added to the queue\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that the compose is assigned with a Universally Unique Identifier (UUID), that you can use to monitor the image build progress:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ composer-cli compose info ab71b61a-b3c4-434f-b214-1e16527766ff\nab71b61a-b3c4-434f-b214-1e16527766ff RUNNING  base-image-with-tmux 0.0.1 qcow2            2147483648\nPackages:\n    tmux-*\nModules:\nDependencies:\n"})}),"\n",(0,s.jsx)(n.p,{children:'At this time, the compose is in a "RUNNING" state. Once the compose reaches the "FINISHED" state, you can download the resulting image by running the following command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo composer-cli compose results ab71b61a-b3c4-434f-b214-1e16527766ff\nab71b61a-b3c4-434f-b214-1e16527766ff.tar: 455.18 MB\n$ fd\nab71b61a-b3c4-434f-b214-1e16527766ff.tar\n$ tar xf ab71b61a-b3c4-434f-b214-1e16527766ff.tar\n$ fd \nab71b61a-b3c4-434f-b214-1e16527766ff-disk.qcow2\nab71b61a-b3c4-434f-b214-1e16527766ff.json\nab71b61a-b3c4-434f-b214-1e16527766ff.tar\nlogs\nlogs/osbuild.log\n"})}),"\n",(0,s.jsxs)(n.p,{children:["From the example output above, the resulting tarball contains not only the ",(0,s.jsx)(n.code,{children:"qcow2"})," image, but also a ",(0,s.jsx)(n.code,{children:"JSON"})," file, which is the osbuild manifest (see the ",(0,s.jsx)(n.a,{href:"../../developer-guide/index",children:"Developer Guide"})," for more details), and a directory with logs."]}),"\n",(0,s.jsxs)(n.p,{children:["For more options, see the ",(0,s.jsx)(n.code,{children:"help"})," text for ",(0,s.jsx)(n.code,{children:"composer-cli"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo composer-cli compose help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"tip-booting-the-image-with-qemu",children:"Tip: Booting the image with qemu"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to quickly run the resulting image, you can use ",(0,s.jsx)(n.code,{children:"qemu"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ qemu-system-x86_64 \\\n                -enable-kvm \\\n                -m 3000 \\\n                -snapshot \\\n                -cpu host \\\n                -net nic,model=virtio \\\n                -net user,hostfwd=tcp::2223-:22 \\\n                ab71b61a-b3c4-434f-b214-1e16527766ff-disk.qcow2 \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Be aware that you must specify a way to access the machine in the blueprint. For example, you can create a user with known password, set an SSH key, or enable ",(0,s.jsx)(n.code,{children:"cloud-init"})," to use a ",(0,s.jsx)(n.code,{children:"cloud-init"})," ISO file."]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(7294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);