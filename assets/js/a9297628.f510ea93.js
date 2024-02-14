"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1187],{9256:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=i(5893),t=i(1151);const a={},o="Manifest generation",r={id:"developer-guide/projects/images/code-manifest-generation",title:"Manifest generation",description:"This document explains how manifests are generated in code. It is useful for",source:"@site/docs/developer-guide/02-projects/images/code-manifest-generation.md",sourceDirName:"developer-guide/02-projects/images",slug:"/developer-guide/projects/images/code-manifest-generation",permalink:"/docs/developer-guide/projects/images/code-manifest-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/images/code-manifest-generation.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"cmds",permalink:"/docs/developer-guide/projects/images/cmds"},next:{title:"Hacking on osbuild/images",permalink:"/docs/developer-guide/projects/images/developer"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Manifest Instantiation",id:"manifest-instantiation",level:2},{value:"The OS pipeline",id:"the-os-pipeline",level:3},{value:"The Build pipeline",id:"the-build-pipeline",level:3},{value:"Package Selection",id:"package-selection",level:3},{value:"Resolving Content",id:"resolving-content",level:2},{value:"Package sets",id:"package-sets",level:3},{value:"Containers",id:"containers",level:3},{value:"OSTree Commits",id:"ostree-commits",level:3},{value:"Manifest Serialization",id:"manifest-serialization",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manifest-generation",children:"Manifest generation"}),"\n",(0,s.jsx)(n.p,{children:"This document explains how manifests are generated in code. It is useful for\nunderstanding how (and where) changes should be made in the pipeline generation\ncode to have the desired effect."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Manifests are generated in two general stages: ",(0,s.jsx)(n.em,{children:"Instantiation"})," and ",(0,s.jsx)(n.em,{children:"Serialization"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Instantiation: Creates an object that implements the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Manifest",children:(0,s.jsx)(n.code,{children:"manifest.Manifest"})})," interface.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Creating this requires a number of steps. See ",(0,s.jsx)(n.a,{href:"#manifest-instantiation",children:"Manifest\nInstantiation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["An instantiated ",(0,s.jsx)(n.code,{children:"Manifest"})," contains:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"})," specifications for content: package names, containers, ostree\ncommits."]}),"\n",(0,s.jsxs)(n.li,{children:["An array of ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Pipeline",children:(0,s.jsx)(n.code,{children:"manifest.Pipeline"})})," objects, each\nwith necessary customizations and serialization methods for producing\nstage-sequences."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Serialization: Creates the sequence of stages based on each pipeline and\nproduces ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#OSBuildManifest",children:(0,s.jsx)(n.code,{children:"manifest.OSBuildManifest"})}),", which\nis a ",(0,s.jsx)(n.code,{children:"[]byte"})," array with custom un/marshalling methods.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This stage requires the content specifications resolved from the manifest\nsource specifications (package specs, container specs, ostree commit\nspecs). See ",(0,s.jsx)(n.a,{href:"#resolving-content",children:"Resolving Content"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"makeManifest()"})," function in ",(0,s.jsx)(n.code,{children:"cmd/build/main.go"})," is a straightforward\nimplementation of the sequence of actions required to generate a manifest\ndescribed below."]}),"\n",(0,s.jsx)(n.h2,{id:"manifest-instantiation",children:"Manifest Instantiation"}),"\n",(0,s.jsxs)(n.p,{children:["Instantiating a manifest involves generating an array of\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Pipeline",children:"Pipelines"})," that will produce an image. Each pipeline\nsupports different options that will affect the stages and stage options it\nwill generate."]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, manifest instantiation happens inside the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/distro/ImageType",children:(0,s.jsx)(n.code,{children:"ImageType.Manifest()"})})," function, which each distro\nimplements separately. The function is responsible for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Validating blueprint customizations for the selected image type."}),"\n",(0,s.jsx)(n.li,{children:"Collecting static package sets for the distro and image type."}),"\n",(0,s.jsx)(n.li,{children:"Collecting container source specs from the blueprint customizations."}),"\n",(0,s.jsxs)(n.li,{children:["Calling the image function for the image type, which creates an\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/image#ImageKind",children:(0,s.jsx)(n.code,{children:"image.ImageKind"})})," object, and"]}),"\n",(0,s.jsxs)(n.li,{children:["Instantiating the manifest using ",(0,s.jsx)(n.code,{children:"ImageKind.InstantiateManifest()"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-os-pipeline",children:"The OS pipeline"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#OS",children:"OS"})," pipeline is the biggest and most central\npipeline. It is responsible for generating the stages that will create the main\nOS tree of the resulting image. Almost all customizations that control specific\noptions for a bootable image are defined on this pipeline."]}),"\n",(0,s.jsx)(n.h3,{id:"the-build-pipeline",children:"The Build pipeline"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Build",children:"Build"})," pipeline is used in every manifest to define\na build root for all the following pipelines to run in. It is always added\nfirst and is almost never customized beyond package selection."]}),"\n",(0,s.jsx)(n.h3,{id:"package-selection",children:"Package Selection"}),"\n",(0,s.jsxs)(n.p,{children:["The OS pipeline's private ",(0,s.jsx)(n.code,{children:"getPackageSetChains()"})," method (which is called by\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Manifest.GetPackageSetChains",children:(0,s.jsx)(n.code,{children:"Manifest.GetPackageSetChains()"})}),")\nis a good example of dynamic package selection based on enabled features and\ncustomizations. Packages are selected based on features that will be required\non the running system. For example, if NTP servers are defined for the image,\nthe ",(0,s.jsx)(n.code,{children:"chrony"})," package is selected."]}),"\n",(0,s.jsxs)(n.p,{children:["The build pipeline is special in that extra packages are added to it\ndynamically based on the requirements of subsequent pipelines. Pipelines can\ndefine build packages that they require in the ",(0,s.jsx)(n.code,{children:"getBuildPackages()"})," private\nmethod. These packages will be merged with the static packages that are defined\nfor the build root. For example, if a container will be embedded in the OS\npipeline, the ",(0,s.jsx)(n.code,{children:"skopeo"})," package is added to the build root to copy the container\ninto the OS container store."]}),"\n",(0,s.jsx)(n.h2,{id:"resolving-content",children:"Resolving Content"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Manifest",children:(0,s.jsx)(n.code,{children:"Manifest"})})," objects should provide source\nspecifications for the content they need. Each ",(0,s.jsx)(n.strong,{children:"source specification"})," should be\nresolved to a ",(0,s.jsx)(n.strong,{children:"content specification"})," and passed to the serialization function to\ncreate the final manifest"]}),"\n",(0,s.jsxs)(n.p,{children:["All source and content specifications have type ",(0,s.jsx)(n.code,{children:"map[string][]<spec>"})," (where\n",(0,s.jsx)(n.code,{children:"<spec>"})," is the base type for the source or content specification). The map key\nis the name of the pipeline that requires the content and multiple specs can be\nassigned to each pipeline."]}),"\n",(0,s.jsx)(n.p,{children:"Currently there are three methods for three types of content that needs to be\nresolved."}),"\n",(0,s.jsx)(n.h3,{id:"package-sets",children:"Package sets"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Source specification"}),": The source specification for packages is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/rpmmd#PackageSet",children:(0,s.jsx)(n.code,{children:"rpmmd.PackageSet"})}),". Each package set defines a list of\npackage names to include, a list to exclude, and a set of RPM repositories to\nuse to resolve and retrieve the packages."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," The package source specification is special in that it defines an array\nof package ",(0,s.jsx)(n.em,{children:"sets"}),", which means each element in the array specifies multiple\npackages. We sometimes refer to this array as a ",(0,s.jsx)(n.em,{children:"package set chain"}),". Chains of\npackage sets are depsolved in order as part of the same call to ",(0,s.jsx)(n.code,{children:"dnf-json"}),". The\nresult of a depsolve of each package set in the chain is merged with the\nsubsequent set and the result is a single array of package specs."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Content specification"}),": The content specification for packages is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/rpmmd#PackageSpec",children:(0,s.jsx)(n.code,{children:"rpmmd.PackageSpec"})}),". Each package spec is a fully resolved\ndescription of an RPM, with metadata, a checksum, and a URL from which to\nretrieve the package."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resolving"}),": Resolving ",(0,s.jsx)(n.strong,{children:"package sets"})," to ",(0,s.jsx)(n.strong,{children:"package specs"})," is done using\nthe ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/internal/dnfjson#Solver.Depsolve",children:(0,s.jsx)(n.code,{children:"dnfjson.Solver.Depsolve()"})})," function. This\ncall resolves the dependencies of an array of package sets and returns all the\npackages that were specified, their dependencies, and the metadata for each\npackage."]}),"\n",(0,s.jsx)(n.h3,{id:"containers",children:"Containers"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Source specification"}),": The source specification for containers is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/container#SourceSpec",children:(0,s.jsx)(n.code,{children:"container.SourceSpec"})}),". The main component is the\n",(0,s.jsx)(n.code,{children:"Source"}),", which is a full ref to a container in a registry."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Content specification"}),": The content specification for containers is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/container#Spec",children:(0,s.jsx)(n.code,{children:"container.Spec"})}),". Each container spec is a fully\nresolved description of a container."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resolving"}),": Resolving ",(0,s.jsx)(n.strong,{children:"container source specs"})," to ",(0,s.jsx)(n.strong,{children:"container specs"})," is\ndone using the ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/container#Resolver",children:(0,s.jsx)(n.code,{children:"container.Resolver"})})," type. Container\nsource specs are added to the resolver with the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/container#Resolver.Add",children:(0,s.jsx)(n.code,{children:"Resolver.Add()"})})," method and all results are\nretrieved with the ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/container#Resolver.Finish",children:(0,s.jsx)(n.code,{children:"Resolver.Finish()"})}),"\nmethod."]}),"\n",(0,s.jsx)(n.h3,{id:"ostree-commits",children:"OSTree Commits"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Source specification"}),": The source specification for ostree commits is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/ostree#SourceSpec",children:(0,s.jsx)(n.code,{children:"ostree.SourceSpec"})}),". It contains a URL to an ostree\nrepository and a ref to resolve."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Content specification"}),": The content specification for ostree commits is the\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/ostree#CommitSpec",children:(0,s.jsx)(n.code,{children:"ostree.CommitSpec"})}),". Each ostree commit spec\ncontains the URL and ref from the source spec as well as the checksum of the\ncommit."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resolving"}),": Resolving ",(0,s.jsx)(n.strong,{children:"ostree source specs"})," to ",(0,s.jsx)(n.strong,{children:"ostree commit specs"})," is\ndone using the ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/ostree#Resolve",children:(0,s.jsx)(n.code,{children:"ostree.Resolve"})})," function. Resolving an\nostree source spec mainly involves resolving the content of the file at\n",(0,s.jsx)(n.code,{children:"<URL>/refs/heads/<REF>"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"manifest-serialization",children:"Manifest Serialization"}),"\n",(0,s.jsxs)(n.p,{children:["When a manifest is serialized by calling its\n",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/osbuild/images@main/pkg/manifest#Manifest.Serialize",children:(0,s.jsx)(n.code,{children:"Manifest.Serialize()"})}),", it runs the\nprivate ",(0,s.jsx)(n.code,{children:"serialize()"})," method on each pipeline in its array. Each pipeline in\nturn creates an array of stages with the appropriate options based on the\ncustomizations and options set on the pipeline."]}),"\n",(0,s.jsxs)(n.p,{children:["The final JSON representation of the manifest that can be used with osbuild can\nbe created by using the standard library ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/encoding/json#Marshal",children:(0,s.jsx)(n.code,{children:"json.Marshal()"})}),"\nfunction."]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);